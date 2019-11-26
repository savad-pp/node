    // from the documentation
     var htmlparser = require("htmlparser2");
    var fs = require("fs");
const readFile='test.html'
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
             fs.appendFile('output.txt', text,  function(err) {
                if (err) {
                   return console.error(err);
                }
                //console.log("Data written successfully!");
                
              })        
            }
          }, {decodeEntities: true});
          parser.write(rddata);
          parser.end();
          }); 
  