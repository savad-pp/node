var event=require('events')
process.stdin.setEncoding('utf8')
// var a,b
var eEmitter=new event.EventEmitter()
// console.log('enter 1st number')
// eEmitter.on('first',()=>{
//     process.stdin.on('readable',()=>{
    
//          a=parseInt(process.stdin.read())
//          console.log('a=',a)
//          eEmitter.emit('second')
//         })
  
// })
// eEmitter.emit('first')


// eEmitter.on('second',()=>{
//    b=1
//     process.stdin.on('readable',()=>{
//         console.log('enter 2nd number')
//          b=parseInt(process.stdin.read())
//          console.log('b=',b)
    
    
//     })
//     eEmitter.emit('result')

// })

// eEmitter.on('result',()=>{
//     console.log('RESULT')
//     if(a>b){
//         console.log('a is greater')   
//       }
//       else{
//           console.log('b is greater')
//       }
// })

//process.stdout.write(input)

var a=[]

var chunk;
console.log('enter 1st number')
process.stdin.on('readable',()=>{
    while((chunk=process.stdin.read())){
    a.push(chunk)
    console.log(a)
    }
   if(a.length>1){
       eEmitter.emit('result')
   } 
})

eEmitter.on('result',()=>{
    if(parseInt(a[0]) > parseInt(a[1])){
        console.log('first is greater')

    }
    else{
        console.log('second greater')
    }
})
