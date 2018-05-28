// Required dependencies
const  http  =  require('http');
const  path  =  require('path');
const  express  =  require('express');
const  bodyParser  =  require('body-parser');
const  morgan  =  require('morgan');
const  authRouter = require('./routes/auth')
const  app  =  express();


//Config
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));

//Index
app.get("/", (req,res)=>{
    res.send("youhou")
})

app.use('/auth', authRouter)

//Error 404
app.use(function(req, res, next) {
    var  err  =  new  Error('Méga erreur')
    err.status  =  404
    next(err)
})


//Node server
let  server  =  app.listen( process.env.PORT  ||  3000, function(){
    console.log('Listening on port '  +  server.address().port)
});