interface IClient {
    clientId: string;
    clientSecret: string;
}

class Client implements IClient {
    clientId: string;
    clientSecret: string;

    constructor(clientId: string, clientSecret: string) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }
}

