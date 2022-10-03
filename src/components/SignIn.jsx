import React from 'react';
import { useSelector } from 'react-redux';
import signInLogo1 from './assets/dbt_brain.png';
import signInLogo2 from './assets/DBT-WiseMind.png';

const SignIn = () => {
  //grab the username if logged in
  const auth = useSelector((state) => state.auth);

  return auth.username ? (
    <div className="pageNotFound">
      <h1 className="mb-5">
        Welcome to <span className="stella_title">Stella</span>, {auth.fName}.
      </h1>
      <img src={signInLogo2} className="my-5" />
      <h2 className="my-5">We are your daily DBT Diary Tracker</h2>
      <p>Click "Daily Survey" to complete your daily DBT diary.</p>
      <p>Observe your changes over time by checking out "My Trends."</p>
    </div>
  ) : (
    <div className="pageNotFound">
      <h1 className="mb-5">
        Welcome to <span className="stella_title">Stella.</span>
      </h1>
      <h2>We are your daily DBT Diary Tracker</h2>
      <img src={signInLogo2} className="my-5" />
      <h3 className="my-5">Please sign in or register to continue.</h3>
    </div>
  );
};

export default SignIn;
