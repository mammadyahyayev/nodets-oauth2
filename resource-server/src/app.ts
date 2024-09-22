import {UserRequest} from "./models/user-request";

const express = require('express');

import {createUser, findAllUsers} from "./services/user-service";

const app = express();
const port = 3000;

app.use(express.json())

app.get('/api/v1/users', (req: any, res: any): void => {
    res.send(findAllUsers());
})

app.post('/api/v1/users', async (req: any, res: any): Promise<void> => {
    const {firstName, lastName, username, password}: UserRequest = req.body
    const errCallback = (msg: string): void => res.send({error: msg});
    const user = await createUser({firstName, lastName, username, password}, errCallback);
    res.send(user);
})

app.listen(port, () => {
    console.log("Listening on port", port);
})
