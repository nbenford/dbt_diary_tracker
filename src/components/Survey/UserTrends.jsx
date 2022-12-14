import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSurveys } from '../../reducers/Survey/surveyReducer';
import { LineGraphs } from './LineGraphs';
import { LineGraphAll } from './LineGraphAll';

export default function UserTrends() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  //set all the user surveys in the store once we get the user info
  React.useEffect(() => {
    dispatch(fetchSurveys(user.id));
  }, [user]);

  const graphNames = [
    'Suicidal Ideation',
    'Non-Suicidal Self-injury',
    'Pain',
    'Sadness',
    'Shame',
    'Anger',
    'Fear',
    'Joy',
  ];

  const graphDataNames = [
    'siDesire',
    'nssiDesire',
    'painDesire',
    'sadnessDesire',
    'shameDesire',
    'angerDesire',
    'fearDesire',
    'joyToday',
  ];

  //fetch the user's surveys
  const surveys = useSelector((state) => state.surveys.userSurveys);
  return (
    <div>
      <h1 className="d-flex mx-auto justify-content-center">
        {user.fName}'s DBT Diary Trends
      </h1>
      <h3 className="d-flex mx-auto justify-content-center">
        The dashed line represents the trend.
      </h3>
      {surveys.length > 1 ? (
        graphNames.map((graphName, index) => (
          <LineGraphs
            key={index}
            surveys={surveys}
            graphName={graphName}
            graphDataName={graphDataNames[index]}
          />
        ))
      ) : (
        <div className="d-flex flex-column mx-auto align-items-center justify-content-center">
          <hr />
          <h2>You must have taken at least two surveys to see trends.</h2>
          <br />
          <p>Please take a survey.</p>
        </div>
      )}
      {/* <LineGraphAll surveys={surveys} /> */}
    </div>
  );
}
