import {
  put,
  call
} from 'redux-saga/effects'
import * as actions from './actions/commonActions'

export function* countryLookupListSaga(action) {
  try {
    const {
      error,
      message,
      data
    } = yield call(
      helperApi.getCountryList,
      action.payload
    )
    if (error) {
      yield put(actions.countryLookupListFailure(message))
    } else {
      yield put(actions.countryLookupListSuccess(data))
    }
  } catch (error) {
    yield put(actions.countryLookupListFailure(error))
  }
}

export function* permissionLookupListSaga(action) {
  try {
    const {
      error,
      message,
      data
    } = yield call(
      helperApi.getPermissions,
      action.payload
    )
    if (error) {
      yield put(actions.permissionLookupListFailure(message))
    } else {
      yield put(actions.permissionLookupListSuccess(data))
    }
  } catch (error) {
    yield put(actions.permissionLookupListFailure(error))
  }
}

export function* getMetricsSaga(action) {
  try {
    const {
      error,
      message,
      data
    } = yield call(
      userApi.getMetrics,
      action.payload
    )
    if (error) {
      yield put(actions.getMetricsFailure(message))
    } else {
      const status = action.status !== undefined ? action.status : 'total'
      yield put(actions.getMetricsSuccess(data, status))
    }
  } catch (error) {
    yield put(actions.getMetricsFailure(error))
  }
}