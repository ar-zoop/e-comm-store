
const categoryModel = require('../database/models/schema.js');


exports.getCategoryDetails = async (req, res) => {
    try {
        const category = await userModel.find();
        res.send({
            statusCode: 200,
            message: "list of all the categories",
            error: false,
            data: category,

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