
var express=require('express')
var bodyParser = require('body-parser');
var app = express();
 var port = 3000;
// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/study/cookie.html");
// });
// app.listen(port, () => {
//     console.log("Server listening on port " + port);
// });

const path=require('path')
app.get('/',(req, res)=>{
const staticFilePath=path.join(__dirname+'index.html')
const staticFileMiddleWare=express.static(staticFilePath)
app.use('/',staticFileMiddleWare)
})

app.listen(port, () => {
        console.log("Server listening on port " + port);
    });