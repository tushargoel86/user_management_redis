var express = require("express");
const UserController = require("../controllers/UserController");

var router = express.Router();

//add user
router.post("/", UserController.addUser); 

//fetch user
router.post("/:id/", UserController.user); 

//delete user
router.delete("/:id/", UserController.deleteUser); 

module.exports = router;