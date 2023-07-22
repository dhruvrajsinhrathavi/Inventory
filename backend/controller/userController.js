const User = require("../model/userModel");

exports.login = async(req,res)=>{

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
};

exports.getSpecificUser = async(req,res) => {
    try{
        const response = await User.findOne({email: req.params.username},{email:1,department:1});
        res.json(response);
    } catch(err) {
        console.log(err);
    }

}