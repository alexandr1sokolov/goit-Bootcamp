const express = require("express");
const expressjwt = require("express-jwt");

const app = express();
const PORT = process.env.API_PORT || 8888;

app.use(express.json());

const jwtCheck = expressjwt({
    secret: "mysupersecretkey"
});

app.get("/resource", (req, res) => {
    res
    .status(200)
    .send("Public resource, you can see this");
});

app.get("/resource/secret", jwtCheck, (req, res) => {
    res
    .status(200)
    .send("Secret resource, you should be logged in to see this");
});

app.get("*", (req, res) => {
    res.sendStatus(404);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});