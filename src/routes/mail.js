var express = require("express");
var router = express.Router();
const controller = require("../controllers/activationMail");

const { query } = require("express-validator");

router.post(
  "/activation",
  query("email").isEmail().withMessage("Invalid email format"),
  async (req, res) => {
    controller.sendActivationMail(req, res);
  }
);

module.exports = router;
