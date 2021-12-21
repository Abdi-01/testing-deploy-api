const express = require('express');
const PORT = 2222;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send(`<h1>Deploy testing express api</h1>`);
})

app.listen(PORT, () => console.log("Server running :", PORT))