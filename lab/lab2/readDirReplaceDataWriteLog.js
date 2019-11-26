var fs = require('fs'),
async = require('async'),
_dir = './data/';
var writeStream = fs.createWriteStream('./log.txt',
      {'flags' : 'a',
       'encoding' : 'utf8',
       'mode' : 0666});
async.waterfall([
   function readDir(callback) {
      fs.readdir(_dir, function(err, files) {
          console.log(files)
         callback(err,files);
})} ,
function loopFiles(files, callback) {
    files.forEach(function (name) {
        console.log(name)
callback (null, name); });
},
 function checkFile(file, callback) {
    fs.stat(_dir + file, function(err, stats) {
       callback(err, stats, file);
    });
 },
 function readData(stats, file, callback) {
if (stats.isFile())fs.readFile(_dir + file, 'utf8', function(err, data){
         callback(err,file,data);
     });
 },
 function modify(file, text, callback) {
    var adjdata=text.replace(/soecompany\.com/g,'burningbird.net');
callback(null, file, adjdata); },
 function writeData(file, text, callback) {
     fs.writeFile(_dir + file, text, function(err) {
        callback(err,file);
  });
 },
 function logChange(file, callback) {
     writeStream.write('changed ' + file + '\n', 'utf8',
                     function(err) {
        callback(err);
    }); }
],(err,result)=>{
    console.log(err)
    if(!err){
        console.log('result : ',result)
    }
})