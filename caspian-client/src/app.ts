const express = require('express');

const app = express();
const port = 9999;

app.use(express.json())

app.listen(port, () => {
    console.log("caspian client is listening on port", port);
})
