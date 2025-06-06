const ejs = require("ejs");
const dotenv = require("dotenv");
const Prospect = require("../../models/Prospect");
const sendMail = require("../helpers/sendmail");

dotenv.config();

const sendEligibilityEmail = async () => {
    const prospects = await Prospect.find({ status: 0 });

    if (prospects.length > 0) {
        for (let prospect of prospects) {
            if (prospect.age < 18 || prospect.weight < 50) {
                try {
                    const data = await ejs.renderFile(
                        "../../templates/BloodDonationEligibility.ejs",
                        {
                            name: prospect.name,
                            age: prospect.age,
                            weight: prospect.weight,
                        }
                    );

                    let messageoption = {
                        from: process.env.EMAIL,
                        to: prospect.email,
                        subject: "Blood Donation Eligibility",
                        html: data,
                    };

                    await sendMail(messageoption);
                    await Prospect.findByIdAndDelete(prospect._id);
                } catch (error) {
                    console.error("Error sending eligibility email:", error);
                }
            }
        }
    }
};

module.exports = { sendEligibilityEmail };