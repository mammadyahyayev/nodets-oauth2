const fs = require('fs')

import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { IUser, User } from "../models/user";
import { assertNotNull } from "../utils/stringUtils";
import { UserRequest } from "../models/user";
import path from 'path';

const DEFAULT_SALT_ROUND = 12;

export interface IUserService {
    createUser: (request: UserRequest, errCallback: (err: any) => void) => Promise<IUser | undefined>
    findAllUsers: () => IUser[];
    findByUsername: (username: string) => IUser | undefined;
}

export const getUserService = (): IUserService => {
    return new UserService();
}

class UserService implements IUserService {
    usersDataFilePath = path.join(__dirname, '../data/users.json')
    users: IUser[] = []

    async createUser(request: UserRequest, errCallback: (text: string) => void): Promise<IUser | undefined> {
        assertNotNull(request.username, "username")
        assertNotNull(request.password, "password")

        if (this.isUserExistByUsername(request.username)) {
            errCallback(request.username + " already exists!")
            return undefined;
        }

        const uuid = uuidv4();
        const hashedPassword: string = await bcrypt.hash(request.password, DEFAULT_SALT_ROUND);
        const now = new Date();
        const user = new User(uuid, request.firstName, request.lastName, request.username, hashedPassword, now.toString(), now.toString());
        // todo: save user to db here
        console.log(user.fullName() + "  saved to database");
        user.password = undefined;
        this.users.push(user);
        return user;
    }

    findAllUsers(): IUser[] {
        if (this.users && this.users.length > 0) {
            return this.users;
        }

        this.loadUsers();

        return this.users;
    }

    findByUsername(username: string): IUser | undefined {
        assertNotNull(username, 'username');
        
        if (this.users && this.users.length <= 0) {
            this.loadUsers();
        }

        return this.users.find(user => user.username === username);
    }

    private isUserExistByUsername(username: string): boolean {
        return this.users.find(user => user.username == username) != undefined;
    }

    private loadUsers(): void {
        fs.readFile(this.usersDataFilePath, 'utf8', (err: any, usersData: string) => {
            if (err) throw err;

            console.log('Reading users data from file: ', this.usersDataFilePath)

            this.users.push(...JSON.parse(usersData));
        })
    }
}

