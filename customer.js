const bcrypt = require("bcrypt");

module.exports = function customer(Sequelize) {
    const Customer = sequelize.define('customer', {
       firstName: {
           type: DataTypes.STRING,
           unique: false,
           allowNull: false,
   
       },
       lastName: {
           type: DataTypes.STRING,
           unique: false,
           allowNull: false,

   
       },    
       email: {
           type: DataTypes.STRING,
           unique: true,
           allowNull: false,

   
       },    
       password: {
        type: DataTypes.STRING(64),
        is: /^[0-9a-f]{64}$/i,
        unique: false,
        allowNull: false,

   
       },    
           
      /*  customerID: {
           type: DataTypes.STRING,
           unique: true,
           allowNull: false,
       }, */
    }, {//password hash-bcrypt
        freezeTableName: true,
        instanceMethods: {
            generateHash(password) {
                return bcrypt.hash(password, bcrypt.genSaltSync(8));
            },
            validPassword(password){
                return bcrypt.compare(password, this.password);
            }
        }

     });
     Customer.hasMany(models.Transactions);

   /*  Customer.sync({ force: true }).then(() => {
        //create table
        return Customer.create({
            firstName: 'Mike',
            lastName: 'Jones'
        });
    });
 */
    
   
     return Customer;
   };