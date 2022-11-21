const mongo=require('./database/connection.js');
const express = require('express');
const app = express();
const routes= require('./route/index.route.js');
const { urlencoded } = require('express');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Connection to mongoDB
const main = async () => {
        app.use("/", routes);
        await mongo.connectToDb();        
        app.listen(5050);
};
main();





