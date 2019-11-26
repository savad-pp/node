var util = require('util')
var fs = require('fs')
var eventEmitter = require('events').EventEmitter;
function InputChecker(name,filePath){
    this.name=name
    this.filePath=filePath
    this.writeStream = fs.createWriteStream('./'+this.filePath+'.txt',{
        'flags':'a','encoding':'utf-8','mode':00666
    })
}
util.inherits(InputChecker,eventEmitter)

InputChecker.prototype.check=function(input){
    let command = input.slice(0,3)
    console.log('input in check:'+command)
    if(command == 'wr:'){
        console.log('command: wr:')
        this.emit('write',input.substring(3,input.length))
    } else if(command == 'en:'){
        this.emit('end')
    } else if(command == 'rd:'){
        this.emit('read')
    }
    else{
        this.emit('echo')
    }  
}

InputChecker.prototype.openStream=function(){
    this.readStream = fs.createReadStream('./'+this.filePath+'.txt',{
        'flags':'r','encoding':'utf-8'
    })
    var data=''
    this.readStream.on('data',function(chunk){
    data+=chunk;
    })
    this.readStream.on('end',function(){
        console.log(data)
    })
    
}
let ic=new InputChecker('myfile','output')
ic.on('write',function(inp){
this.writeStream.write(inp,'utf8')
})

ic.on('read',function(){
    this.openStream()
})

ic.on('echo',function(input){
    process.stdout.write('command not found',input)

})

ic.on('end',function(){
    process.exit()
})
process.stdin.setEncoding('utf8')
var readable=function(){
    var input=process.stdin.read()
    if(input != null){
        ic.check(input)
    }

}
process.stdin.on('readable',readable)
process.stdin.on('readable',readable)


