'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Metric extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Metric.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'user_id'
      });
    }
  }

  Metric.maintenanceCalc = function () {
    let age = new Date().valueOf() - new Date(birthday).valueOf()
    age = age.getFullYear()

    if (gender === 'M') {
      return((13.7516 * weight) + (500.33*(height/100))-(6.7550 * age) + 66.473);
    } else {
      return((9.5634 * weight) + (184.96*(height/100))-(4.6756 * age) + 655.0955);
    }
  };

  Metric.maintenance = maintenanceCalc();

  Metric.init({
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    maintenance: {
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Metric',
  });
  return Metric;
};
