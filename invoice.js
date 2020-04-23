module.exports = function transactions(Sequelize) {
    //'invoice' table
    const Invoice = sequelize.define('invoice', {
       tid: {
           type: DataTypes.STRING,
           unique: false,
           allowNull: false,

   
       },
       /* vendorID: {
           type: DataTypes.STRING,
           unique: false,
           allowNull: false,

   
       }, */    
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
   
        Invoice.belongsTo(Vendor);
        Invoice.belongsTo(Customer);
     
   
     return Invoice;
   };