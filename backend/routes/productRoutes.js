const router = require("express").Router();
const { getSpecificProduct, addNewProduct, getAllProduct } = require("../controller/productController");
// New Conversation

router.get("/getSpecificProduct/:pname" , getSpecificProduct);

router.post("/addNew", addNewProduct);

router.get("/getAllProducts" , getAllProduct);


module.exports = router;