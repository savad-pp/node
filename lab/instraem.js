var {Transform} =require('stream')
var sumStream=new Transform({
    transform: function(chunk,encoding,callback){
var line=chunk.toString()
console.log('line : ',line)
var num=line.split(/\s+/)
var a=parseInt(num[0])
var b=parseInt(num[1])
var sum = a+b
//console.log(sum)
callback(null,String(sum+'\n'),'utf8')
    }
})

process.stdin
.pipe(sumStream)

.pipe(process.stdout)