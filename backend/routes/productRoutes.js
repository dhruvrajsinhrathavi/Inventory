const router = require("express").Router();
const { getSpecificProduct, addNewProduct, getAllProduct,getalldepartment, getProductsOfDepartment,getquantity} = require("../controller/productController");
// New Conversation

router.get("/getSpecificProduct/:pname" , getSpecificProduct);

router.post("/addNew", addNewProduct);

router.get("/getAllProducts" , getAllProduct);

router.get("/getdepartment",getalldepartment);

router.get("/getAllProductsOfDepartment/:pname" , getProductsOfDepartment);

router.get("/getquantityofproduct/:pname",getquantity)

module.exports = router;