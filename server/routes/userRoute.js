const userRoute = require("express").Router();
const userdb = require("../data/dbConfig.js");
const User = require("../data/helpers/users.js");
const restricted = require('../middleware/firebase');

// userRoute.get('/', (req, res) => {
//     res.send('User route here');
// });

userRoute.post("/", restricted, (req, res) => {
  const { fullName, email, profilePhoto } = req.body;
  const firebase_id = req.user;
  User.registerOrLogin({
    firebase_id,
    fullName,
    email,
    profilePhoto
  })
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(`User couldn't be authorized`);
    });
});
module.exports = userRoute;
