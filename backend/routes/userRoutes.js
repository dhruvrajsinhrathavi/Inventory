const router = require("express").Router();
const { login, getSpecificUser } = require("../controller/userController");

router.post("/login",login);

router.get("/getSpecificUser/:username", getSpecificUser);


module.exports = router;