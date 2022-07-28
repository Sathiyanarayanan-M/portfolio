const nodemailer = require("nodemailer");
exports.sendMail = (req, res, next) => {
  const { name, email, phone, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.mail_id,
      pass: process.env.mail_pass,
    },
  });

  const mailOptions = {
    from: process.env.mail_id,
    to: process.env.mail_receiver_id,
    subject: "Mail from the portfolio",
    text: `This user ${name} from ${email} send a message of ${message}. And his/her phone no is ${phone}`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      next({
        code: 400,
        message: "Mail error",
      });
    } else {
      res.status(200).json({
        error: false,
        status: "success",
        data,
      });
    }
  });
};
