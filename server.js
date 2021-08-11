const express = require('express');
const mongoose = require('mongoose');

const User = require('./model/user');


require('dotenv/config');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', function (req, res) {
    res.send("Hello World!");
});

app.post("/create_user", async (req, res) => {
    try {
        const new_user = new User(req.body);
        await new_user.save();
        res.send(new_user);
    }
    catch(err) {
        res.send({message: err.message});
    }
});

mongoose.connect(
    process.env.DB_CONNECTION_STRING,
    { useUnifiedTopology: true, useNewUrlParser: true }, (req, res) => {
        console.log("Connected to database");
    }
);


app.listen(PORT, () => {
    console.log("Listening to port 5000");
});

