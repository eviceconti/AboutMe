'use strict';
const nodemailer = require('nodemailer');



// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dev.eviceconti@gmail.com',
    pass: '2B.RFCu8.9A3R?#B'
  }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"eV" <from@example.com>', // sender address
    to: 'dev.eviceconti@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world? plain', // plain text body
    html: '<b>Hello world? html</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
    
});