const userRoute = require("express").Router();
const userdb = require("../data/dbConfig.js");
const User = require("../data/helpers/users.js");

// userRoute.get('/', (req, res) => {
//     res.send('User route here');
// });

userRoute.post("/", (req, res) => {
  const { fullName, email, password, profilePhoto } = req.body;
  const firebase_id = req.user;
  User.registerOrLogin({
    firebase_id,
    fullName,
    name,
    email,
    password,
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
