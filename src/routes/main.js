const express = require("express");
const router = express.Router();
const adminCheck = require("../middlewares/adminCheck")

const {index, admin} = require("../controllers/mainController")

router.get("/",index)
router.get("/admin",adminCheck, admin)

module.exports=router