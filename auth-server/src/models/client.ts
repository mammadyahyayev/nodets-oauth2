export interface IClient {
    name: string;
    clientId: string;
    clientSecret: string;
    redirectUris: string[]
}

export class Client implements IClient {
    clientId: string;
    clientSecret: string;
    name: string;
    redirectUris: string[];

    constructor(
        name: string,
        clientId: string,
        clientSecret: string,
        redirectUris: string[]
    ) {
        this.name = name;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.redirectUris = redirectUris;
    }
}

