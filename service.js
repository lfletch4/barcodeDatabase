
const bcrypt = require("bcrypt");
const {Sequelize, DataTypes} = require('sequelize', 'pg');
const express = require('express');

const sequelize = new Sequelize('PayByBarcode', 'postgres', 'Usm605269!',{
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 9,
    min: 0,
    acquire: 30000,
    database: 'api',
    idle: 10000
  }
});
//verify connection
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const models ={
    Vendor: sequelize.import ('./vendor'),
    Customer: sequelize.import ('./customer'),
    Transactions: sequelize.import ('./invoice'),

};

Object.keys(models).forEach((invoice) => {
  if ('associate' in models[vendor]) {
    models[invoice].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
 