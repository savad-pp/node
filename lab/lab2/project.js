const fs = require('fs');
const buttonPressesLogFile = './hot';

console.log(`Watching HOT directory`);

fs.watch(buttonPressesLogFile, (event, filename) => {
    //if (filename) 
      console.log(`${filename} come in HOT Directory`);
      console.log('event :',event)
      // var moveFile = (file, dir2)=>{

      //   var fs = require('fs');
      //   var path = require('path');
    
      //   var f = path.basename(file);
      //   var dest = path.resolve(dir2, f);
      
      //   fs.rename(file, dest, (err)=>{
      //     //if(err) throw err;
      //     console.log('Successfully moved');
      //   });
      // }
      // moveFile('./hot/'+filename+'', './processing');
    

    
})