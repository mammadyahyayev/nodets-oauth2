import {Router} from "express";
import {getUserService} from "../services/userService";
import {UserRequest} from "../models/userRequest";

const router = Router();

const userService = getUserService();

router.get('/api/v1/users', (req: any, res: any): void => {
    res.send(userService.findAllUsers());
})

router.post('/api/v1/users', async (req: any, res: any): Promise<void> => {
    const request: UserRequest = req.body
    const user = await userService.createUser(request, (msg: string) => res.send({error: msg}));
    res.send(user);
})

export default router;