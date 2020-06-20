var express = require('express');
var router = express.Router();
require('dotenv').config();
/* GET home page. */
router.post('/', function(req, res, next) {
  const {data:{firstName,lastName,phoneNumber}}= req.body;
  const accountSid = process.env.ACC_ID;
  const authToken = process.env.API_KEY;
  const fromNumber = process.env.FROM_NUMBER
  const toNumber = process.env.TO_NUMBER
  const client = require('twilio')(accountSid, authToken);

  client.messages
      .create({
        body: `${firstName} ${lastName} has booked and appointment from the store Please contact them on ${phoneNumber}`,
        from: fromNumber,
        to: toNumber
      })
      .then(message => console.log(message.sid));

  res.render('index', { title: "done" });
});

module.exports = router;
