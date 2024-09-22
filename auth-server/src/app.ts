import {getClientService, IClientService} from "./services/client-service";
import {IClient} from "./models/client";

const express = require('express');

const app = express();
const port = 3000;

app.use(express.json())

app.post('/api/v1/clients/register', (req: any, res: any): void => {
    const {name} = req.body;
    const client: IClient = getClientService().registerClient(name);
    res.send(client)
})

app.listen(port, () => {
    console.log("auth server is listening on port", port);
})
