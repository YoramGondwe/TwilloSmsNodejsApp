var express = require('express');
var router = express.Router();
require('dotenv').config();
/* GET home page. */
router.post('/', function(req, res, next) {
  const {data:{firstName,lastName,phoneNumber}}= req.body;
  const accountSid = process.env.ACC_ID;
  const authToken = process.env.API_KEY;
  const client = require('twilio')(accountSid, authToken);

  client.messages
      .create({
        body: `${firstName} ${lastName} has booked and appointment from the store Please contact them on ${phoneNumber}`,
        from: '+15103909380',
        to: '+XXXXXXXXXXXXXX'
      })
      .then(message => console.log(message.sid));

  res.render('index', { title: "done" });
});

module.exports = router;
