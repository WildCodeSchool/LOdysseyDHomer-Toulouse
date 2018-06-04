const express  =  require('express')
const router = express.Router()
const  connection = require ('../../helpers/db')


router.post('/signup', function(req, res, next){


  const sqlQuery = 'INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)'
  const { email, password, name, lastname } = req.body
  connection.query(sqlQuery, [email, password, name, lastname], (err, result) => {
    if (err) {
      console.log(err)
      return res.status(500).send('Internal Server Error')
    }
    res.send(result)
  })
})

module.exports = router
