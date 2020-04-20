var express = require('express');
var router = express.Router();
require('dotenv').config();
/* GET home page. */
router.post('/', function(req, res, next) {
  const {body:{name}}= req
  const accountSid = process.env.ACC_ID;
  const authToken = process.env.API_KEY;
  const client = require('twilio')(accountSid, authToken);

  client.messages
      .create({
        body: `${res.body.firstName} has booked and appointment from the store Please contact them on`,
        from: '+15103909380',
        to: '+260961874478'
      })
      .then(message => console.log(message.sid));

    console.log(name);
  res.render('index', { title: "done" });
});

module.exports = router;
