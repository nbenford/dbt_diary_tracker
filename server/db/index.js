const conn = require('./conn');

//MODELS
const User = require('./models/User');
const Survey = require('./models/Survey');
const SurveyResult = require('./models/SurveyResult');

//ASSOCIATIONS
User.hasMany(SurveyResult);
SurveyResult.belongsTo(User);

SurveyResult.belongsTo(Survey);
Survey.hasMany(SurveyResult);

module.exports = {
  conn,
  User,
  Survey,
  SurveyResult,
};

//MAGIC METHODS!
/* Here's what we have to play with:

SurveyResult:
  'getUser',
  'setUser',
  'createUser',
  'getSurvey',
  'setSurvey',
  'createSurvey'

  Survey:
  'getSurveyResults',
  'countSurveyResults', 'hasSurveyResult',
  'hasSurveyResults',   'setSurveyResults',
  'addSurveyResult',    'addSurveyResults',
  'removeSurveyResult', 'removeSurveyResults',
  'createSurveyResult'

  User:
  'correctPassword',
  'generateToken',      'getSurveyResults',
  'countSurveyResults', 'hasSurveyResult',
  'hasSurveyResults',   'setSurveyResults',
  'addSurveyResult',    'addSurveyResults',
  'removeSurveyResult', 'removeSurveyResults',
  'createSurveyResult'
*/

module.exports = {
  conn,
  User,
  Survey,
  SurveyResult,
};
