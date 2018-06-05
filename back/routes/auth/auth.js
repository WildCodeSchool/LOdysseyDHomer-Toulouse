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
        if(error) {
            console.error(error)
            return res.status(500).end();
        }
        res.send('I am in POST signup');
    });
    // res.send(req.body);
});

module.exports = router;