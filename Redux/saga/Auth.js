import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../action/auth';
import * as api from '../../API/auth';

function* LoginSaga(action) {
  try {
   
    const response = yield call(
   
      api.login,
      action.name,
      action.password,
    );

    console.log('API response:', response.data);
    yield put(actions.fetchapisuccessful(response.data));
  } catch (error) {
    console.error('API Error:', error.response || error);
    const errorMessage = error.response?.data?.message || error.message;
    yield put(actions.fetchapifail(errorMessage));
  }
}

export function* watchLoginSaga() {
  yield takeLatest('FETCH_API_LOGIN', LoginSaga);
}

export default function* rootSaga() {
  yield watchLoginSaga();

}