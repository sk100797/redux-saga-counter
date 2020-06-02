import { takeEvery, put, delay, all, select } from "redux-saga/effects";

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

export const getCountValue = (state) => state;

export function* incrementIfOdd() {
  const countValue = yield select(getCountValue);
  if (countValue % 2 !== 0) {
    yield put({ type: "INCREMENT" });
  }
}

export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export function* watchIncrementIfOdd() {
  yield takeEvery("INCREMENT_IF_ODD", incrementIfOdd);
}

export default function* rootSaga() {
  yield all([watchIncrementAsync(), watchIncrementIfOdd()]);
}
