var express = require('express');
const app = express();
const bodyParser = require('body-parser'); //http request handling
const cors = require('cors');//cross origin resource sharing 
const port = 8080;


let customers =[];


app.use(cors());

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.post("/customer/create", (req,res) => {
    const customers = req.body;
    console.log(customer);
    customers.push(customer);
    res.send('customer has been added to the database');
});

app.listen(port, () => console.log(`Pay-By-Bar-Code listening on port ${port}`));


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
  
   
  