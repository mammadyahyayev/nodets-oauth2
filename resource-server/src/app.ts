import {UserRequest} from "./models/user-request";
import {getUserService} from "./services/user-service";

const express = require('express');

const app = express();
const port = 3000;

app.use(express.json())

const userService = getUserService();

app.get('/api/v1/users', (req: any, res: any): void => {
    res.send(userService.findAllUsers());
})

app.post('/api/v1/users', async (req: any, res: any): Promise<void> => {
    const request: UserRequest = req.body
    const user = await userService.createUser(request, (msg: string) => res.send({error: msg}));
    res.send(user);
})

app.listen(port, () => {
    console.log("resource server listening on port", port);
})
