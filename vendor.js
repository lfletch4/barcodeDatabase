export default (sequelize, DataTypes) => {
 const Vendor = sequelize.define('vendor', {
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
    venderID: {
        type: DataTypes.STRING,
        unique: true,

    },
  });

  Vendor.associate = (models) => {
      Vendor.belongsTomany(models.)
  };

  return Vendor;
};