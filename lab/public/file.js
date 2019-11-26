var express = require("express");
const path=require('path')
var app = express();
var port = 3000;


// app.get("/",()=>{
//     const statticFilePath=path.join(__dirname+'public')
//     const staticFileMiddleWare=express.static(statticFilePath)
    
// app.use("/",staticFileMiddleWare)

// })
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/");
});



app.listen(port, () => {
    console.log("Server listening on port " + port);
});