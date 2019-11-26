var MongoClient = require('mongodb').MongoClient;
var fs=require('fs')
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb2");
  //var myobj = { name: "Company Inc", address: "Highway 37" };
  //var myobj= 
fs.readFile('ins.txt',
  // callback function that is called when reading file is done
  function(err, data) { 
      if (err) throw err;
      // data is a buffer containing file content
      console.log(data.toString('utf8'))
      
}); 

// var a=myobj.toString('utf8')
//   dbo.collection("customers").insert(a, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
});
