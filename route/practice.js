const user = { name: userData.user_name };
                const accessToken = generateAccessToken(userData.user_name);
                const refreshToken= jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
                res.json({ accessToken: accessToken , refreshToken: refreshToken});
function generateAccessToken(user) {

    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' });


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

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.send({
        statusCode: 404
    });
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user;
        next();
    })
}
