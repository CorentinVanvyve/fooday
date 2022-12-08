'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Profile, {
        as: 'profile',
        foreignKey: 'user_id',
      }),
      User.hasOne(models.Metric, {
        as: 'metric',
        foreignKey: 'user_id',
      }),
      User.hasMany(models.Aliment, {
        as: 'aliment',
        foreignKey: 'user_id',
      }),
      User.hasMany(models.Dishe, {
        as: 'dishe',
        foreignKey: 'user_id',
      }),
      User.hasMany(models.Dose, {
        as: 'dose',
        foreignKey: 'user_id',
      });
    }
  }
  User.init({
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
