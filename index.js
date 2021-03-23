const express = require("express")
app = express();



app.get('/', function (req, res) {
  res.send("I am from mode js ")
})

app.listen(440, function () {
  console.log("surver run success!")
})