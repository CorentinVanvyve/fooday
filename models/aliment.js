'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aliment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Aliment.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'user_id'
      });
    }
  }
  Aliment.init({
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kcal: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    protein: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    saturated_lipid: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    unsaturated_lipid: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    carbohydrate: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    sugar: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    store_product_link: {
      type: DataTypes.STRING,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Aliment',
  });
  return Aliment;
};
