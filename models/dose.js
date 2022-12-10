'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dose extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Dose.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'user_id'
      }),
      Dose.belongsTo(models.Dishe, {
        as: 'dishe',
        foreignKey: 'dishe_id'
      }),
      Dose.belongsTo(models.Aliment, {
        as: 'aliment',
        foreignKey: 'aliment_id'
      });
    }
  }

  Dose.init({
    gram: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    aliment_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kcal: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    protein: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    saturated_lipid: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    unsaturated_lipid: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    carbohydrate: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    sugar: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    aliment_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dishe_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Dose',
  });

  return Dose;
};
