export default (sequelize, DataTypes) => {
    const Customer = sequelize.define('customer', {
       firstName: {
           type: DataTypes.STRING,
           unique: false,
   
       },
       lastName: {
           type: DataTypes.STRING,
           unique: false,
   
       },    
       email: {
           type: DataTypes.STRING,
           unique: true,
   
       },    
       password: {
           type: DataTypes.STRING,
           unique: false,
   
       },    
       businessName: {
           type: DataTypes.STRING,
           unique: false,
   
       },
       description: {
           type: DataTypes.STRING,
           unique: false,
   
       },    
       customerID: {
           type: DataTypes.STRING,
           unique: true,
   
       },
     });
   
     Customer.associate = (models) => {
         
     };
   
     return Vendor;
   };