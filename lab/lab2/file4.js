const fs = require('fs');
//require('log-timestamp');

const buttonPressesLogFile = './';

console.log(`Watching for file changes on ${buttonPressesLogFile}`);

// fs.watchFile(buttonPressesLogFile, (curr, prev) => {
//   console.log(`${buttonPressesLogFile} file Changed`);
// //   console.log('curr',curr)
// //   console.log('pre',prev)
// });

fs.watch(buttonPressesLogFile, (event, filename) => {
    if (filename) {
      console.log(`${filename} file Changed`);
    }
})