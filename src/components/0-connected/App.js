// Import Packages
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// Import Components
import { Basic } from '../4-templates/Basic'

const App = (props) => {
  const { dispatch } = props
  const Index = () => <Basic title='Home' {...props} />
  const About = () => <Basic title='About' showOurFunButton {...props} />
  const Users = () => <Basic title='Users' {...props} />

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about/'>About</Link>
            </li>
            <li>
              <Link to='/users/'>Users</Link>
            </li>
          </ul>
        </nav>

        <Route path='/' exact component={Index} />
        <Route path='/about/' component={About} />
        <Route path='/users/' component={Users} />
      </div>
    </Router>
  )
}

const mapStateToProps = state => state
const ConnectedApp = connect(mapStateToProps)(App)

export default ConnectedApp
