import {Client, IClient} from "../models/client";
import {v4 as uuidv4} from 'uuid';

export interface IClientService {
    registerClient: (name: string) => IClient
}

class ClientService implements IClientService {
    registerClient(name: string): IClient {
        const clientId: string = name + uuidv4();
        const clientSecret: string = uuidv4();

        const client: IClient = new Client(clientId, clientSecret, name);
        console.log(name + " registered as a client")
        return client
    }
}

export const getClientService = (): IClientService => {
    return new ClientService();
}