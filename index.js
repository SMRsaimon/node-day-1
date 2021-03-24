const express = require("express");
const app = express();
const cors = require("cors")
const bodyParser = require('body-parser')


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


const user = {
  name: "saimon",
  age: 23,
  job: "No Job"
}

const persons = ["kodu", "Modu", "lalMia", "kalaMia", "chad Mia "]


app.get("/", (req, res) => {
  res.send(user)
})

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const name = persons[id];
  res.send({ id, name })
})

app.post("/addInfo", (req, res) => {

  const user = req.body
  user.id = 55;
  res.send(user)

})
app.listen(4011, () => {
  console.log("Server Response Successfully Completed")
})