const express= require('express');
var db=require('../db');
const jwt= require('jsonwebtoken');
var router = express.Router();


router.get("/", function (req, res, next) {
   
    db.query("SELECT * FROM  login", function (err, result, fields) {
          if (err) throw err;
        res.send(JSON.stringify({
            "status": 200,
            "error": null,
            "response": result
        }));
    });
});


router.post('/',(req,res)=>{
    var email=req.body.email;
    var password=req.body.password;
    db.query('SELECT * FROM login WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
        if(results.length >0){
            if(password==results[0].password){
                console.log(results);

                var token = jwt.sign({data:results[0].id},'secretkey');
              
                res.json({
                    results,
                    status:true,
                    token :token,
                    message:'successfully authenticated',
                    
                })
               
               
            }else{
                res.json({
                  status:false,
                  message:"Email and password does not match"
                 });
            }
         
        }
        else{
          res.json({
              status:false,    
            message:"Email does not exits"
          });
        }
      }
    });

})
module.exports = router;
   
   




 
