const express = require("express");
app = express();


app.get("/user/info", (req, res) => {

  const user = {
    name: "saimon",
    id: 1,
    job: "No"
  }
  res.send(user)
})



app.get("/users/:id", (req, res) => {
  console.log(req.params)
})


app.listen(4030, () => {
  console.log("surver successfully")
})