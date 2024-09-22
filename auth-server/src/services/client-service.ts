import {Client, IClient} from "../models/client";
import {v4 as uuidv4} from 'uuid';

export interface IClientService {
    registerClient: (name: string, redirectUris: string[], errCallback: (text: string) => void) => IClient
}

const registeredClients: Map<string, IClient> = new Map<string, IClient>();

class ClientService implements IClientService {
    registerClient(name: string, redirectUris: string[] = [], errCallback: (text: string) => void): IClient {
        const clientId: string = name + uuidv4();
        const clientSecret: string = uuidv4();

        if (registeredClients.has(clientId)) {
            errCallback("Client already registered");
        }

        const client: IClient = new Client(
            name,
            clientId,
            clientSecret,
            redirectUris
        );
        console.log(name + " registered as a client")
        //todo: save client to db
        registeredClients.set(clientId, client);
        return client
    }
}

export const getClientService = (): IClientService => {
    return new ClientService();
}