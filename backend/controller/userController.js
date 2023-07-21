const User = require("../model/userModel");

exports.addUser = async(req,res)=>{

    const response = await  User.findOne({email: req.body.email});

    if(!response) {
        res.json({"userExists": false});
        return;
    }

    if(req.body.password === response.password) {
        res.json({"loggedin": true})
    } else {
        res.json({"loggedin": false});
    }
}