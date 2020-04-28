

const {Client} = require('pg')



function getClient(){
const client = new Client({
    user: "admin",
    password: "mandr@K99",
    host: "localhost",
    port: 5432,
    database: "leeland_capstone"
})
return client;
}

function connect(){

client.connect()

.then(() => console.log("connected successfully"))
//.then(() => client.query("insert into customer (first_name, last_name , email) values ('becca', 'pearcey', 'masond5555@gmail.com')"))
//.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())
}

function close(){
    client.close()
}










