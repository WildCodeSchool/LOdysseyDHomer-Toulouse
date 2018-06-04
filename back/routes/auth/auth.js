const express = require('express')
const router = express.Router()
const connection = require('../../helpers/db.js')

router.post('/signup', function(req, res, next) {
  
  const requetes = `INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)`

  const { email, password, name, lastname } = req.body
  console.log(req.body)
  connection.query(requetes, [email, password, name, lastname], (error, results) => {
      if(error) {
        return res.status(500).json({
          error: error.message
        })
      }
      res.json(results)
    })
})


module.exports = router 


