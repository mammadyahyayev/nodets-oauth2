import bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';
import {IUser, User} from "../models/user";
import {assertNotNull} from "../utils/string-utils";

const DEFAULT_SALT_ROUND = 12;

const users: IUser [] = []

export async function createUser(firstName: string, lastName: string, username: string, password: string, errCallback: (text: string) => void): Promise<IUser | undefined> {
    assertNotNull(username, "username")
    assertNotNull(password, "password")

    if (isUserExistByUsername(username)) {
        errCallback(username + " already exists!")
        return undefined;
    }

    const uuid = uuidv4();
    const hashedPassword: string = await bcrypt.hash(password, DEFAULT_SALT_ROUND);
    const now = new Date();
    const user = new User(uuid, firstName, lastName, username, hashedPassword, now.toString(), now.toString());
    // todo: save user to db here
    console.log(user.fullName() + "  saved to database");
    user.password = undefined;
    users.push(user);
    return user;
}

function isUserExistByUsername(username: string): boolean {
    return users.find(user => user.username == username) != undefined;
}

export function findAllUsers(): IUser[] {
    return users;
}