'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Musician extends Model {
    static associate(models) {
      Musician.belongsTo(
        models.Band,
         {foreignKey: 'bandId'}
      )
      Musician.belongsToMany(
        models.Instrument,
        {
          through: models.MusicianInstruments,
          foreignKey: 'musicianId',
          otherKey: 'instrumentId'
        }
      )
    }
  };
  Musician.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    bandId: {
     type: DataTypes.INTEGER,
     allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Musician',
  });
  return Musician;
};
