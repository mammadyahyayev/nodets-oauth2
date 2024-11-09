import { Router } from "express";
import { getUserService } from "../services/userService";
import { IUser, UserRequest } from "../models/user";

const router = Router();

const userService = getUserService();

router.get('/api/v1/users', (req: any, res: any): void => {
    res.send(userService.findAllUsers());
})

router.get('/api/v1/users/:username', (req: any, res: any): void => {
    const username = req.params.username;

    const user: IUser | undefined = userService.findByUsername(username);
    if (user) {
        res.send(user)
        return;
    }

    res.send({ error: `User: ${username} not found` })
})

router.post('/api/v1/users', async (req: any, res: any): Promise<void> => {
    const request: UserRequest = req.body
    const user = await userService.createUser(request, (msg: string) => res.send({ error: msg }));
    res.send(user);
})

export default router;