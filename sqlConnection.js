const mysql = require('mysql');
const con = mysql.createConnection({
    host:'mysql-19072-0.cloudclusters.net',
    port:19072,
    user:"root",
    password:"1#Vikram",
    database:'vikram'
    // insecureAuth : true
})
// const con= mysql.createConnection({
//     host:'localhost',
//     port:3306,
//     user:'root',
//     password:'toor',
//     database:'relations'
 
// })
con.connect((err,result)=>{
    if(err)throw err;
    console.log('connected');
})

module.exports = con