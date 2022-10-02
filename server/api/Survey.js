// apiRoutes/users.js
const router = require('express').Router();
const { User, Survey, SurveyResult } = require('../db');
const { requireToken, isAdmin } = require('./gatekeepingMiddleware');

//dotenv holds our secret JWT key
require('dotenv').config();

// GETs a specific user's surveys
router.get('/mySurveys/:id', requireToken, async (req, res, next) => {
  try {
    const surveys = await SurveyResult.findAll({
      where: { userId: req.params.id },
    });
    if (surveys) {
      res.status(200).json(surveys);
    } else {
      res.send('No surveys found');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// POSTs a user's new survey
router.post('/mySurveys/:id', requireToken, async (req, res, next) => {
  try {
    await SurveyResult.create({
      userId: req.params.id,
      surveyId: 1,
      surveyResultJSON: req.body,
    });

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
