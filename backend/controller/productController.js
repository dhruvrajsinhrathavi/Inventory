const Product = require("../model/productsModel");


exports.hellofun = (req,res) => {
    res.json("from hello route");
}

exports.addNewProduct = async (req,res) => {
    try{

        const {name, desc, price, quantity, source, minQuantity, thumbnail, department, currDepartment} = req.body;
        const test = new Product({
            name: name,
            descreption: desc,
            price: price,
            stock: quantity,
            minStock: minQuantity,
            source: source,
            department,
            currDepartment,
            thumbnail: thumbnail,
        });
        console.log(test);
        const response = await test.save();
        res.json({"added": true})
    } catch (err) {
        res.json(err);
    }
}

exports.getSpecificProduct = async (req,res) => {
    try{
        const response = await Product.findOne({name: req.params.pname});
        res.json(response);
    } catch(err) {
        console.log(err);
    }
}

exports.getAllProduct = async (req,res) => {
    try{
        const response = await Product.find();
        res.json(response);
    } catch(err) {
        console.log(err);
    }

};

exports.getalldepartment = async(req,res)=>{
    try{
        const dep = await Product.distinct("department")
        res.json(dep);
    } catch(err) {
        console.log(err);
    }
};

exports.getProductsOfDepartment = async (req,res) => {
    try{
        const response = await Product.find({department: req.params.pname},{name:1,_id:0});
        res.json(response);
    } catch(err) {
        console.log(err);
    }
}

exports.getquantity = async (req,res) => {
    try{
        const response = await Product.findOne({name: req.params.pname},{stock:1,_id:0});
        res.json(response);
    } catch(err) {
        console.log(err);
    }
}