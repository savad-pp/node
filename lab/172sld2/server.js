var http = require('http')
var fs = require('fs')
var mime=require('mime')
base = '/home/expert/mean_stack/lab/172sld2/public';
http.createServer(function (req, res) {
    var url=req.url
    var contenttype=mime.getType(url)
    var ext=mime.getExtension(url)
    console.log('METHOD',req.method)
    console.log('extension',ext)
    console.log('mime',contenttype)
    console.log('url:',url)
pathname = base + req.url;
console.log(pathname);
res.setHeader('Content-type',contenttype)
var frs=fs.createReadStream(pathname)
//res.statusCode=404
frs.on('open',()=>{
    res.statusCode=200
    frs.pipe(res)
})

frs.on('error',()=>{
    res.writeHead(404,'file missing')
    res.write('sory for the trouble')
    res.end()
})


}).listen(8124);
console.log('Server web running at 8124');
