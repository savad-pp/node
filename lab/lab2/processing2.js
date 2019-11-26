const path = require('path');
const fs = require('fs');
//joining path of directory 
//passsing directoryPath and callback function
setInterval(ss,1000)
function ss(){
    const directoryPath = path.join(__dirname, 'processing');
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file+' Is In HOT'); 
        var moveFile = (file, dir2)=>{

            var fs = require('fs');
            var path = require('path');
        
            var f = path.basename(file);
            var dest = path.resolve(dir2, f);
          
            fs.rename(file, dest, (err)=>{
              //if(err) throw err;
              console.log('Successfully moved to Processing');
            });
          }
          moveFile('./hot/'+file+'', './processing');
        
    });
})}