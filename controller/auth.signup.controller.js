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
	if (userExist){
		console.log(userExist)
		res.send({
			statusCode: 200,
			error: false,
			message: "User already exists. Please sign in.",
			data: false
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
			const token=jwt.sign({userId: newUser._id}, process.env.SECRET_KEY);
			// const[email, password, username]= req.body;
			res.send({
				statusCode: 200,
				error: false,
				message: "Account created",
				data: newUser,
				token: token
			})
		}
		catch (error) {
			res.send({
				statusCode: 401,
				error: true,
				message: error.message,
				data: null,
			});
		}

	}
}

