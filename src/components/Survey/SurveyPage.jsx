import React from 'react';
import { Model, StylesManager } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/modern.css';
import 'survey-react/survey.css';
import { fetchSurveys } from '../../reducers/Survey/surveyReducer.js';
import { submitSurvey } from '../../reducers/Survey/surveyReducer.js';
import surveyJSON from '../../data/survey_json.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

StylesManager.applyTheme('modern');

function onValueChanged(_, options) {
  console.log('New value: ' + options.value);
}

export default function SurveyPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //get user info
  const user = useSelector((state) => state.auth);

  //set all the user surveys in the store once we get the user info
  React.useEffect(() => {
    dispatch(fetchSurveys(user.id));
  }, [user]);

  const surveys = useSelector((state) => state.surveys.userSurveys);

  function onComplete(survey) {
    // console.log('Survey complete! Results: ' + JSON.stringify(survey.data));
    dispatch(submitSurvey(survey.data));
    navigate('/surveyCompleted');
  }

  const model = new Model(surveyJSON);
  return (
    <div className="container">
      <Survey
        model={model}
        onComplete={onComplete}
        onValueChanged={onValueChanged}
      />
    </div>
  );
}
