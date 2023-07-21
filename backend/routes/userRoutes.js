const { addUser } = require("../controller/userController");
const router = require("express").Router();

router.post("/login",addUser);


module.exports = router;