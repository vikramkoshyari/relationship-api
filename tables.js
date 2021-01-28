const con = require('./sqlConnection')

//create person table
con.query('create table if not exists persons(id int not null primary key auto_increment,name varchar(20))',(err,result)=>{
    if(err)throw err;
    console.log('person table created success')
})


//create relationship_type table


con.query('create table if not exists relationship_type(id int not null primary key auto_increment,relation varchar(15))',(err,result)=>{
    if(err)throw err;
    console.log('relationship_type table creates success')
})


//create relationship table


con.query('create table if not exists relationship(id int not null primary key auto_increment,personID int not null,relativeID int not null,relation int not null)',(err,result)=>{
    if(err)throw err;
    console.log('relationship table created success')
})
