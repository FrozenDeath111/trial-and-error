const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const { initializeApp } = require('firebase-admin/app');
const admin = require("firebase-admin");
const serviceAccount = require(process.env.FIREBASE_KEY);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.t5hdoci.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
const port = 3001;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("hello world");
})


//mongodb
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

async function run(){
    try{
        client.connect();
        const collection = client.db("react-auth").collection("user");

        app.post('/setUser', async (req, res) => {
            const username = req.body.username;
            const email = req.body.email;
            const password = req.body.password;

            const newUser = {
                username: username,
                email: email,
                password: password
            }

            await collection.insertOne(newUser)
            .then(result => {
                console.log(result);
                res.send(result);
            })
        })

        app.get('/users', async (req, res) => {
            const bearer = req.headers.authorization;
            if(bearer && bearer.startsWith('Bearer ')){
                const idToken = bearer.split(' ')[1];
                // idToken comes from the client app
                admin.auth().verifyIdToken(idToken)
                .then(async (decodedToken) => {
                    const uid = decodedToken.uid;
                    const tokenEmail = decodedToken.email;
                    //console.log(uid);
                    if(tokenEmail == req.query.email){
                        const documents = await collection.find({}).toArray();
                        //console.log(documents);
                        res.send(documents);
                    }
                    else{
                        res.send("Unsuccessful");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            }
            else{
                res.status(401).send('Unauthorized Access');
            }
        })

        app.delete('/delete/:id',async (req, res) => {
            const objId = new ObjectId(req.params.id);
            await collection.deleteOne({_id: objId})
            .then(result => {
                console.log(result);
                res.send(result.deletedCount > 0);
            });
        })

        console.log("dbconnected");

    } finally {
        await client.close();
    }
}

run().catch(console.dir);

app.listen(port);