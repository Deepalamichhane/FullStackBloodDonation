const nodeMailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const configurations = {
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
};

function createTransporter(config) {
  return nodeMailer.createTransport(config);
}

const sendMail = async (messageoption) => {
  try {
    const transporter = await createTransporter(configurations);
    await transporter.verify();
    const info = await transporter.sendMail(messageoption);
    console.log(info);
    return info;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = sendMail;
