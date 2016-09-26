import React from 'react'
import { connect } from 'react-redux'
import { handleAboutClick } from './about.actions'

class About extends React.Component {
  handleClick () {
    this.props.dispatch(handleAboutClick())
  }
  render () {
    return (
      <div>
        <h1>About {this.props.meaningOfLifeAndAllTheUniverse}</h1>
        <button onClick={this.handleClick.bind(this)}>Click here</button>
      </div>
    )
  }
}

About.propTypes = {
  meaningOfLifeAndAllTheUniverse: React.PropTypes.string.isRequired,
  dispatch: React.PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  const { about } = state
  return {
    meaningOfLifeAndAllTheUniverse: about.meaningOfLifeAndAllTheUniverse
  }
}

export default connect(mapStateToProps)(About)
