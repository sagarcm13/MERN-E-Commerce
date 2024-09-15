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
const secretKey = process.env.JWT_SECRET
// endpoints 
app.get('/', (req, res) => {
    res.send("Backend server is running at port 8000");
});
const verifyToken = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    } else {
        try {
            const decoded = jwt.verify(token, secretKey);
            req.email = decoded.email;
            next();
        } catch (err) {
            res.status(401).json({ message: 'Token is not valid' });
        }
    }
};
app.get('/list', async (req, res) => {
    try {
        const result = await db.collection('products').find({ type: req.query.type }).project({ 'name': 1, 'price': 1, 'Images.i1': 1 }).toArray();
        res.status(200).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/product', async (req, res) => {
    try {
        const result = await db.collection('products').find({ _id: req.query.id }).toArray();
        res.status(200).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/cart', verifyToken, async (req, res) => {
    try {
        let cartIds = await db.collection('cart').find({ email: req.email }).project({ 'productIds': 1, '_id': 0 }).toArray();
        if (cartIds.length === 0) {
            return res.status(200).send([]);
        } else {
            cartIds = cartIds[0].productIds;
            const result = await db.collection("products").find({
                _id: { $in: cartIds }
            }).project({ 'name': 1, 'price': 1, 'Images.i1': 1 }).toArray();
            res.status(200).send(result);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/sign_up', async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const result = await db.collection('login').insertOne(req.body);
        const payload = { email: req.body.email }
        const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
        res.status(201).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
app.post('/login', async (req, res) => {
    try {
        const result = await db.collection('login').find({ email: req.body.email }).toArray();
        if (result.length === 0) {
            res.status(404).send("User not found");
        } else {
            const isMatch = await bcrypt.compare(req.body.password, result[0].password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            const payload = { email: result[0].email };
            const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
            res.status(200).json({ token });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
app.post('/addToCart', verifyToken, async (req, res) => {
    try {
        const result = await db.collection("cart").updateOne({ email: req.email }, { $addToSet: { productIds: req.body.id } }, { upsert: true });
        res.status(201).send("Inserted successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.delete("/removeCartItem", verifyToken, async (req,res)=>{
    try {
        const result = await db.collection("cart").updateOne({ email: req.email }, { $pull: { productIds: req.body.id } }, { upsert: true });
        res.status(200).send("Removed successfully");
    } catch (e) {
        console.error(e);
        res.status(500).send('Internal Server Error');
    }
})

// server listening on port
app.listen(port, async () => {
    console.log(`successfully started server on port ${port}`);
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
});