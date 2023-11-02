const { sendingMail } = require("../middlewares/mailer");
const { validationResult } = require("express-validator");

async function sendActivationMail(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }

  const email = req.query["email"];
  try {
    sendingMail({
      from: "Stylo@gmail.com",
      to: `${email}`,
      subject: "Account Verification Link",
      text: `Hello, please activate your account`,
    });
    return res.status(200).json({ success: "Mail sent" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Couldn't send email" });
  }
}

module.exports = {
  sendActivationMail,
};
