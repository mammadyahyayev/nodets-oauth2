import clientRoutes from "./routes/clientRoutes";

const express = require('express');

const app = express();
const port = 3001;

app.use(express.json())
app.use(clientRoutes)

app.listen(port, () => {
    console.log("auth server is listening on port", port);
})
