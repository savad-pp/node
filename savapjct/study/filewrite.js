var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var fs = require('fs'); 
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test2");
//   var myobj = [
//     { name: 'John', address: 'Highway 71'},
//     { name: 'Peter', address: 'Lowstreet 4'},
//     { name: 'Amy', address: 'Apple st 652'},
//     { name: 'Hannah', address: 'Mountain 21'},
//     { name: 'Michael', address: 'Valley 345'},
//     { name: 'Sandy', address: 'Ocean blvd 2'},
//     { name: 'Betty', address: 'Green Grass 1'},
//     { name: 'Richard', address: 'Sky st 331'},
//     { name: 'Susan', address: 'One way 98'},
//     { name: 'Vicky', address: 'Yellow Garden 2'},
//     { name: 'Ben', address: 'Park Lane 38'},
//     { name: 'William', address: 'Central st 954'},
//     { name: 'Chuck', address: 'Main Road 989'},
//     { name: 'Viola', address: 'Sideway 1633'}
//   ];
//   dbo.collection("customers").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log(" documents inserted");
//     console.log(res.insertedCount) 

// { _id: 0,address: 0 }

dbo.collection("customers").find({},{ projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    //var jsonContent = JSON.stringify(result); 
    console.log(result);
    for(i=0;i<result.length;i++){
    fs.appendFile('mynewfile3.txt','Name :'+ result[i].name + '  '+'Address :'+result[i].address+'\n', function (err) {
        if (err) throw err;
        
      }); 
    }console.log('Saved!');
    console.log(result[2].address);
    db.close();
  });
}); 