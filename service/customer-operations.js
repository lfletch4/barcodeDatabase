

const client = require('./clients/db-connection.js');

modeule.exports = {
    createCustomer: function (fname, lname, email){

    let custCreateQuery = "insert into customer (first_name, last_name , email) values ('"
    + fname + "','" + lname + "', '" + email +"')";

    console.log(custCreateQuery);

    client.query(custCreateQuery);

},

deleteCustomer: function (id){


"delete from customer where id=" + id + ""

}




/**
 * 
 * function updateCustomer(id, fname, lname, email){
 * 
 * }
 * 
 * 
 * 
 * 
 */


 }