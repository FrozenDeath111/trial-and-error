import { username, dbPassword } from './mongo-config';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${username}:${dbPassword}@cluster0.t5hdoci.mongodb.net/?retryWrites=true&w=majority`;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
})

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    client.connect();

    const collection = client.db("things").collection("products");
    
    app.get("/products",async (req, res) => {
        const documents = await collection.find({})
        .toArray();

        res.send(documents);
    })

    app.post("/addProduct",async (req, res) => {
        const product = req.body;
        await collection.insertOne(product)
        .then(result => {
            console.log(result);
            res.redirect('/');
        });
    })

    app.patch('/update/:id', async (req, res) => {
        const objId = new ObjectId(req.params.id);

        await collection.updateOne({_id:objId}, {
            $set: {
                price: req.body.price,
                quantity: req.body.quantity
            }
        })
        .then (result => {
            console.log(result);
            res.send(result.modifiedCount > 0);
        })
    })

    app.delete('/delete/:id',async (req, res) => {
        const objId = new ObjectId(req.params.id);
        await collection.deleteOne({_id: objId})
        .then(result => {
            console.log(result);
            res.send(result.deletedCount > 0);
        });
    })

    app.get('/product/:id',async (req, res) => {
        const objId = new ObjectId(req.params.id);
        const document = await collection.find({_id:objId})
        .toArray();

        res.send(document[0]);
    })
    
    console.log('database connected');
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);

// listen
app.listen(3000)