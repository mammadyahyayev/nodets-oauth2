export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    createdDate: string;
    lastModifiedDate: string;
}

export class User implements IUser {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    createdDate: string;
    lastModifiedDate: string;

    constructor(firstName: string, lastName: string, username: string, password: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
    }
}