var express = require('express');
var router = express.Router();
var config = require('../config.json');
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: config.rosterblitz_gmail_un,
        pass: config.rosterblitz_gmail_pw
    }
});

router.get('#/email', function(req,res){

    var mailOptions = {

        from: req.query.sender, // sender address
        to: 'wizardplow@gmail.com', // list of receivers
        subject: 'from blakeparkinson.com', // Subject line
        text: req.query.textBody, // plaintext body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
        }
    });
})

module.exports = router;
