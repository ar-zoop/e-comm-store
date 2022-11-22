const mongoose= require('mongoose');
exports.connectToDb=async()=>{
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log("Connected!");
        })
        .catch((err) => {
            console.log("OOPS!", err.message);
        })
}