import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { increment } from '../../store/actions/increment.action'

import { Button } from '../button/Button'

const Index = () => {
  return (
    <>
      <h2>Home</h2>
    </>
  )
}

const About = () => <h2>About</h2>
const Users = () => <h2>Users</h2>

const App = ({ dispatch }) => {
  const buttonAction = () => {
    return dispatch(increment)
  }

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
            <li>
              <Button handleClick={buttonAction}>Increment it!</Button>
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
