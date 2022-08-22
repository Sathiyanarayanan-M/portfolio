const admin = require("firebase-admin");
const firebaseConfig =
  require("../../app/config/firebaseConfig").FIREBASE_CONFIG;

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
  databaseURL: "https://sathiyanarayanan-m.appspot.com",
});

exports.router = (req, res, next) => {
  const token = req.headers["authorization"] || req.headers["x-access-token"];
  console.log(token);
  if (token) {
    admin
      .auth()
      .verifyIdToken(token)
      .then((userData) => {
        req.userData = userData;
        next();
      })
      .catch((e) => {
        const err = {};
        err.message = "Invalid Token";
        err.code = 403;
        next(err);
      });
  } else {
    res.status(403).send({
      message: "No Token Provided",
      error: true,
    });
  }
};
