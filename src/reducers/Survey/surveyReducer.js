import axios from 'axios';
const TOKEN = 'token';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Toast defaults
const defaultToast = {
  position: 'top-center',
  autoClose: 600,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

/**
 * ACTION TYPES
 */
const SET_SURVEYS = 'SET_SURVEYS';

/**
 * ACTION CREATORS
 */
const setSurveys = (surveys) => ({ type: SET_SURVEYS, surveys });

/**
 * THUNK CREATORS
 */
export const fetchSurveys = (userId) => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    const res = await axios.get(`api/survey/mySurveys/${userId}`, {
      headers: {
        authorization: token,
      },
    });
    return dispatch(setSurveys(res.data));
  }
};

export const submitSurvey = (survey) => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    const getUser = await axios.get('api/auth/me', {
      headers: {
        authorization: token,
      },
    });
    const res = await axios.post(
      `api/survey/mySurveys/${getUser.data.id}`,
      survey,
      {
        headers: {
          authorization: token,
        },
      }
    );
    const userSurveys = await axios.get(
      `api/survey/mySurveys/${getUser.data.id}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    return dispatch(setSurveys(userSurveys.data));
  }
};

/**
 * REDUCER
 */
const initialState = {
  userSurveys: [],
};

const surveyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SURVEYS:
      return { ...state, userSurveys: action.surveys };
    default:
      return state;
  }
};

export default surveyReducer;
