var program = require('commander');
program
       .version ('0.0.1')
       .option ('-s, --source [web site]', 'Source web site')
       .option ('-f, --file [file name]', 'File name')
       .option('-k, --file [file name]', 'File name')
       .parse(process.argv);
    console.log('source :',program.source);
    console.log('file :',program.file);
console.log(__filename)