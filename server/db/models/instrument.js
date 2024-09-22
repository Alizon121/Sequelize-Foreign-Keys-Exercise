'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instrument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
    },
    musicianId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Instrument',
  });
  return Instrument;
};
