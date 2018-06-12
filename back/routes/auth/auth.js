const  express  = require('express');
const router = express.Router()
const connection = require('../../helpers/db.js')

router.post('/signup', function(req, res) {
    console.log(req.body)
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name
    const lastname = req.body.lastname
    
    // const query = `INSERT INTO users(email, password, name, lastname) VALUES ('${email}', '${password}', '${name}', '${lastname}')`
    const query = `INSERT INTO users(email, password, name, lastname) VALUES (?,?,?,?)`
    connection.query(query, [email, password, name, lastname], function(error, results, fields) {
        if (error) {
            return res.status(500).json({ flash:  error.message });
        }
        
        else {
            return res.status(200).json({ flash:  "User has been signed up !" });
        }
        
    });
    // res.send(req.body);
});

module.exports = router;