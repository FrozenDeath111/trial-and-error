const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

let users = ["ajad", "majad"];

app.get('/', (req, res) => {
    res.send("working nodemon");
})

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    const name = users[userId];

    res.send({userId, name});
})

//post
app.post('/addUser', (req, res) => {
    users = [...users, req.body.name];
    res.send(req.body);
    //save to database
})

app.listen(3000, () => console.log("Working port 3000"));