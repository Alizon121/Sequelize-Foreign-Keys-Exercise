'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addColumn('Musicians', 'bandId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Bands',
          key: 'id'
        },
        onDelete: 'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
   return await queryInterface.removeColumn('Musicians', 'bandId')
  }
};
