const express = require("express");
const router = express.Router();
const userController = require("../Controllers/UserController");
router.post("/user/create", userController.Create);
router.get("/user/", userController.Get);

module.exports = router;
