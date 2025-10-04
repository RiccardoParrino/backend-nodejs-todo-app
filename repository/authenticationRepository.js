const MongoDbConfig = require('../config/MongoDBConfig');
const {MongoClient} = require('mongodb');
const uri = MongoDbConfig.uri;
const client = new MongoClient(uri);

//docker run -it mongo mongosh "mongodb://admin:admin@localhost:27017"
//db.users.insertOne({"email":"riccardo@gmail.com", "password":"ric", "name":"riccardo", "surname":"parrino"})

exports.createUser = async (email, password, name, surname) => {
    try {
        await client.connect();
        const db = client.db("temp");
        const collection = db.collection("users");
        const res = await collection.insertOne(
            {
                "email":email,
                "password":password,
                "name":name,
                "surname":surname
            }
        );

        return true;
    } finally {
        await client.close();
    }
}

exports.loginUser = async (email, password) => {
    try {
        await client.connect();
        const db = client.db("temp");
        const collection = db.collection("users");

        const userTrial = await collection.findOne({"email":email});
        if ( userTrial !== null && userTrial.password == password )
            return true;
        return false;
    } finally {
        await client.close();
    }
}

exports.deleteUser = async (email) => {
    try {
        console.log(email);
        await client.connect();
        const db = client.db("temp");
        const collection = db.collection("users");
        const res = await collection.deleteOne({"email":email});
        return true;
    } finally {
        await client.close();
    }
}

exports.listAllUsers = async () => {
    try {
        await client.connect();
        const db = client.db("temp");
        const collection = db.collection("users");
        const res = await collection.find().toArray();
        return res;
    } finally {
        await client.close();
    }
}