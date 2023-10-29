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
app.use(express.json());

// endpoints 
app.get('/', (req, res) => {
    res.send("Backend server is running at port 8000");
});
app.get('/list', async(req, res) => {
    console.log(req.query);
    const result= await db.collection('products').find({type:req.query.type}).project({'name':1,'price':1,'Images.i1':1}).toArray();
    console.log(result);
    res.send(result);
});
app.get('/product', async(req, res) => {
    console.log(req.query);
    const result= await db.collection('products').find({_id:req.query.id}).toArray();
    console.log(result);
    res.send(result);
});
app.get('/cart', async(req, res) => {
    const result= await db.collection('products').find({type:'laptop'}).project({'name':1,'price':1,'Images.i1':1}).toArray();
    console.log(result);
    res.send(result);
});
app.post('/login',(req, res) => {
    console.log(req.body);
    res.send(req.body);
});
app.post('/sign_up',(req, res) => {
    console.log(req.body);
    res.send(req.body);
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