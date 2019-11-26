const path = require('path');
const fs = require('fs');
var htmlparser = require("htmlparser2");

//joining path of directory 
//passsing directoryPath and callback function
setInterval(ss,1000)
function ss(){
    const directoryPath = path.join(__dirname, 'hot');
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
              processing()
            });
          }
          moveFile('./hot/'+file+'', './processing');
        });

    });
          //setInterval(processing,100)
          function processing(){
              console.log('Processing Mode')
              const directoryPath = path.join(__dirname, 'processing');
          fs.readdir(directoryPath, function (err, files) {
              //handling error
              if (err) {
                  return console.log('Unable to scan directory: ' + err);
              } 
              //listing all files using forEach
              files.forEach(function (file) {
                  // Do whatever you want to do with the file
                  console.log(file+' ON PROCESSING...'); 
                  //var fs = require("fs");
                   const readFile=file
                  fs.readFile(readFile, function (err, data) {
                      const rddata=data.toString()
                      if (err) {
                         return console.error(err);
                      }
                      //console.log("Asynchronous read: " + rddata);
                    var parser = new htmlparser.Parser({
                          onopentag: function(name, attribs){
                            if(name === "script" && attribs.type === "text/javascript"){
                             // console.log("JS! Hooray!");
                            }
                          },
                          ontext: function(text){
                            //console.log("-->", text);
                            fs.appendFile('processed/output.txt', text,  function(err) {
                                if (err) {
                                   return console.error(err);
                                }
                                //console.log("Data written successfully!");
                                
                              })    
                          }
                        }, {decodeEntities: true});
                        parser.write(rddata);
                        //console.log( filename+' Processing compleated')
                        parser.end();
                           
                        setTimeout(unlk,10000)
                        function unlk(){fs.unlink('processing/'+readFile, function(err) {
                          //if (err) { return console.error(err); }
                          console.log(readFile+" Deleted successfully");
                       })
                      }
                        });  
                        
              });

             


            });
     
        }
    }