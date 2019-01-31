import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Index = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Users = () => <h2>Users</h2>

const App = () => (
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

const mapStateToProps = state => ({})
const ConnectedApp = connect(
  mapStateToProps,
  null
)(App)

export default ConnectedApp
