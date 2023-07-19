const mongoose = require("mongoose");
const app = require("./app");

//setting dotenv file in our server
// require("dotenv").config({ path: __dirname + "/.env" });
const port = 5000;

//MongoDB local Database Connection:
try {
  mongoose.connect("mongodb://localhost:27017/contact");
  console.log("Data base connection succesfull");
} catch (err) {
  console.log(err);
}
/*Starting express Server:
when we run "node server.js" it imports app.js i.e object of module.exports,
and creates app{} object from express() method and starts server by listening
to the port 3000/PORT , by below code .
*/

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
