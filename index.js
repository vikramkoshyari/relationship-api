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


app.listen(port,()=>{
    console.log("server up at  "+port)
})


