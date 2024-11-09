import {AuthorizationCallbackRequest} from "../models/authorization";

export interface IAuthorizationService {
    buildAuthenticationUrl: () => string;
    authorize: (request: AuthorizationCallbackRequest) => void;
}

export const getAuthorizationService = (): IAuthorizationService => {
    return new AuthorizationService();
}

class AuthorizationService implements IAuthorizationService {
    buildAuthenticationUrl(): string {
        const clientId = process.env.CLIENT_ID;
        const authServerEndpoint = process.env.AUTH_SERVER_URL;
        const authServerCallbackEndpoint = process.env.AUTH_SERVER_CALLBACK_URL;
        return `${authServerEndpoint}/api/v1/authorize?clientId=${clientId}&response_type=code&redirect_uri=${authServerCallbackEndpoint}`;
    }

    authorize(request: AuthorizationCallbackRequest): void {
        console.log(request);
        // check grant type, if it is different from 'authorization_code' then send error

        // exchange 'code' to access token



        /*
        grant_type: ,
        code: code,
        redirect_uri: client.redirect_uris[0]
         */
    }
}

/*
    1. get clientId and clientSecret stored on env file
    2. include them in the request
    3. response_type = code
    4. add redirect_uri -> which will send post request to callback url by auth server
    5. grab the code and send request to get access_token
    6. use access_token to send request to resource server to access user information
 */

/*todo:
    As an aside, why do we include the redirect_uri in this call? We’re not redirect-
    ing anything, after all. According to the OAuth specification, if the redirect URI is
    specified in the authorization request, that same URI must also be included in the
    token request. This practice prevents an attacker from using a compromised redirect
    URI with an otherwise well-meaning client by injecting an authorization code from
    one session into another.
 */