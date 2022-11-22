const userModel = require('../database/models/user');
const crypto = require('crypto');
const express= require('express');
const app=express();
const jwt= require('jsonwebtoken');
const { resolveSoa } = require('dns');
require('dotenv').config();
exports.signup = async (req, res) => {
    const userData = req.body;
    const userExist = await userModel.findOne({ email: userData.email });
    if (userExist) {
        res.send({
            statusCode: 200,
            error: false,
            message: "User already exists. Please sign in.",
            data: userExist
        })
    }

    // if user does not exist
    else {
        try {
            const password = userData.password + process.env.SALT;
            const hash = crypto.createHash('sha1');
            hash.update(password);
            const hashPassword = hash.digest("hex");

            //2. create object
            const newUser = new userModel({
                user_name: userData.user_name,
                email: userData.email,
                password: hashPassword,
                address: userData.address,
                gender: userData.gender,
                mobile: userData.mobile,
                dob: userData.dob,
            });

            newUser.save();
            // const[email, password, username]= req.body;
            res.send({
                statusCode: 200,
                error: false,
                message: "Account created",
                data: userData.email,


            })
        }
        catch (error) {
            res.send({
                statusCode: 404,
                error: true,
                message: error.message,
                data: null,
            });
        }

    }
}

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
                const user = { name: userData.user_name };
                const accessToken = generateAccessToken(userData.user_name);
                const refreshToken= jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
                res.json({ accessToken: accessToken , refreshToken: refreshToken});
                res.send({                    
                    statusCode: 200,
                    error: false,
                    message: "Credentials match!",
                    data: accessToken
                });
                function generateAccessToken(user) {
                   
                    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' });


                }
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
        statusCode: 404,
        error: true,
        message: error.message,
        data: null
    })

}
}
const posts = [
    {
        username: 'Kyle',
        title: 'Post 1'
    },
    {
        username: 'Jim',
        title: 'Post 2'
    }
]


app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name))
})

function authenticateToken (req,res,next){
    const authHeader= req.headers['authorization'];
    const token=authHeader && authHeader.split(' ')[1];
    if(token==null) return res.send({
        statusCode:404
    });
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,user)=>{
        if(err) return res.sendStatus(403)
        req.user= user;
        next();
    })
}
