
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
    idle: 10000
  }
});
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const models ={
    Vendor: sequelize.import ('./vendor'),
    Customer: sequelize.import ('./customer'),
    Transactions: sequelize.import ('./transactions'),

};
//sequelize.Transactions.import {  } from "module";
  
Object.keys(models).forEach((transactions) => {
  if ('associate' in models[vendor]) {
    models[transactions].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;