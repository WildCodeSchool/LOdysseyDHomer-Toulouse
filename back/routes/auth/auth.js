const express  =  require('express')
const router = express.Router()
const  connection = require ('../../helpers/db')

router.post('/signup', function(req, res, next){

  const sqlQuery = 'INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)'
  const { email, password, name, lastname } = req.body
  connection.query(sqlQuery, [email, password, name, lastname], (err, result) => {
    if (err){
      return res.status(500).json({ flash: "Utilisateur déjà inscrit" })
    }
    else{
      return res.status(200).json({ flash: "Merci pour votre inscription" })
    }
  })
})

module.exports = router
