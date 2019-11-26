var a,b



var reada=()=>{
     a=parseInt(process.stdin.read())
    if(a!=null){
        console.log('a',a)
    }
    else{
        console.log('null')
    }
    
}


var readb=()=>{
     b=parseInt(process.stdin.read())
    if(b!=''){
        console.log('b',b)
    }
    else{
        console.log('null')
        process.stdin.once('readable',readb)
    }
    
}
process.stdin.once('readable',reada)
process.stdin.once('readable',readb)