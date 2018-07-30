const mysql=require('mysql');



var con=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
   database:"e-commerce",
});

con.connect(function(err){
if(err)
throw err
console.log("you are connected");
}

);
con.on('error', function(err) {
    console.log("[mysql error]",err);
  });


  



module.exports=con;