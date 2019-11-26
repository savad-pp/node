var fs = require("fs");

// fs.readFile('input.txt', function (err, data) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("Asynchronous read: " + data.toString());
// });

// fs.open('input.txt', 'r+', function(err, fd) {
//     if (err) {
//        return console.error(err);
//     }
//    console.log("File opened successfully!");     
//  });
 
// fs.stat('input.txt', function (err, stats) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(stats);
//     console.log("Got file info successfully!");
    
//     // Check file type
//     console.log("isFile ? " + stats.isFile());
//     console.log("isDirectory ? " + stats.isDirectory());    
//  });

fs.writeFile('input.txt', 'Simply Easy Learning!',  function(err) {
    if (err) {
       return console.error(err);
    }
    console.log("Data written successfully!");
    fs.readFile('input.txt', function (err, data) {
       if (err) {
          return console.error(err);
       }
       console.log("Asynchronous read: " + data.toString());
    }); 
  });

// fs.open('input.txt', 'r+', function(err, fd) {
//    if (err) { return console.error(err);  }
//    console.log("File opened successfully!");  
//     console.log("Going to read the file");
//     fs.ftruncate(fd, 10, function(err){
//         if (err){
//            console.log(err);
//         }
//         console.log("File truncated successfully.")})


//    fs.read(fd, Buffer.alloc(4), 0, Buffer.length, 5, function(err, bytes,buffer){
//       if (err){ console.log(err); }
//       console.log(bytes + " bytes read");
//       // Print only read bytes to avoid junk.
//       if(bytes > 0){
//          console.log(buffer.slice(0, bytes).toString());
//       }
//       fs.close(fd, function(err){ if (err){ console.log(err); }
//          console.log("File closed successfully.");})
//    }); 
   
//  });

 