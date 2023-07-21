const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/inventory');
    console.log(`Connected to Database`);
  } catch (err) {
    console.log(`MongoDB error ${err}`);
  }
};

module.exports = connectDatabase;
