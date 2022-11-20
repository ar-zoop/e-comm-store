const mongoose= require('mongoose');
exports.connectToDb=async()=>{
    mongoose.connect("mongodb+srv://arzoop:Arzoo101@cluster0.o6czhnf.mongodb.net/test")
        .then(() => {
            console.log("Connected!");
        })
        .catch((err) => {
            console.log("OOPS!", err.message);
        })
}
