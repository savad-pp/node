var fs = require("fs");
var zlib = require('zlib');
// fs.createReadStream('input.txt')
//    .pipe(zlib.createGzip())
//    .pipe(fs.createWriteStream('input.txt.gz'));


   fs.createReadStream('input.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('output_unzip.txt'));



console.log("File Compressed.");
