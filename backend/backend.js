const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: __dirname + '/.env' });
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.uaophte.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri);
const db = client.db('Web-application');
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
const port = 8000;
app.use(express.json());
const secretKey=process.env.JWT_SECRET
// endpoints 
app.get('/', (req, res) => {
    res.send("Backend server is running at port 8000");
});
const verifyToken = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    try {
        const decoded = jwt.verify(token, secretKey);
        req.email = decoded.email;
        console.log(req.email);
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};
app.get('/list', async (req, res) => {
    console.log(req.query);
    const result = await db.collection('products').find({ type: req.query.type }).project({ 'name': 1, 'price': 1, 'Images.i1': 1 }).toArray();
    console.log(result);
    res.send(result);
});
app.get('/product', async (req, res) => {
    console.log(req.query);
    const result = await db.collection('products').find({ _id: req.query.id }).toArray();
    console.log(result);
    res.send(result);
});

app.get('/cart',verifyToken, async (req, res) => {
    console.log("verified");
    const result = await db.collection('products').find({ type: 'laptop' }).project({ 'name': 1, 'price': 1, 'Images.i1': 1 }).toArray();
    res.send(result);
});
app.post('/sign_up', async (req, res) => {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    try {
        const result = await db.collection('login').insertOne(req.body);
        console.log(result);
        res.send("success");
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
app.post('/login', async (req, res) => {
    console.log(req.body);
    try {
        const result = await db.collection('login').find({ email: req.body.email }).toArray();
        console.log(result);
        if (result.length === 0) {
            res.send("user not found")
        } else {
            const isMatch = await bcrypt.compare(req.body.password, result[0].password);
            if (!isMatch) {
                return res.status(400).json({ msg: 'Invalid credentials' });
            }
            const payload = { email: result[0].email };
            const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
            res.json({ token });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// server listening on port
app.listen(port, async () => {
    console.log(`successfully started server on port ${port}`);
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
        const res = await db.collection('login').find().toArray();
        console.log(res);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
});