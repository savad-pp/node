var fs=require('fs')
var async=require('async')

async.parallel({
     data1: (cb)=>{
fs.readFile('./f1.txt','utf8',(err,data)=>{
    cb(err,data)
})
        
     },
     data2: (cb)=>{
        fs.readFile('./f2.txt','utf8',(err,data)=>{
            cb(err,data)
        })
        
     },
     data3: (cb)=>{
        fs.readFile('./f3.txt','utf8',(err,data)=>{
            cb(err,data)
        })
        
     }
    
},(err,result)=>{
    if(err){
        console.log(err)
    }
console.log(result)
})