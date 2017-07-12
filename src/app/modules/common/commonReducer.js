/* eslint import/prefer-default-export: 0 */

import {
  fromJS
} from 'immutable'
import * as commonTypes from './actions/commonTypes'

const initialState = fromJS({})

export const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state
  }
}