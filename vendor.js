const bcrypt = require("bcrypt");

module.exports = function vendor(Sequelize) {

    const Vendor = sequelize.define('vendor', {
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

    businessName: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,

    },

    description: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,

    },

    /* vendorID: {
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

  Vendor.hasMany(models.Transactions);
  
  return Vendor;
};