var http=require('http')
var url=require('url')

var server=http.createServer()
server.on('request',function(request,response){
    console.log('request event')
    response.writeHead(200,{'Content-Type' : 'text/plain'})
    response.end('hello world\n')

    var parsedUrl=url.parse(request.url,true)
    var querys=parsedUrl.query
    var path=parsedUrl.pathname
    console.log('path =>',path)
    console.log('query=>',querys)
    console.log(require.main)

})

server.on('connection',function(){
    console.log('connection event')
})


server.listen(3000,function(err){
    if(err)
    {
        console.log(err)
    }
    console.log('port listening')
})