// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };

    const client = new MongoClient(url);      

  const db = await connectToDatabase();
///// tasks module 4
  const collection = db.collection("users");
  const existingEmail = await collection.findOne({ email: req.body.email });
        const newUser = await collection.insertOne({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hash,
            createdAt: new Date(),
        });
        const payload = {
            user: {
            id: newUser.insertedId,
            },
        };

    const authtoken = jwt.sign(payload, JWT_SECRET);  
////// End of tasks module 4
    // Task 1: Connect to MongoDB
 
    // Task 2: Connect to database giftDB and store in variable dbInstance

    // Task 3: Return database instance
    // {{insert code}}
}

module.exports = connectToDatabase;
