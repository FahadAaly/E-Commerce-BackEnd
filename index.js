const express= require('express');
const bodyParser= require('body-parser');
const cors=require('cors');
const jwt= require('jsonwebtoken');

var app=express();
app.use(bodyParser.urlencoded({extended:true}));
var login=require('./controller/login')

const db = require('./config/db.config.js');
app.use(bodyParser.json());
app.use(cors({
    origin:'http://localhost:4300'
}));


// db.sequelize.sync({force: true}).then(() => {
//     console.log('Drop and Resync with { force: true }');
  
//   });

  require('./controller/products-route')(app);
  require('./controller/category-route')(app);




app.use('/login',login);

app.listen(3000,() =>console.log('Server started at port :3000'));



