const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const { INTEGER } = require("sequelize");

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  otp: {
    type: DataTypes.STRING,
    allowNull: true,
    default: 1111,
  },

  created_by: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  updated_by: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = User;
