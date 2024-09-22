export interface IClient {
    clientId: string;
    clientSecret: string;
    name: string;
}

export class Client implements IClient {
    clientId: string;
    clientSecret: string;
    name: string;

    constructor(clientId: string, clientSecret: string, name: string) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.name = name;
    }
}

