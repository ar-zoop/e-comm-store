
const categoryModel = require('../database/models/category.js');

exports.getCategoryDetails = async(req, res) => {
    try {
        const categories= await categoryModel.find();
        res.send({
            statusCode: 200,
            message: "list of all the categories",
            error: false,
            data: categories.category,

        });
    } catch (error) {
        res.send({
            statusCode: 401,
            message: error.message,
            error: true,
            data: null,
        });
    }
}

exports.setCategoryDetails= async (req,res)=>{
    try{
        const categoriesArray =req.body;
        categoriesArray.forEach(async object=>{      

            const categoryExist= await categoryModel.findOne({category_id: object.category_id});
            if(categoryExist){
                console.log("Category already exists.");
            }
            else{
                const newCategory= new categoryModel({
                    category_id:object.category_id,
                    category:object.category,
                    image: object.image
                })
                newCategory.save();
                console.log("Category created.");
            }
        });
        res.send({
            statusCode: 200,
            error: false,
            message: "Category(s) created or not created if already exists."
        })
    }
    catch(error){
        res.send({
            statusCode: 401,
            message: error.message,
            error: true,
            data: typeof (categoriesJSON),
        });
    }
}