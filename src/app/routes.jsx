import React from 'react'
import { Route, IndexRoute } from 'react-router'
import translations from './translations'

import App from './modules/common/scenes/App'
import Home from './modules/home/scenes/Home'

export default (lang = 'en') => {
  const trans = translations[lang].messages
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/test" component={() => <div>Test Route</div>} />
      <Route title="404 Page Not Found" path="*" component={() => <div>404 Route</div>} />
    </Route>
  )
}
