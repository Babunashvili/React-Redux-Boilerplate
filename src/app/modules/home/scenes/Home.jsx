import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import './Home.scss'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>Home Page</div>
    )
  }
}

Home.propTypes = {}

function mapStateToProps(state, ownProps) {
  return {
    ownProps,
  }
}

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
