
const express = require('express')
const router = express.Router()
const connection = require('../../helpers/db.js')

router.post('/signup', function (req, res) {
  // res.send('I am in POST signup')


  const user = 'INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)'
  const { email, password, name, lastname } = req.body

  connection.query(user, [email, password, name, lastname], (error, result) => {
    if(error) {
      return res.status(500).send('Internal Server Error')
    }
    res.json(result)
  })
})

module.exports = router
