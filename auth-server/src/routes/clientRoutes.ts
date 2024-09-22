import {ClientRegistrationRequest, IClient} from "../models/client";
import {getClientService} from "../services/clientService";
import {Router} from "express";

const router = Router();

router.post('/api/v1/clients/register', (req: any, res: any): void => {
    const request: ClientRegistrationRequest = req.body;
    const errCallback = (msg: string) => res.send({error: msg});
    const client: IClient = getClientService().registerClient(request, errCallback);
    res.send(client)
})

export default router;