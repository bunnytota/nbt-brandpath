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

    if (response.status === 200) {
      if (!response.data || typeof response.data !== 'object') {
        yield put(
          actions.loginfail({
            error: [
              'Unexpected error occurred',
              'Response format is invalid or empty.',
            ],
          }),
        );
      } else if (
        response.data.result.errorText) {
        yield put(
          actions.loginfail({
            error: [
              response.data.result.errorText,
              response.data.result.errorDetail,
            ],
          }),
        );
      } else {
        yield put(actions.loginsuccessful(response.data));
        }
      }
     else {
      
      console.log('api error22: ' , response.status)
      yield put(
        
        actions.loginfail({
         
          error: `Unexpected response status: ${response.status}`,
        }),
      );
    }
  } catch (error) {
   console.log('api error:' ,error)
    yield put(actions.loginfail({error:  [
      'An error occurred', // Error title
      error.message || 'Unknown error' // Error detail message
    ]}));
   
  }
}

export function* watchLoginSaga() {
  yield takeLatest('FETCH_API_LOGIN', LoginSaga);
}



export default function* rootSaga() {
  yield watchLoginSaga();

}