import {getAuthorizationService, IAuthorizationService} from "./services/authorizationService";
import {AuthorizationCallbackRequest} from "./models/authorization";

const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

const authorizationService: IAuthorizationService = getAuthorizationService();

app.get('/api/v1/sign-in', (req, res) => {
    const url: string = authorizationService.buildAuthenticationUrl();
    res.redirect(url);
});

app.post("/api/v1/auth/callback", (req: any, res: any) => {
    const request: AuthorizationCallbackRequest = req.body;
    authorizationService.authorize(request);

    // redirect to our page
})

app.listen(port, () => {
    console.log("caspian client is listening on port", port);
});
