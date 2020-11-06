var express = require('express');
var router = express.Router();
var db = require("../db.js");
var cbfile = require("../cbfile/cb.js")

router.post("/register",cbfile.UserRegister)
router.post("/login", cbfile.userLogin)
module.exports = router;
