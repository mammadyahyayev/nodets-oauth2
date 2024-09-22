import bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';
import {IUser, User} from "../models/user";
import {assertNotNull} from "../utils/string-utils";
import {UserRequest} from "../models/user-request";

const DEFAULT_SALT_ROUND = 12;

const users: IUser [] = []

export async function createUser(userRequest: UserRequest, errCallback: (text: string) => void): Promise<IUser | undefined> {
    assertNotNull(userRequest.username, "username")
    assertNotNull(userRequest.password, "password")

    if (isUserExistByUsername(userRequest.username)) {
        errCallback(userRequest.username + " already exists!")
        return undefined;
    }

    const uuid = uuidv4();
    const hashedPassword: string = await bcrypt.hash(userRequest.password, DEFAULT_SALT_ROUND);
    const now = new Date();
    const user = new User(uuid, userRequest.firstName, userRequest.lastName, userRequest.username, hashedPassword, now.toString(), now.toString());
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