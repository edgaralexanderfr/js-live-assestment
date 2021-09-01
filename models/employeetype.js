'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeeType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static getPublicAttributes() {
      return ['id', 'name', 'salary'];
    }
  };
  EmployeeType.init({
    name: DataTypes.STRING,
    salary: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'EmployeeType',
    timestamps: false
  });
  return EmployeeType;
};