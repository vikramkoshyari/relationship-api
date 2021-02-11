const express = require('express')
// const con = require('./sqlConnection')
require('./tables')
const routes = require('./routes')

const app = express();
let port = process.env.PORT;
if(port==null){
    port=8080;
}

app.use(express.urlencoded());
app.use(routes)
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","https://localhost:3000.com")
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
    next()
})


app.listen(port,()=>{
    console.log("server up at  "+port)
})


