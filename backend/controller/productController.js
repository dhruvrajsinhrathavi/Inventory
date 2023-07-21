const Product = require("../model/productsModel");


exports.hellofun = (req,res) => {
    res.json("from hello route");
}

exports.addNewProduct = async (req,res) => {
    try{
        const {name, desc, price, quantity, source, minQuantity, thumbnail, department} = req.body;
        const test = new Product({
            name: name,
            descreption: desc,
            price: price,
            stock: quantity,
            minStock: minQuantity,
            source: source,
            department,
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
    const response = await Product.findOne({name: req.params.pname});

    res.json(response);

}

exports.getAllProduct = async (req,res) => {
    const response = await Product.find();

    res.json(response);

}