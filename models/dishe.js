'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dishe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dishe.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'user_id'
      }),
      Dishe.hasMany(models.Dose, {
        as: 'dose',
        foreignKey: 'dishe_id',
      });
    }
  }
  Dishe.init({
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kcal: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    protein: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    saturated_lipid: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    unsaturated_lipid: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    carbohydrate: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    sugar: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Dishe',
  });
  return Dishe;
};