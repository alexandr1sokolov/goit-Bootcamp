const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 8888;
const users = [
    {id: 1, username: "admin", password: "admin"},
    {id: 2, username: "guest", password: "guest"}
];

app.use(express.json());

app.post("/login", (req, res) => {
    (!req.body.username || !req.body.password) ? res.status(400).send("You need a username and password") : null;

    const user = users.find( u =>  u.username === req.body.username && u.password === req.body.password);

    (!user) ? res.status(401).send("User not found"): null;

    const token = jwt.sign( {sub: user.id, username: user.username}, "mysupersecretkey", { algorithm: 'HS512'});

    res.status(200).send({access_token: token})
});

app.get("*", (req, res) =>  res.sendStatus(404));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});