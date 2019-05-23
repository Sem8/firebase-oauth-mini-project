const userdb = require("../dbConfig.js");

module.exports = {
  registerOrLogin,

};

async function registerOrLogin(user) {
  try {
    const loggedInUser = await userdb("users")
      .where({ firebase_id: user.firebase_id })
      .first();
    if (!!loggedInUser) {
      return loggedInUser;
    } else {
      const [id] = await userdb("users").insert(user, "id");
      const signedUpUser = await userdb("users")
        .where({ id: id })
        .first();
      return signedUpUser;
    }
  } catch (error) {
    console.log(error);
  }
}
