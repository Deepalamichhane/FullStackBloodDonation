const app = require("./app");
const dotenv = require("dotenv");
const dbConnection = require("./utils/db");
dotenv.config();

//PORT
const PORT = process.env.PORT || 8000;

//SERVER
app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
  dbConnection();
});
