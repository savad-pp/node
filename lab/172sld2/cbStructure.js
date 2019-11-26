var Obj=function(){}
var fib=function(n){
    if(n<=1)
      return n
    else
      return fib(n-1)+fib(n-2)

}
Obj.prototype.doSomething= function(arg1_){
 var callback_= arguments[arguments.length-1]
 callback =(typeof(callback_)=='function' ? callback_ : null)
var arg1=(typeof(arg1_)=='number' ? arg1_ : null)
if(!arg1)
return callback(new Error('first argument is missing or not a number'))
process.nextTick(function(){
    var fnumnber=fib(arg1_)
    callback(null,fnumnber)
})
}

var object=new Obj()
var numberr=5
object.doSomething(numberr,function(err,value){
if(err){
    console.log(err)
}
else{
    console.log('fibnoci values for %d is %d',numberr,value)
}
})