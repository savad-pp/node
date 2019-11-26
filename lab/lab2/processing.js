const fs = require('fs');


const buttonPressesLogFile = './processing';



fs.watch(buttonPressesLogFile, (event, filename) => {
    if (filename) {
      console.log(`Now ${filename} Is Processing...`);
      


      var htmlparser = require("htmlparser2");
      //var fs = require("fs");
  const readFile=filename
      fs.readFile(readFile, function (err, data) {
          const rddata=data.toString()
          if (err) {
             return console.error(err);
          }
          //console.log("Asynchronous read: " + rddata);
        var parser = new htmlparser.Parser({
              onopentag: function(name, attribs){
                if(name === "script" && attribs.type === "text/javascript"){
                  console.log("JS! Hooray!");
                }
              },
              ontext: function(text){
                //console.log("-->", text);
               fs.appendFile('processed/output.txt', text,  function(err) {
                  if (err) {
                     return console.error(err);
                  }
                  //console.log("Data written successfully!");
                  fs.unlink('processing/'+readFile, function(err) {
                    if (err) { return console.error(err); }
                    console.log(readFile+" Deleted successfully");
                 });
                })        
              }
            }, {decodeEntities: true});
            parser.write(rddata);
            console.log( filename+' Processing compleated')
            parser.end();
            }); 

           
             
      
    }
})