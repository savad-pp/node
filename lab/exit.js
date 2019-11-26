process.on('exit',()=>{
    console.log('exit event recieved')

})

console.log('programe end')

setTimeout(()=>{

    console.log('another time out')
},0)