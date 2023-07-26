
const User = require("../model/userModel");

exports.login = async (req, res) => {
    
    console.log("hell00o");
    const response = await User.findOne({ email: req.body.email });

    if (!response) {
        res.json({ "userExists": false });
        return;
    }

    if (req.body.password === response.password) {
        res.json({ "loggedin": true })
        console.log("hello");
    } else {
        res.json({ "loggedin": false });
        console.log("hello");
    }
};

exports.getSpecificUser = async (req, res) => {
    try {
        console.log("hello")
        const response = await User.findOne({ email: req.params.username }, { email: 1, department: 1 });
        res.json(response);
    } catch (err) {
        console.log(err);
    }

}