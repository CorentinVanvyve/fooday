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
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      });
    }
  }


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

  Metric.prototype.maintenanceCalc = function() {
    const diff_ms = Date.now() - new Date(this.birthday).getTime();
    const age_dt = new Date(diff_ms);

    const age =  Math.abs(age_dt.getUTCFullYear() - 1970);

    if (this.gender === 'M') {
      return parseInt((13.7516 * this.weight) + (500.33*(this.height/100))-(6.7550 * age) + 66.473);
    } else {
      return parseInt((9.5634 * this.weight) + (184.96*(this.height/100))-(4.6756 * age) + 655.0955);
    }
  };

  Metric.beforeCreate(async (metric) => {
    metric.maintenance = metric.maintenanceCalc();
  });

  Metric.beforeUpdate(async (metric) => {
    metric.maintenance = metric.maintenanceCalc();
  });

  return Metric;
};
