const conn = require('../conn');
const { Sequelize } = conn;

const SurveyResult = conn.define('surveyResult', {
  surveyResultJSON: {
    type: Sequelize.JSON,
    allowNull: false,
  },
});

module.exports = SurveyResult;
