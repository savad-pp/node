process.stdin.setEncoding('utf8')
var fn=()=>{
    var input=process.stdin.read()
    if(input != null){
        process.stdout.write(input)
        var command=input.trim()
        if(command==='exit'){
            process.exit(0)
        }
        else{
            process.stdin.on('readable',fn) 
        }
    }
}
process.stdin.on('readable',fn)
process.stdin.on('readable',fn)