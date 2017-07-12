import {
  takeEvery,
  takeLatest
} from 'redux-saga/effects'
import * as commonTypes from '../app/modules/common/actions/commonTypes'
import * as commonSagas from './modules/common/commonSagas'

export default function* root() {
  yield []
}