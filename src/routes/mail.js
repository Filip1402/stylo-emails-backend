var express = require("express");
var router = express.Router();
const controller = require("../controllers/activationMail");

const { query } = require("express-validator");

router.post(
  "/activation",
  query("email").isEmail().withMessage("Invalid email format"),
  query("activation_token").notEmpty().withMessage("There is no token"),
  async (req, res) => {
    controller.sendActivationMail(req, res);
  }
);

module.exports = router;
