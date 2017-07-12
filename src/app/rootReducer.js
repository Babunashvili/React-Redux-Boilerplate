import {
  combineReducers
} from 'redux'
import {
  IntlReducer as Intl
} from 'react-redux-multilingual'
import {
  commonReducer
} from './modules/common/commonReducer'

const rootReducer = combineReducers({
  common: commonReducer,
  Intl,
})

export default function root(state, action) {
  return rootReducer(state, action)
}