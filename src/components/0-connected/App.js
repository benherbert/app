// Import Packages
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// Import Components
import { Nav } from '../3-organisms/Nav'
import { ConnectedBasic } from '../4-templates/Basic'

const App = (props) => {
  console.log(props)

  const Index = () => <ConnectedBasic title='Home' {...props} />
  const About = () => <ConnectedBasic title='About' showOurFunButton {...props} />
  const Users = () => <ConnectedBasic title='Users' {...props} />

  return (
    <Router>
      <div>
        <Nav />
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
