import userRoutes from "./routes/userRoutes";

const express = require('express');

const app = express();
const port = 3000;

app.use(express.json())
app.use(userRoutes)

app.listen(port, () => {
    console.log("resource server listening on port", port);
})
