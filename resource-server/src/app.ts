const express = require('express');

import {createUser, findAllUsers} from "./services/user-service";

const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req: any, res: any): void => {
    res.send('Welcome to the server!');
})

app.get('/api/v1/users', (req: any, res: any): void => {
    res.send(findAllUsers());
})

app.post('/api/v1/users', async (req: any, res: any): Promise<void> => {
    const {firstName, lastName, username, password} = req.body
    const user = await createUser(firstName, lastName, username, password, (msg) => {
        res.send({error: msg})
    });

    res.send(user);
})


app.listen(port, () => {
    console.log("Listening on port", port);
})
