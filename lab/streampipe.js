var fs=require('fs')
var readStream=fs.createReadStream('input.txt')
var writeStream=fs.createWriteStream('output.txt')
readStream.pipe(writeStream)
console.log('program end')
readStream.on('error',(err)=>{
    console.log(err.stack);
})
writeStream.on('error',(err)=>{
    console.log(err.stack);
})