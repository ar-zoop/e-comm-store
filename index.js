const mongo = require('./database/connection.js');
const express = require('express');
const app = express();
const routes = require('./route/index.route.js');
const cors= require('cors');
const dotenv = require('dotenv');
dotenv.config();

const { urlencoded } = require('express');

app.use(cors());

app.use((req, res, next) => {
        next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Connection to mongoDB
const main = async () => {
        app.use("/", routes);
        await mongo.connectToDb();
        app.listen(process.env.PORT);
};
main();





