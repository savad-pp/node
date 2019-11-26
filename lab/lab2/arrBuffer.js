// var buffer=new ArrayBuffer(100)
// var view=new DataView(buffer)
// view.setInt32(8,22,false)
// var n=view.getInt32(8,false)
// console.log(n)

// var buffer=new ArrayBuffer(80)
// var typedArray=new Int16Array(buffer,0,4)
// typedArray[0]=23
// typedArray[3]=64

// console.log(typedArray)

// var buf=new Buffer.from('b','ascii')
// //buf.write('€','utf-8')
// console.log(buf)

// var buf=new Buffer(26)
// // for (var i=0;i<26;i++){
// //     buf[i]=i+97
// // }
// console.log(buf.toString('ascii'))

// var buf1=new Buffer('ssss')
// var buf2=new Buffer('avad')
// console.log(Buffer.concat([buf1,buf2]).toString())
// console.log(buf1.compare(buf2))
// let SD = require('string_decoder').StringDecoder;
// let decoder = new SD('utf8'); 
// let euro = new Buffer([0xE2, 0x82]);
// let euro2 = new Buffer([0xAC]); 
// console.log(decoder.write(euro));
// console.log(decoder.write(euro2));
// console.log(euro.toString());
// console.log(euro2.toString());

// var buffer1 = new Buffer('ABC');
// var buffer2 = new Buffer(3);
// buffer1.copy(buffer2);
// console.log("buffer2 content: " + buffer2.toString());

let a = [1,2,3];
let b = Buffer.from(a);
console.log(b);
