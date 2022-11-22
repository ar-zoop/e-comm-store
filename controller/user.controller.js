//call the model and run queries on user model
const userModel=require('../database/models/user.js');

exports.getUserDetails = async (req, res) => {
    try {
        const users = await userModel.find();
        console.log(users);
        res.send({
            statusCode: 200,
            message: "list of all the users",
            error: false,
            data: users,

        });
    } catch (error) {
        res.send({
            statusCode: 404,
            message: error.message,
            error: true,
            data: null,
        });
    }
}

// this will be shown on webpage.
exports.setUserDetails = async (req, res) => { 
    
    try {
        const [name, address, dob] = req.body;
        console.log(userData);
        if(req.body.userData!=" ")
        {res.send({
            statusCode: 200,
            message: "Data sent successfully",
            error: false,
            data: name

        });}
    } catch (error) {
        res.send({
            statusCode: 404,
            message: error.message,
            error: true,
            data: null,
        });
    }
};