export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    password?: string;
    createdDate: string;
    lastModifiedDate: string;

    fullName: () => string;
}

export class User implements IUser {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string | undefined;
    createdDate: string;
    lastModifiedDate: string;

    constructor(
        id: string,
        firstName: string,
        lastName: string,
        username: string,
        password: string,
        createdDate: string,
        lastModifiedDate: string,
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.createdDate = createdDate;
        this.lastModifiedDate = lastModifiedDate;
    }

    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

export class UserRequest {
    firstName: string;
    lastName: string;
    username: string;
    password: string;

    constructor(firstName: string, lastName: string, username: string, password: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
    }
}