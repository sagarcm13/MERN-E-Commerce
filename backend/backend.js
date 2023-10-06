const express = require('express');
const cors = require('cors');
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.uaophte.mongodb.net/`;
const client = new MongoClient(uri);
const db=client.db('Web-application');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
const port = 8000;
// endpoints 
app.get('/', (req, res) => {
    res.send("Backend server is running at port 8000");
});
app.get('/product', async (req, res) => {
    console.log(req.body);
    const result= await db.collection('products').find({type:'laptop'}).toArray();
    console.log(result);
    res.send(result);
});

// server listening on port
app.listen(port,async () => {
    console.log(`successfully started server on port ${port}`);
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
        const res=await db.collection('login').find().toArray();
        console.log(res);
      } catch (error) {
        console.error('Error connecting to MongoDB:', error);
      }
});