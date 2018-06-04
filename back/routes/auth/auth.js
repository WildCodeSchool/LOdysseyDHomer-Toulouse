const express = require("express")
const router = express.Router()
const connection = require('../../helpers/db.js')


router.post("/signup", function(req, res) {
  // res.send("I am in POST signup")

  const sqlQuery = "INSERT INTO users (email, password, name, lastname) VALUES (?, ?, ?, ?)"
  const { email, password, name, lastname } = req.body
  connection.query(sqlQuery, [email, password, name, lastname], (err, result) => {
    if(err) {
      return res.status(500).json({flash: err.message})
    }
    else {
      return res.status(200).json({flash: "User has been signed up"})
    }
  })
})

module.exports = router
