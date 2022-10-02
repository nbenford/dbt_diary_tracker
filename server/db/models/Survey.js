const conn = require('../conn');
const { Sequelize } = conn;

const Survey = conn.define('survey', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  surveyJSON: {
    type: Sequelize.JSON,
    allowNull: false,
  },
});

module.exports = Survey;
