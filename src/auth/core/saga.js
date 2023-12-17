import { call, put, select, takeEvery } from 'redux-saga/effects';
import { PROD_API_URL } from '../../lib/constants';
import {
  loginSagaFulfilled,
  loginSagaDispatched,
  loginSagaRejected,
  logoutSagaDispatched,
  logoutSagaFulfilled,
  logoutSagaRejected,
} from './slice';

function* loginSaga(action) {
  try {
    const response = yield call(() => {
      return fetch(`${PROD_API_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(action.payload),
      });
    });

    const data = yield call(() => response.json());
    yield put(loginSagaFulfilled(data));
  } catch (error) {
    yield put(loginSagaRejected(error));
  }
}

function* logoutSaga(action) {
  try {
    let token = action.payload?.token;
    if (!token) {
      const getToken = yield select((state) => state.auth.token);
      token = getToken?.id;
    }
    yield call(() => {
      return fetch(`${PROD_API_URL}/users/logout?access_token=${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
    });

    yield put(logoutSagaFulfilled());
  } catch (error) {
    yield put(logoutSagaRejected(error));
  }
}

export function* authSaga() {
  yield takeEvery(loginSagaDispatched.type, loginSaga);
  yield takeEvery(logoutSagaDispatched.type, logoutSaga);
}
