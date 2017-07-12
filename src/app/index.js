/* eslint "import/imports-first": 0 */
/* eslint no-undef: 0 */
/* eslint import/extensions: 0 */
/* eslint react/jsx-filename-extension:0 */
import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Router, browserHistory } from 'react-router'
import reducers from './rootReducer'
import routes from './routes'
import rootSaga from './rootSagas'
import translations from './translations'
import { IntlProvider } from 'react-redux-multilingual'
// for bundling your styles
// import './bundle.scss'

const devtools = window.devToolsExtension || (() => noop => noop)
const sagaMiddleware = createSagaMiddleware()
const middlewares = [
  sagaMiddleware,
]
const enhancers = [
  applyMiddleware(...middlewares),
  devtools(),
]
const store = createStore(
  reducers,
  compose(...enhancers)
)

sagaMiddleware.run(rootSaga)

const locale = store.getState().Intl.locale

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider translations={translations}>
      <Router history={browserHistory} routes={routes(locale)} />
    </IntlProvider>
  </Provider>
  , document.querySelector('.react-root'))
