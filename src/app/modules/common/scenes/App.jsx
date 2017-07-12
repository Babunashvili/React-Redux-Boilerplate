/* eslint jsx-a11y/href-no-hash: 0 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { withTranslate } from 'react-redux-multilingual'
import * as commonActions from '../../common/actions/commonActions'
import '../../../resources/assets/scss/main.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.any,
}

function mapStateToProps(state) {
  return {}
}

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withTranslate(App)
)
