const express = require('express')
const router = express.Router()
const connection = require('../../helpers/db.js')

router.post('/signup', function(req, res) {


  const sqlQuery = 'INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)'
  const { email, password, name, lastname } = req.body
  connection.query(sqlQuery, [email, password, name, lastname], (err, result) => {
    if (err) {
      console.log(err)
      return res.status(500).send('error')
    }
    res.json(result)
  })

})



module.exports = router;