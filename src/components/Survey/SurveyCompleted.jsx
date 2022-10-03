import React from 'react';
import { useSelector } from 'react-redux';

const SurveyCompleted = () => {
  //grab the username if logged in
  const auth = useSelector((state) => state.auth);

  return (
    <div className="pageNotFound">
      <h1 className="mb-5">
        Thanks for completing your daily{' '}
        <span className="stella_title">Stella</span> DBT entry, {auth.fName}.
      </h1>
      <h3 className="my-5">
        After at least two surveys are completed, check your progress under "My
        Trends".
      </h3>
    </div>
  );
};

export default SurveyCompleted;
