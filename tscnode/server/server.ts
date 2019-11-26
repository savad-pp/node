var path=require('path')
import { welcomeController } from './controllers'
var express=require('express')

const app = express();
const port: number = process.env.PORT || 3000;


app.use('/',express.static(path.join(__dirname,'../client/client/dist/client')))
app.use('/register', welcomeController);
app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}/`);
})
