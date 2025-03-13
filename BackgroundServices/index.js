const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./utils/db");
dotenv.config();

//SERVER
const PORT = process.env.PORT;

//SCHEDULED TASKS
const run = () => {
  cron.schedule("* * * * * *", () => {
    
  });
};

run();


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  dbConnection();
});
