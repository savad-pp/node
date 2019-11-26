function abc(arg1_){
    var callback_= arguments[arguments.length-1]
    console.log(callback_)
    ca =(typeof(callback_)=='function' ? callback_ : null)
    console.log(ca)
    var arg1=(typeof(arg1_)=='number' ? arg1_ : null)
    console.log(arg1)
}
abc(8)