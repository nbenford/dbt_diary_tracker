import React, { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GitHubIcon from '@mui/icons-material/GitHub';
//COMPONENTS
import {
  PageNotFound,
  Navigation,
  Signup,
  SurveyPage,
  SignIn,
  UserTrends,
} from './index';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

//Survey stuff
// import 'bootstrap/dist/css/bootstrap.css';
import * as Survey from 'survey-core';
import $ from 'jquery';

import 'jquery-ui/themes/base/all.css';
import 'nouislider/distribute/nouislider.css';
import 'select2/dist/css/select2.css';
import 'bootstrap-slider/dist/css/bootstrap-slider.css';
import 'jquery-bar-rating/dist/themes/css-stars.css';
import 'jquery-bar-rating/dist/themes/fontawesome-stars.css';
import 'pretty-checkbox/dist/pretty-checkbox.css';

import 'select2/dist/js/select2.js';
import 'jquery-bar-rating';
import * as widgets from 'surveyjs-widgets';

window['$'] = window['jQuery'] = $;
require('jquery-ui/ui/widgets/datepicker.js');

widgets.prettycheckbox(Survey);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

function App() {
  const dispatch = useDispatch();

  return (
    <div className="app">
      <Navigation />
      <ToastContainer />
      <Routes>
        {/* <Route index element={<SurveyPage />} /> */}
        <Route path={'/'} element={<SignIn />} />
        <Route path={'/surveyPage'} element={<SurveyPage />} />
        <Route path={'/signup'} element={<Signup />} />
        <Route path={'/userTrends'} element={<UserTrends />} />
        <Route path={'*'} element={<PageNotFound />} />
      </Routes>
      <footer className="my-5 pt-5 text-muted text-center text-small">
        <div className="githubIcon">
          <a href={'https://github.com/nbenford'}>
            <GitHubIcon />
          </a>
        </div>
        <div className="copyright">
          <p className="mb-1">&copy; 2022 DBT Tracker App Ltd.</p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#">Privacy</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Terms</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        <div></div>
      </footer>
    </div>
  );
}

export default App;
