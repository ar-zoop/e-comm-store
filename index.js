const mongo=require('./database/connection.js');
const schema = require('./database/models/schema.js');
const express = require('express');
const appRoute = express();

//Connection to mongoDB
const appMongo = async () => {
    const connect = await mongo.connectToDb();
};
appMongo();

//Create object of the model and add it to the collection
const schemaObj= new schema({});
console.log(schemaObj);
userObject.save();

//Routing
appRoute.get('/', (req, res) => {
    res.send('hello world')
})


appRoute.listen(5050);


