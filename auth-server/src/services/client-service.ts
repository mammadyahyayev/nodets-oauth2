import {Client, ClientRegistrationRequest, IClient} from "../models/client";
import {v4 as uuidv4} from 'uuid';

export interface IClientService {
    registerClient: (request: ClientRegistrationRequest, errCallback: (text: string) => void) => IClient
}

const registeredClients: Map<string, IClient> = new Map<string, IClient>();

class ClientService implements IClientService {
    registerClient(request: ClientRegistrationRequest, errCallback: (text: string) => void): IClient {
        if (!request.name) {
            errCallback("client name cannot be null or empty");
        }

        const clientId: string = `${request.name}-${uuidv4()}`;
        const clientSecret: string = uuidv4();

        if (registeredClients.has(clientId)) {
            errCallback("Client already registered");
        }

        const client: IClient = new Client(
            request.name,
            clientId,
            clientSecret,
            request.redirectUris
        );
        console.log(request.name + " registered as a client")
        //todo: save client to db
        registeredClients.set(clientId, client);
        return client
    }
}

export const getClientService = (): IClientService => {
    return new ClientService();
}