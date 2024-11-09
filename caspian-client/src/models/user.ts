export interface IUser {
    id: number;
    name: string;
    surname: string;
    profilePicture: string;
    status: UserStatus;
}

enum UserStatus {
    ONLINE = 0,
    OFFLINE = 1
}