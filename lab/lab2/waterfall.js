var fs=require('fs')
var async=require('async')
var htmlparser = require("htmlparser2");
var textdata=''
const parser=new htmlparser.Parser({
    ontext: function(text){
        console.log('///',text)
        if(text && text.length>0){
                textdata+=text
        }
    }
})
async.waterfall([
(callback)=>{
//onsole.log('a')
fs.readFile('./input/in.html',{'encoding':'utf8'},(err,data)=>{
   // console.log('text',data)
    //console.log('err',err)
    callback(err,data)
    
})

},(text,callback)=>{
   // console.log('in two',text)
         
    parser.write(text);
    callback(null,textdata)
},
(text,callback)=>{
    //console.log('c')
    fs.appendFile('./output/out.txt',text,(err)=>{
        callback(err,text)
    })
    
}


],(err,result)=>{
    console.log(err)
    if(!err){
        console.log('result : ',result)
    }
})