var fs=require('fs')
var data='sdsddss\ndsgjdsgj'

// var rs=fs.createReadStream('input.txt')
// rs.setEncoding('utf8')
// rs.on('data',(chunk)=>{
//     console.log('--------------------------------------------------chunk--------------------------------------------------------',chunk) 
//     data += chunk
// })
// rs.on('end',()=>{
//     console.log(data)
// })


var ws=fs.createWriteStream('out.txt')

ws.write(data,'utf8')

ws.on('error',(err)=>{
    console.log(err.stack);
})
ws.on('finish',()=>{
    console.log('compleated');
})
console.log('program end')