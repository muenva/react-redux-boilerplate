import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <header>
          <ul role="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </header>

        <section className='content'>
          {this.props.children}
        </section>
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.any.required
}

export default App
