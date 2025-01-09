import { call, put, takeLatest, fork } from 'redux-saga/effects';
import * as actions from '../action/auth';
// import * as actions from '../action/components'
import * as api from '../../API/auth';
import { navigate } from '../../utils/rootNavigation';

function* LoginSaga(payload) {
  try {
    yield put(actions.setloading(true));
    const response = yield call(api.login, payload.name, payload.password);

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
      } else if (response.data.result.errorText) {
        yield put(
          actions.loginfail({
            error: [
              response.data.result.errorText,
              response.data.result.errorDetail,
              response.data.result.errorText.includes('Reset PIN')
                ? navigate('Change')
                : null,
            ],
          }),
        );
      } else {
        yield put(
          actions.loginsuccessful(response.data, [
            'Login Successful',
            'you get access',
          ]),
        );
      }
    } else {
      yield put(
        actions.loginfail({
          error: [
            `Unexpected response status: ${response.status}`,
            'please try again',
          ],
        }),
      );
    }
    yield put(actions.setloading(false));
  } catch (error) {
    yield put(actions.setloading(false));

    yield put(
      actions.loginfail({
        error: ['An error occurred', error.message || 'Unknown error'],
      }),
    );
  }
}

function* ChangepinSaga(payload) {
  yield put(actions.setloading(true));
  try {
    const response = yield call(
      api.changepin,
      payload.name,
      payload.oldpassword,
      payload.newpassword,
    );

    console.log('Response data:', response.data);
    console.log('Response status:', response.status);

    if (response.status === 200) {
      if (!response.data || typeof response.data !== 'object') {
        yield put(
          actions.changepinfails({
            error: [
              'Unexpected error occurred',
              'Response format is invalid or empty.',
            ],
          }),
        );
      } else if (response.data.result.errorText) {
        console.log('error :', response.data.errorText);
        yield put(
          actions.changepinfails({
            error: [
              response.data.result.errorText,
              response.data.result.errorDetail,
            ],
          }),
        );
      } else {
        yield put(
          actions.changepinsuccessful(
            response.data,
            ['Your pin is successfully changed', 'now login with new pin'],
            navigate('Login'),
          ),
        );
      }
    } else {
      yield put(
        actions.changepinfails({
          error: `Unexpected response status: ${response.status}`,
        }),
      );
    }
    yield put(actions.setloading(false));
  } catch (error) {
    yield put(actions.setloading(false));

    yield put(
      actions.changepinfails({
        error: ['An error occurred', error.message || 'Unknown error'],
      }),
    );
  }
}

function* LogoutSaga(payload) {
  yield put(actions.setloading(true));
  try {
    const response = yield call(api.logout, payload.username);

    if (response.status === 200) {
      yield put(
        actions.logoutsuccessful([
          'logged out Successful',
          'You are logged out',
        ]),
      );
    } else {
      yield put(
        actions.logoutfails({
          error: `Unexpected response status: ${response.status}`,
        }),
      );
    }
    yield put(actions.setloading(false));
  } catch (error) {
    yield put(actions.setloading(false));

    yield put(
      actions.logoutfails({
        error: ['An error occurred', error.message || 'Unknown error'],
      }),
    );
  }
}


export function* watchAuthSaga() {
  yield takeLatest('LOGIN_REQUEST', LoginSaga);
  yield takeLatest('CHANGE_PIN_REQUEST', ChangepinSaga);
  yield takeLatest('LOG_OUT_REQUEST', LogoutSaga);

}

export default function* authrootSaga() {
  yield watchAuthSaga();
}
