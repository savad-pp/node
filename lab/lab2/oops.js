
var F= function(x){
this.v1=x
}
F.prototype.v1=20
F.prototype.check = function(){
    console.log('check')
}
var ob1=new F(15)
var ob2=new F(25)
console.log(ob1.v1)
console.log(ob2.v1)
ob2.check()
console.log('prototype',ob1.__proto__.v1)