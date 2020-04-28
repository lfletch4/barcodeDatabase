var express = require('express');
const app = express();

// var services = require('./clients/db-connection.js');
// const serv = services

 var services = require('./service/customer-operations.js');
 const customerService = services


const bodyParser = require('body-parser'); //http request handling
const cors = require('cors'); //cross origin resource sharing 
const port = 8081;


let customers =[];

console.log(
  "im aive!!:"
)


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.listen(port, () => console.log(`Pay-By-Bar-Code listening on port ${port}`));




app.get('/customer/create', (req,res) => {
    const customers = req.body;

   // log all values, and throw 400 if any are null. if you dont know how to throw a 400 throw an err
    // customers
    // customers
    // customers


    customerService.createCustomer(customers.firstName, customers.lastName, customers.email);


  //  const {Client} = require('pg')

  //   const client = new Client({
  //     user: "admin",
  //     password: "mandr@K99",
  //     host: "localhost",
  //     port: 5432,
  //     database: "leeland_capstone"
  //   })


  //   client.connect()

  //   .then(() => console.log("connected successfully"))
  //   .then(() => client.query("insert into customer (first_name, last_name , email) values ('tom', 'riddle', 'masond5555@gmail.com')"))
  //   .then(results => console.table(results.rows))
  //   .catch(e => console.log(e))
  //   .finally(() => client.end())





   
  //  res.send('customer has been added to the database');
});





// create customer profile
const createCustomer = (req, res) => {
    const { firstName, lastName, email, password } = request.body
  
    pool.query('INSERT INTO customer (firstName, lastName, email, password) VALUES ($1, $2, $3, $4)', 
    [firstName, lastName, email, password], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${result.insertId}`)
    })
  }
  
  /* const getCustomer = (req, res) => {
    pool.query('SELECT * FROM customer ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  } */
  
  const createVendor = (req, res) => {
    const { firstName, lastName, email, password } = request.body
  
    pool.query('INSERT INTO vendor (firstName, lastName, email, password) VALUES ($1, $2, $3, $4)', 
    [firstName, lastName, email, password], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${result.insertId}`)
    })
  } 
  
   
  