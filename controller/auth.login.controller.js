const userModel = require('../database/models/user');
const crypto = require('crypto');
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();
exports.login = async (req, res) => {
    try {
        const userData = req.body;
        const userExist = await userModel.findOne({ email: userData.email });
        if (userExist) {
            const password = userData.password + process.env.SALT;
            const hash = crypto.createHash('sha1');
            hash.update(password);
            const hashPassword = hash.digest("hex");
            if (hashPassword == userExist.password) {
                const token = jwt.sign({ userId: userData._id }, process.env.SECRET_KEY);
                res.send({                    
                    statusCode: 200,
                    error: false,
                    message: "Credentials match!",
                    token: token,
                    data:userExist._id,
                });
                
            }
            else {
                res.send({
                    statusCode: 200,
                    error: false,
                    message: "Credentials do not match.",

                });
            }
        }

    
        else {
        res.send({
            statusCode: 200,
            error: false,
            message: "User does not exist. Please sign up.",
            data: userExist
        })
    }
}
    catch (error) {

    res.send({
        statusCode: 401,
        error: true,
        message: error.message,
        data: null
    })

}
}

