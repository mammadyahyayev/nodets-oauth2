import bcrypt from 'bcrypt';
import {IUser, User} from "../models/user";
import {assertNotNull} from "../utils/string-utils";

const DEFAULT_SALT_ROUND = 12;

export function createUser(firstName: string, lastName: string, username: string, password: string): IUser {
    assertNotNull(username, "username")
    assertNotNull(password, "password")

    const encryptedPassword = bcrypt.hash(password, DEFAULT_SALT_ROUND);

    return new User(firstName, lastName, username, encryptedPassword);
}