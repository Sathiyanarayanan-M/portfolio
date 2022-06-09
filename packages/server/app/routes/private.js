const admin = require("firebase-admin");
const firebaseConfig =
  require("../../app/config/firebaseConfig").FIREBASE_CONFIG;

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
  databaseURL: "https://sathiyanarayanan-m.appspot.com",
});

exports.router = (req, res, next) => {
  if (req.headers.authtoken) {
    admin
      .auth()
      .verifyIdToken(req.headers.authtoken)
      .then((rr) => {
        return next();
      })
      .catch((e) => {
        const err = {};
        err.message = "Invalid Token";
        err.code = 403;
        return next(err);
      });
  } else {
    return res.status(403).send("Unauthorized");
  }
};
