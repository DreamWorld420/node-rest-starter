const express = require("express");
const controller = require("../controllers/authControllers");

const router = express.Router();

router.route("/signup/").post(controller.signup);
router.route("/login/").post(controller.login);

module.exports = router;
