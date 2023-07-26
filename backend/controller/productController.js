const Product = require("../model/productsModel");


exports.hellofun = (req, res) => {
    res.json("from hello route");
}

exports.addNewProduct = async (req, res) => {
    try {
        const { name, desc, price, quantity, source, minQuantity, thumbnail, department } = req.body;
        const test = new Product({
            name: name,
            descreption: desc,
            price: price,
            stock: quantity,
            currStock: quantity,
            minStock: minQuantity,
            source: source,
            department: "none",
            // otherDepartment: [{ name: "none", count: 100 }],
            thumbnail: thumbnail,
        });
        const response = await test.save();
        console.log(response);
        res.json({ "added": true })
    } catch (err) {
        res.json(err);
    }
}

exports.getSpecificProduct = async (req, res) => {
    try {
        const response = await Product.findOne({ name: req.params.pname });
        res.json(response);
    } catch (err) {
        console.log(err);
    }
}

exports.getAllProduct = async (req, res) => {
    try {
        const response = await Product.find();
        res.json(response);
    } catch (err) {
        console.log(err);
    }

};

exports.getalldepartment = async (req, res) => {
    try {
        const dep = await Product.distinct("department")
        res.json(dep);
    } catch (err) {
        console.log(err);
    }
};

exports.getProductsOfDepartment = async (req, res) => {
    try {
        const response = await Product.find({ department: req.params.pname }, { name: 1, _id: 0 });
        res.json(response);
    } catch (err) {
        console.log(err);
    }
}

exports.getquantity = async (req, res) => {
    try {
        const response = await Product.findOne({ name: req.params.pname }, { stock: 1, _id: 0 });
        res.json(response);
    } catch (err) {
        console.log(err);
    }
}

exports.setquantity = async (req, res) => {
    try {
        const { pname, newStock, oldStock } = req.body;
        var n = oldStock - newStock;
        const response = await Product.updateOne({ name: pname }, { stock: n });
        res.json(response);
    } catch (err) {
        console.log(err);
    }
};

exports.getAllProdutOfDepartment = async (req, res) => {
    try {
        const r = await Product.find({}, { otherDepartment: 1, name: 1, _id: 0 });
        console.log(r);
        res.json(r);
        // const response = await Product.find({ department: req.params.dname });
    } catch (err) {

    }
};

exports.getDepartmentProduct = async (req, res) => {

    try {
        const response = await Product.find({ department: req.params.dname });
        res.json(response);
    } catch (err) {
        console.log(err);
    }
};

exports.temp = async (req, res) => {
    const response = await Product.find({ department: req.params.pname });
    console.log(response);
    res.json(response);
}