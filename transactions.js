export default (sequelize, DataTypes) => {
    const Transactions = sequelize.define('transactions', {
       orderID: {
           type: DataTypes.STRING,
           unique: false,
   
       },
       vendorID: {
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
       userID: {
           type: DataTypes.STRING,
           unique: true,
   
       },
     });
   
     Transactions.associate = (models) => {
        Transactions.belongsTomany(models.)
     };
   
     return Vendor;
   };