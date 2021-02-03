const express = require('express')
const con = require('./sqlConnection')
const router = new express.Router();


// fetch all relationships
router.get('/',(req,res)=>{
    con.query('select name,relationship_type.relation,(select name from persons where relationship.relativeID=persons.id) as relative_name from persons,relationship_type,relationship where  relationship_type.id=relationship.relation and relationship.personID=persons.id',(err,result)=>{
        if(err)throw err;
        res.send(result)

    })    
})

// fetch specific person  all relations
router.get('/:person',(req,res)=>{
    con.query("select name,relationship_type.relation,(select name from persons where relationship.relativeID=persons.id) as relative_name from persons,relationship_type,relationship where ( relationship_type.id=relationship.relation and relationship.personID=persons.id) and (relationship.relativeID=(select id from persons where name='"+req.params.person+"')" +" or relationship.personID=(select id from persons where name='"+req.params.person +"'))",(err,result)=>{
        if(err)throw err;
        res.send(result)
    })
})

// fetch specific table
router.get('/table/:tableName',(req,res)=>{
    con.query('select * from '+req.params.tableName,(err,result)=>{
        if(err)throw err;
        res.send(result)
    })
})

// insert into persons
router.post('/persons/:name',(req,res)=>{
    con.query('insert into persons (name) values ("'+req.params.name+'")',(err,result)=>{
        if(err)throw err;
        res.send('success')
    })
})
// insert into relationship-type
router.post('/relationship-type/:relation',(req,res)=>{
    con.query('insert into relationship_type (relation) values ("'+req.params.relation+'")',(err,result)=>{
        if(err)throw err;
        console.log("success")
    })
})
// insert into relationship table
router.post('/relationship/:personID/:relativeID/:relation',(req,res)=>{
    con.query('insert into relationship (personID,relativeID,relation) values (\''+req.params.personID+'\',\''+req.params.relativeID+'\',\''+req.params.relation+'\')',(err,result)=>{
        if(err)throw err;
        res.send("success")
    })
})

module.exports=router