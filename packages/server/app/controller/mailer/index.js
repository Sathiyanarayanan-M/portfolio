const nodemailer = require('nodemailer');
const emailTemplate = require('./htmlTemplate');

exports.sendMail = (req, res, next) => {
  const {
    name, email, phone, message,
  } = req.body;
  const { userTemplate, adminTemplate } = emailTemplate;
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.mail_id,
      pass: process.env.mail_pass,
    },
  });

  const adminMailOptions = {
    from: process.env.mail_id,
    to: process.env.mail_receiver_id,
    subject: 'Mail from the portfolio',
    html: adminTemplate(name, email, phone, message),
  };

  const mailOptions = {
    from: process.env.mail_id,
    to: email,
    subject: 'Reply from Sathiyanarayanan',
    html: userTemplate(name),
  };

  transporter.sendMail(adminMailOptions, (err) => {
    if (err) {
      next({
        code: 400,
        message: 'Mail error',
      });
    } else {
      transporter.sendMail(mailOptions, (mailErr) => {
        if (mailErr) {
          next({
            code: 400,
            message: 'Mail error',
          });
        } else {
          res.status(200).json({
            error: false,
            status: 'success',
            message: 'Mail Sent successfully',
          });
        }
      });
    }
  });
};
