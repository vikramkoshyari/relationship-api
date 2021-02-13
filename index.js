const express = require('express')
// const con = require('./sqlConnection')
require('./tables')
const routes = require('./routes')

const app = express();
let port = process.env.PORT;
if(port==null){
    port=8080;
}
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://relationshipbuilder.herokuapp.com/');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});app.use(express.urlencoded());
app.use(routes)


app.listen(port,()=>{
    console.log("server up at  "+port)
})


