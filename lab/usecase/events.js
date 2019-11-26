var events=require('events')
var eEmitter=new events.EventEmitter()


var lister1 = function(){
    console.log('listnr-1 exicuted')
  
}

var lister2 = function(){
    console.log('listnr-2 exicuted')
}
eEmitter.addListener('con',lister1)
eEmitter.on('con',lister2)
eEmitter.on('con',lister2)
//eEmitter.removeListener('con',lister2)

eEmitter.emit('con')

eEmitter.setMaxListeners(10)
//eEmitter.listenerCount(emit,'con')