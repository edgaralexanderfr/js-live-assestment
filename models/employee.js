'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Employee.belongsTo(models.EmployeeType, {
        as: 'type',
        foreignKey: 'employee_type_id'
      });

      Employee.belongsTo(models.Shop, {
        as: 'shop',
        foreignKey: 'shop_id'
      });
    }

    static getPublicAttributes() {
      return ['id', 'name', 'telephone', 'address', 'employment_date'];
    }
  };
  Employee.init({
    name: DataTypes.STRING,
    telephone: DataTypes.STRING,
    address: DataTypes.STRING,
    employment_date: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW
    },
    employee_type_id: DataTypes.INTEGER,
    shop_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Employee',
    timestamps: false
  });
  return Employee;
};