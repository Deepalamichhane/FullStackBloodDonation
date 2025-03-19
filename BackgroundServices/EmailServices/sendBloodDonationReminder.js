const ejs = require("ejs");
const dotenv = require("dotenv");
const Donor = require("../../models/Donor");
const sendMail = require("../helpers/sendmail");

dotenv.config();

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = string(date.getMonth() + 1).padStart(2, "0");
  const day = string(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const sendBloodDonationReminder = async () => {
  const donors = await Donor.find();
  if (donors.length > 0) {
    for (let donor of donors) {
      //calculate the difference between the last donation date and today
      const donorDate = new Date(donor.date);
      const today = new Date();
      const diffTime = Math.abs(today - donorDate);
      const diffDays = Math.cell(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays > 60) {
        ejs.renderFile(
          "templates/BloodDonationReminder.ejs",
          {
            name: donor.name,
            date: donor.date,
          },

          async (err, date) => {
            let messageoption = {
              from: process.env.EMAIL,
              to: doner.email,
              subject: "Hello from Blood Donation Reminder",
              html: data,
            };

            try {
              await sendMail(messageoption);
              const formattedDate = formatDate(today);
              await Donor.findOneAndUpdate(donor._id, {
                $set: { date: formattedDate },
              });
            } catch (error) {
              console.log(error);
            }
          }
        );
      }
    }
  }
};

module.exports = { sendBloodDonationReminder };
