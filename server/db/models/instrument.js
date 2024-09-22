'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instrument extends Model {
    static associate(models) {
      Instrument.belongsToMany(
        models.Musician,
        {
          through: models.MusicianInstruments,
          foreignKey: 'instrumentId',
          otherKey: 'musicianId'
        }
      )
    }
  };
  Instrument.init({
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Instrument',
  });
  return Instrument;
};
