const  express  = require('express');
const router = express.Router()

router.post('/signup', function(req, res) {
    res.send('I am in POST signup');
});

module.exports = router;