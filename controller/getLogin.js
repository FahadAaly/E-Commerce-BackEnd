
var db=require('../db');
const express= require('express');
var router = express.Router();



module.exports.router = function(req,res){
   
    db.query("SELECT * FROM  login", function (err, result, fields) {
          if (err) throw err;
        res.send(JSON.stringify({
            "status": 200,
            "error": null,
            "response": result
        }));
    });
}


