function generateAccessToken(user){
    const username= req.body.user_name;
    const user= {name:username};
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn:'15s'});


}

