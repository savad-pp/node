var fs = require("fs");
var async=require('async')
var data = '';

// Create a readable stream
// var readerStream = fs.createReadStream('output.txt');

// // Set the encoding to be utf8. 
// readerStream.setEncoding('UTF8');

// // Handle stream events --> data, end, and error
// readerStream.on('data', function(chunk) {
//    data += chunk;
// });

// readerStream.on('end',function() {
//    console.log(data);
// });

// readerStream.on('error', function(err) {
//    console.log(err.stack);
// });

// var data = 'Simply Easy Learning';

// // Create a writable stream
// var writerStream = fs.createWriteStream('output.txt');

// // Write the data to stream with encoding to be utf8
// writerStream.write(data,'UTF8');

// // Mark the end of file
// writerStream.end();

// // Handle stream events --> finish, and error
// writerStream.on('finish', function() {
//    console.log("Write completed.");
// });

// writerStream.on('error', function(err) {
//    console.log(err.stack);
// });

// const checkFile=function(arg,callback){
//    if(typeof arg!='number'){
//       return callback('not number')
//    }
//    callback(null,'is number')
// }

// checkFile(a,function(err,data){
//    if(err){
//       console.log(err)
//    }
//    else
//    {
//       console.log(data)
//    }
// })

// async.parallel([
//   function(callback) {
//    setTimeout(function() {
//      console.log('Task One');
//      callback(null, 1);
//    }, 200);
//  },
//  function(callback) {
//    setTimeout(function() {
//      console.log('Task Two');
//      callback(null, 2);
//    }, 100);
//  }
// ],
// function(err, results) {
//  console.log(results);
//  // the results array will equal [1, 2] even though
//  // the second function had a shorter timeout.
// });

async.waterfall([
  function(callback) {
    callback(null, 'Task 1', 'Task 2');
  },
  function(arg1, arg2, callback) {
    // arg1 now equals 'Task 1' and arg2 now equals 'Task 2'
    let arg3 = arg1 + ' and ' + arg2;
    callback(null, arg3);
  },
  function(arg1, callback) {
    // arg1 now equals 'Task1 and Task2'
    arg1 += ' completed';
    callback(null, arg1);
  }
], function(err, result) {
  // result now equals to 'Task1 and Task2 completed'
  console.log(result);
});