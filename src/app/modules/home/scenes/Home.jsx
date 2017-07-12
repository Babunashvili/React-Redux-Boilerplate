import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import reactJsLogo from '../../../resources/assets/images/react.svg'
import './Home.scss'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="home">
        <div className="home__content">
          <a href="#" className="home__logo-link">
            <img className="home__logo-img" src={reactJsLogo} alt="React Logo" />
          </a>
          <h4 className="home__heading">React-Redux Boilerplate</h4>
          <nav className="home__nav">
            <ul className="home__nav-list">
              <li className="home__nav-list-item">
                <a href="https://github.com/david-babunashvili/React-Redux-Boilerplate#readme" target="_blank" rel="noopener noreferrer" className="home__nav-list-link">DOCUMENTATION</a>
              </li>
              <li className="home__nav-list-item">
                <a href="https://github.com/david-babunashvili/React-Redux-Boilerplate" target="_blank" rel="noopener noreferrer" className="home__nav-list-link">GITHUB</a>
              </li>
              <li className="home__nav-list-item">
                <a href="https://github.com/david-babunashvili/React-Redux-Boilerplate/issues" target="_blank" rel="noopener noreferrer" className="home__nav-list-link">BUGS</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
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
