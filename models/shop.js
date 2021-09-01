'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static getPublicAttributes() {
      return ['id', 'name', 'address', 'telephone'];
    }
  };
  Shop.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    telephone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Shop',
    timestamps: false
  });
  return Shop;
};