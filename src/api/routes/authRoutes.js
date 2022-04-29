const express = require("express");
const controller = require("../controllers/authControllers");

const router = express.Router();

router.route("/signup/").post(controller.signup);

module.exports = router;
