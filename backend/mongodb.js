const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://sagarcm067:cmsagar067@cluster0.uaophte.mongodb.net/';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    let db=client.db('Web-application');
    const res=await db.collection('login').findOne({username:'sagar'});
    console.log(res);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToMongoDB();
module.exports = connectToMongoDB;