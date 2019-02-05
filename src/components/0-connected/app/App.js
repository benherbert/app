// Import Packages
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// Import Components
import { Nav } from '../../3-organisms/nav/Nav'
import { Basic } from '../../4-templates/basic/Basic'

const App = (props) => {
  console.log(props)

  const Index = () => <Basic title='Home' {...props} />
  const About = () => <Basic title='About' showOurFunButton {...props} />
  const Users = () => <Basic title='Users' {...props} />

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
