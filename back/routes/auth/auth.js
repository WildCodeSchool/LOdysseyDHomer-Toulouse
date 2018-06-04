
const express = require('express')
const router = express.Router()
const connection = require('../../helpers/db.js')

router.post('/signup', function (req, res) {
  // res.send('I am in POST signup')


  const user = 'INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)'
  const { email, password, name, lastname } = req.body

  connection.query(user, [email, password, name, lastname], (error, result) => {
    if (error) {
      return res.status(500).json({ flash:  error.message })
    }
    else {
      return res.status(200).json({ flash:  "Utilisateur bien ajouté !" })
    }
  })
})

module.exports = router


