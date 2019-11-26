var v='console.log("hello")'
var vm=require('vm')
var sandbox={
    process :'a new process',
    require : 'that',
    console :console
}

vm.runInNewContext('console.log(process);console.log(require)',sandbox)