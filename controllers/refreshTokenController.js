const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
  }

  const jwt = require('jsonwebtoken');
  require('dotenv').config();
  
  const handleRefreshToken = (req, res) => {

    const cookies = req.cookies
    if(cookies?jwt)
    const foundUser = usersDB.users.find(person => person.username === user);
    if (!foundUser) return res.sendStatus(401); //Unauthorized 
    // evaluate password 
    if (err || ) {
        // create JWTs
        const accessToken = jwt.sign(
            { "username": foundUser.username },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '60s' }
        );
        const refreshToken = jwt.sign(
            { "username": foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        ); 
    }
  }
  
  module.exports = { handleRefreshToken };
