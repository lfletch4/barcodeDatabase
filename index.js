
import Sequelize from 'sequelize';

const sequelize = new Sequelize('pbb', 'postgres', 'Usm605269!');

const models ={
    user: sequelize.import ('./vendor'),
    user: sequelize.import ('./customer'),
};

    
Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;