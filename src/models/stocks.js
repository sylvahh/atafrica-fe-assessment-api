const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Stocks extends Model {}

  Stocks.init(
    {
      'Risk Score': {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      'Nigerian Stocks': {
        type: DataTypes.STRING,
        allowNull: false,
      },

      'Foreign Stocks': {
        type: DataTypes.STRING,
        allowNull: false,
      },
      'Tech Stocks': {
        type: DataTypes.STRING,
        allowNull: false,
      },
      'Emerging Stocks': {
        type: DataTypes.STRING,
        allowNull: false,
      },
      'Nigerian Bonds': {
        type: DataTypes.STRING,
        allowNull: false,
      },
      'Foreign Bonds': {
        type: DataTypes.STRING,
        allowNull: false,
      },
      'Commodities': {
        type: DataTypes.STRING,
        allowNull: false,
      },
      'Real Estate': {
        type: DataTypes.STRING,
        allowNull: false,
      },
      'T-Bills': {
        type: DataTypes.STRING,
        allowNull: false,
      },
      'Alternative': {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },

    {
      sequelize,
      modelName: 'Stocks',
      timestamps: false,
      primaryKey: false,
    }
  );
  return Stocks;
};
