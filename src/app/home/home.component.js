import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from './home.actions'
import 'style/main.scss'

class Home extends Component {
  componentDidMount () {
    this.props.dispatch(actions.loadApp())
  }
  render () {
    const { diaverum, dot, appIsLoading } = this.props
    return (
      <div className={`home ${appIsLoading ? '' : 'loaded'}`}>
        <p>{appIsLoading ? dot : diaverum}</p>
      </div>
    )
  }
}

Home.propTypes = {
  diaverum: React.PropTypes.string.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  dot: React.PropTypes.string,
  appIsLoading: React.PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  const { home } = state
  return {
    diaverum: home.diaverum,
    dot: home.dot,
    appIsLoading: home.appIsLoading
  }
}

export default connect(mapStateToProps)(Home)
