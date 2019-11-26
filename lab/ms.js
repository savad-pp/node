var vm=require('vm')
var fs=require('fs')
var util=require('util')
// var scr=new vm.Script(fs.readFileSync('s1.js','utf-8'))
// scr.runInThisContext({filename:'test.vm'})

var sandbox={
    count1: 1
}
vm.createContext(sandbox)
if(vm.isContext(sandbox)){
    console.log('contextualize')
}
vm.runInContext('count1++; counter=true', sandbox,{filename : 'a.vm'})
console.log(util.inspect(sandbox))