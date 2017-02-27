var express = require('express');
var router = express.Router();
var config = require('../config.json');
var nodemailer = require('nodemailer');
var cors = require('cors');
var LanguageDetect = require('languagedetect');
var lngDetector = new LanguageDetect();
var franc = require('franc');



// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: config.gmail_un || process.env.email_un,
        pass: config.gmail_pw || process.env.email_pw
    }
});

router.post('/email', cors(), function(req,res){

    var mailOptions = {

        from: req.body.sender, // sender address
        to: 'wizardplow@gmail.com', // list of receivers
        subject: 'from: '+ req.body.sender, // Subject line
        text: req.body.textBody, // plaintext body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json('error',{error: 'failed to send email'});

        }else{
            res.json({success: true});
        }
    });
});

router.post('/detect', cors(), function(req,res){
  var detectedLanguage = franc(req.body.languageString);
  console.log(detectedLanguage);
  res.json(detectedLanguage);
});

module.exports = router;
