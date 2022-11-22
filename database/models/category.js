const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const categoriesSchema = new Schema({
    category:[{
        subcategory: {type: String}
    }]
    
})

const category = new model("categories", categoriesSchema);
module.exports= category;