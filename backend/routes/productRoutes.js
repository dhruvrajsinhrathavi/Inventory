const router = require("express").Router();
const { getSpecificProduct, addNewProduct, getAllProduct, getalldepartment, getProductsOfDepartment, getquantity, setquantity, getAllProdutOfDepartment, getDepartmentProduct, temp } = require("../controller/productController");
// New Conversation

router.get("/getSpecificProduct/:pname", getSpecificProduct);

router.post("/addNew", addNewProduct);

router.get("/getAllProducts", getAllProduct);

router.get("/getAllProductsOfDepartment", getAllProdutOfDepartment);

router.get("/getdepartment", getalldepartment);

// router.get("/getAllProductsOfDepartment/:pname", getProductsOfDepartment);

router.get("/getquantityofproduct/:pname", getquantity)

router.post("/setquantity", setquantity);

router.get("/getProductsOfDepartment/:dname", getDepartmentProduct);

router.get("/temp/:pname", temp);

module.exports = router;