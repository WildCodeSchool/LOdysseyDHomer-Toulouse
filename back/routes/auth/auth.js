const express = require('express')
const router = express.Router()
const connection = require('../../helpers/db.js')

router.post('/signup', function(req, res, next) {
  
  const requetes = `INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)`

  const { email, password, name, lastname } = req.body
  console.log(req.body)
  connection.query(requetes, [email, password, name, lastname], (error, results) => {
      if (error) {
    res.status(500).json({ flash:  error.message })
      }
      else {
    res.status(200).json({ flash:  'User has been signed up !' })
      }
    })
})


module.exports = router 


