const express = require('express');
const jwt = require('jsonwebtoken');

exports.verifyToken= (req,res,next)=>{
    try{
        let token= req.headers.authorization;
        if(token){
            token=token.split(' ')[1];
            let user=jwt.verify(token, process.env.SECRET_KEY);
            if(user){
                req.userId=user.userId;
            }
            else{
                res.send({
                    "statusCode": 401,
                    "message": "Unauthorized user, invalid token",
                    "error": true
                })
            }
        }
        else{
            res.send({
                "statusCode": 401,
                "message":"Unauthorized user",
                "error":true
            })
        }
        next();
    }
    catch(error){
        res.send({
            "statusCode": 401,
            "message": error.message,
            "error": true
        })
    }
    
}