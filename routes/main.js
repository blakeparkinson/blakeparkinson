var express = require('express');
var router = express.Router();
var config = require('../config.json');
var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: config.gmail_un || process.env.email_un,
        pass: config.gmail_pw || process.env.email_pw
    }
});

router.post('/email', function(req,res){
  console.log(req.body);

    var mailOptions = {

        from: req.body.sender, // sender address
        to: 'wizardplow@gmail.com', // list of receivers
        subject: 'from: '+ req.body.sender, // Subject line
        text: req.body.textBody, // plaintext body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
      console.log(mailOptions);
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
        }
    });
});

module.exports = router;
