const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const sgMail = require('@sendgrid/mail')
const router = require("./routes");
require("dotenv").config();
var cors = require('cors')


const bodyParser = require("body-parser");

// Defining middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var options = {
    setHeaders: function (res, path, stat) {
      res.set({
        'Access-Control-Allow-Origin': '*',
        'Strict-Transport-Security': 'max-age=15780000; includeSubDomains'
      })
    }
  }

// Serving up static
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build", options));
}

//send to react app!
app.use(router);

// emial setup
// =============================================================

app.post("/sendEmail", function(req, res) {
  console.log(req.body)
  let Name = JSON.stringify(req.body.name)
  let Inquiry = JSON.stringify(req.body.inquiry)
  let Numbers = JSON.stringify(req.body.number)
  
  sgMail.setApiKey(process.env.key);


const msg = {
  to: 'Kriskokopelli@gmail.com',
  from: 'Kriskokopelli@gmail.com',
  subject: Name + " is looking for " +Inquiry, 
  text: Numbers,
  html: Name + " is looking for " + Inquiry + " their number is "  +  Numbers, 
};

sgMail.send(msg);
 
});


// Start the server
app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});
