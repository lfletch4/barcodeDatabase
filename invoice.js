module.exports = function transactions(Sequelize) {
    //'transactions' table
    const Transactions = sequelize.define('transactions', {
       tid: {
           type: DataTypes.STRING,
           unique: false,
           allowNull: false,

   
       },
       vendorID: {
           type: DataTypes.STRING,
           unique: false,
           allowNull: false,

   
       },    
       customerId: {
           type: DataTypes.STRING,
           unique: true,
           allowNull: false,

   
       },    
       date: {
           type: DataTypes.STRING,
           unique: false,
           allowNull: false,

   
       },    
       value: {
           type: DataTypes.STRING,
           unique: false,
           allowNull: false,

   
       },
       description: {
           type: DataTypes.STRING,
           unique: false,
           allowNull: false,
       },  

     });
   
        Transactions.belongsTo(Vendor);
        Transaction.belongsTo(Customer);
     
   
     return Transactions;
   };