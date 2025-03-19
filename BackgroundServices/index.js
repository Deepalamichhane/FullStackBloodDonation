const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./utils/db");
const { sendDetailsProspect } = require("./EmailServices/sendDetailsProspect");
const { sendEligibilityEmail } = require("./EmailServices/sendEligibilityEmail");
const { sendBloodDonationReminder } = require("./EmailServices/sendBloodDonationReminder");
const { sendDonorDetailsEmail } = require("./EmailServices/sendDonorDetailsEmail");
dotenv.config();

//SERVER
const PORT = process.env.PORT;

//SCHEDULED TASKS
const run = () => {
  cron.schedule("* * * * * *", () => {
    sendDetailsProspect();
    sendEligibilityEmail();
    sendBloodDonationReminder();
    sendDonorDetailsEmail();
  });
};

run();


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  dbConnection();
});
