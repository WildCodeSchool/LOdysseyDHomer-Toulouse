const express = require ('express')
const router = express.Router()
const connection = require('../../helpers/db.js')

router.post('/signup', function(req, res, next) {
  
  const sql = 'INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)'
    const { email, password, name, lastname} = req.body
  connection.query(sql, [ email, password, name, lastname ], (err, result) => {
    if (err) {
      console.log(err)
      return res.status(500).send('le profil existe déjà')
    }
    res.json(result)
  })
});

module.exports = router;
