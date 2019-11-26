var express = require("express");
var app = express();
var port = 3000;
var fs=require('fs')
var bodyParser = require('body-parser');

// app.get('/user', function (req, res) {
//     fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//         console.log( data );
//         datas = JSON.parse( data );
//         delete datas["user" + 2];
//         console.log('datas',datas)
//         res.end( data );
//     });
//  })

// app.post('/user', function (req, res) {
//     // First read existing users.
//     fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//         datas = JSON.parse( data );
//         var body = ''
       
//          req.on('data', function (dat) {
//             body += dat;
//            console.log('BODY',body)
//            datas.user5=JSON.parse(body)
//            console.log( datas );
          
// });
        
// //datas = JSON.parse( data );
        
//         res.end( JSON.stringify(datas));
//     });
// })

app.get('/user/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       console.log(users)
       var user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })
app.use(express.urlencoded({ extended: false })) 

var server=app.listen(port,()=>{
     
     var host=server.address().address
     var port=server.address().port
     console.log('port listening to %s on %s',port,host)
 })