const admin = require("firebase-admin");
const firebaseConfig = require("app/config/firebaseConfig").FIREBASE_CONFIG;

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
  databaseURL: "https://sathiyanarayanan-m.appspot.com",
});

exports.projectList = (req, res, next) => {
  if (req.headers.authtoken) {
    admin
      .auth()
      .verifyIdToken(req.headers.authtoken)
      .then((rr) => {
        console.log(rr);
        return res.send(rr);
      })
      .catch((e) => {
        return res.status(403).send(e);
      })
      .finally((rr) => {
        console.log("finally");
      });
  } else {
    return res.status(403).send("Unauthorized");
  }
  //   return res.send(firebaseConfig);
};
