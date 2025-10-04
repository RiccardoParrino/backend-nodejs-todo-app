const MongoDbConfig = require('../config/MongoDBConfig');
const {MongoClient} = require('mongodb');
const uri = MongoDbConfig.uri;
const client = new MongoClient(uri);

exports.findAll = async (author) => {
    try {
        await client.connect();
        const db = client.db("temp");
        const collection = db.collection("activity");
        
        const activities = await collection.find({'author':author}).project({_id:0}).toArray();
        console.log(activities);
        return activities;
    } finally {
        await client.close();
    }
}

exports.createActivity = async (author, name, date, description, city) => {
    try {
        await client.connect();
        const db = client.db("temp");
        const collection = db.collection("activity");

        await collection.insertOne(
            {
                "author":author,
                "name":name,
                "date":date,
                "description":description,
                "city":city
            });
        return true;
    } finally {
        await client.close();
    }
}

exports.updateActivity = async (name, newName, newDate, newDescr, newCity) => {
    try {
        await client.connect();
        const db = client.db("temp");
        const collection = db.collection("activity");
        const oldActivity = await collection.findOne({"name":name});
        console.log(name);
        console.log(newName !== undefined ? newName : oldActivity.name);

        await collection.updateOne( {"name":name}, 
            { $set: {
                "name":newName !== undefined ? newName : oldActivity.name,
                "date":newDate !== undefined ? newDate : oldActivity.date,
                "description":newDescr !== undefined ? newDescr : oldActivity.description,
                "city":newCity !== undefined ? newCity : oldActivity.city
            } 
        });
        return true;
    } finally {
        await client.close();
    }
}

exports.deleteActivity = async (name) => {
    try {
        await client.connect();
        const db = client.db("temp");
        const collection = db.collection("activity");

        await collection.deleteOne({"name":name});
        return true;
    } finally {
        await client.close();
    }
}

exports.removeAll = async () => {
    try {
        await client.connect();
        const db = client.db("temp");
        const collection = db.collection("activity");

        await collection.deleteMany({});
        return;
    } finally {
        await client.close();
    }
}