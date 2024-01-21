"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _sequelize = require("sequelize");
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _environments = _interopRequireDefault(require("../config/environments"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = sequelize => {
  class Stocks extends _sequelize.Model {}
  Stocks.init({
    'Risk Score': {
      type: _sequelize.DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    'Nigerian Stocks': {
      type: _sequelize.DataTypes.STRING,
      allowNull: false
    },
    'Foreign Stocks': {
      type: _sequelize.DataTypes.STRING,
      allowNull: false
    },
    'Tech Stocks': {
      type: _sequelize.DataTypes.STRING,
      allowNull: false
    },
    'Emerging Stocks': {
      type: _sequelize.DataTypes.STRING,
      allowNull: false
    },
    'Nigerian Bonds': {
      type: _sequelize.DataTypes.STRING,
      allowNull: false
    },
    'Foreign Bonds': {
      type: _sequelize.DataTypes.STRING,
      allowNull: false
    },
    'Commodities': {
      type: _sequelize.DataTypes.STRING,
      allowNull: false
    },
    'Real Estate': {
      type: _sequelize.DataTypes.STRING,
      allowNull: false
    },
    'T-Bills': {
      type: _sequelize.DataTypes.STRING,
      allowNull: false
    },
    'Alternative': {
      type: _sequelize.DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Stocks',
    timestamps: false,
    primaryKey: false
  });
  return Stocks;
};
exports.default = _default;