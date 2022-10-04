import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import signInLogo1 from './assets/dbt_brain.png';
import signInLogo2 from './assets/DBT-WiseMind.png';

const SignIn = () => {
  //grab the username if logged in
  const auth = useSelector((state) => state.auth);

  return auth.username ? (
    <Container fluid>
      <div className="pageNotFound">
        <h1 className="mb-5">
          Welcome to <span className="stella_title">Stella</span>, {auth.fName}.
        </h1>
        <img
          src={signInLogo2}
          className="my-5 main_photo2"
          loading="lazy"
          alt="Rational mind - wise mind - emotional mind - ven diagram"
        />
        <h2 className="header_adaptive my-5">
          We are your daily DBT Diary Tracker
        </h2>
        <p className="d-flex mx-auto">
          Click "Daily Survey" to complete your daily DBT diary.
        </p>
        <p className="d-flex mx-auto">
          Observe your changes over time by checking out "My Trends."
        </p>
      </div>
    </Container>
  ) : (
    <Container fluid>
      <div className="pageNotFound">
        <h1 className="mb-5">
          Welcome to <span className="stella_title">Stella.</span>
        </h1>
        <h2 className="header_adaptive">We are your daily DBT Diary Tracker</h2>
        <img
          src={signInLogo2}
          className="my-5 main_photo"
          loading="lazy"
          alt="Rational mind - wise mind - emotional mind - ven diagram"
        />{' '}
        <h3 className="my-5 header_adaptive">
          Please sign in or register to continue.
        </h3>
      </div>
    </Container>
  );
};

export default SignIn;
