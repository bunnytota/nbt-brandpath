import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../action/myaction';
import axios from 'axios';
import base64 from 'react-native-base64';

function* Mysaga(action) {
  try {
    const staticUsername = "mw_hub";
    const staticPassword = "y0mh4Dqe0eMk";
    const authToken = 'Basic ' + base64.encode(`${staticUsername}:${staticPassword}`);

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authToken
      }
    };

    const requestBody = {
      username: action.name,   //'ayesha.zahid'
      pin: action.password, //action.payload.password
      azureUserName: "ayesha.zahid" // Fixed string value
    };

    console.log('Sending request with:', {
      url: 'https://kv3hbb5j-44392.uks1.devtunnels.ms/mobile/LoginPin',
      body: requestBody,
      headers: config.headers
    });

    const response = yield call(
      axios.post,
      'https://kv3hbb5j-44392.uks1.devtunnels.ms/mobile/LoginPin',
      requestBody,
      config
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
  yield takeLatest('FETCH_API_LOGIN', Mysaga);
}

export default function* rootSaga() {
  yield watchLoginSaga();
}