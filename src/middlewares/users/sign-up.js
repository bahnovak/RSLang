import { isSignInRender, setAlertMessage } from '../../redux/actions/creators/sign-in-data';
import postRequest from '../../helpers/fetch-utils/post-response';
import API_URLS from '../../constants/APIUrls';

export default function signUp(login, password) {
  return (dispatch) => {
    postRequest(API_URLS.USERS.createUser, JSON.stringify({ email: login, password }))
    .then((response) => {
      if (!response.ok) {
        dispatch(setAlertMessage(response.statusText));
      }
      return response.json();
    })
    .then((response) => {
      if (!response.error) {
        dispatch(isSignInRender(true));
        dispatch(setAlertMessage('you have been successfully registered, you can log in'));
        setTimeout(() => dispatch(setAlertMessage('')), 10000);
      } else {
        dispatch(setAlertMessage(response.error.errors[0].message));
        setTimeout(() => dispatch(setAlertMessage('')), 10000);
      }
    })
    .catch(() => {
      dispatch(setAlertMessage('server error, maybe this login is already taken?'));
      setTimeout(() => dispatch(setAlertMessage('')), 10000);
    });
  };
}
