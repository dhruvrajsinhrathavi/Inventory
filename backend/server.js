const app = require("./app");
const connectDatabase = require("./db/connection");

var cors = require('cors');

connectDatabase();

app.listen(5000, () => {
  console.log(`Server running at port 5000`);
});