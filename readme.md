# Documentation & Implementations

## Resource Server

Resource servers keeps the resources such as users, posts.

- [X] Keep a list of users and their information in json files. 
- [X] Keep a list of posts that published by users in json files.
- [X] Provide REST API to fetch users information.
- [ ] Provide REST API to fetch posts information.
- [ ] Show connected clients (apps) to users permissions to end users. e.g. caspian app uses your firstname and lastname...

## Authentication Server

Authentication server keeps the client and their assigned permissions.

- [ ] keep client related information (clientIds, clientSecrets, client identity and permissions) in a json file.
- [ ] create middlewares to check permissions of client.
- [ ] provide revoking access functionality by users.

## Caspian Client

Caspian Client is an application that use identity provider for authentication and authorization.

- [ ] create a UI to show latest posts by logged in users. 