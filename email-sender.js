
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "adaezeugwumba034@gmail.com",
      pass: "",
    },
  });
  
// Email options
let mailOptions = {
  from: 'adaezeugwumba034@gmail.com',
  to: 'adaezeugwumba460@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js!'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(`Error: ${error}`);
  }
  console.log('Email sent: ' + info.response);
});
