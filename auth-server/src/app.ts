import {getClientService, IClientService} from "./services/client-service";
import {ClientRegistrationRequest, IClient} from "./models/client";

const express = require('express');

const app = express();
const port = 3001;

app.use(express.json())

app.post('/api/v1/clients/register', (req: any, res: any): void => {
    const request: ClientRegistrationRequest = req.body;
    const errCallback = (msg: string) => res.send({error: msg});
    const client: IClient = getClientService().registerClient(request, errCallback);
    res.send(client)
})

app.listen(port, () => {
    console.log("auth server is listening on port", port);
})
