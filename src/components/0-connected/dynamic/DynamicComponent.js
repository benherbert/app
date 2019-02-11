import React, { Component } from 'react'
import { DefaultAsyncLoading, DefaultAsyncLoaded } from './DefaultAsync'

class DynamicComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      AsyncComponent: () => <DefaultAsyncLoading />,
      loading: true
    }
    this.importComponent = this.props.importName || 'DefaultAsyncLoaded'
    this.importPath = this.props.importPath || './DefaultAsync'
    console.log(this.importPath)
  }

  async throttle (AsyncComponent) {
    setTimeout(function () {
      this.setState({ AsyncComponent, loading: false })
    }.bind(this), 1000)
  }

  async componentDidMount () {
    const path = `${this.importPath}${this.importComponent}`
    // const { [`${this.importComponent}`]: AsyncComponent } = await import('../../'+`${path}`)
    const { 'DefaultAsyncLoaded': AsyncComponent } = await import('./DefaultAsync') 
      
    this.throttle(AsyncComponent)
  }

  render () {
    const { AsyncComponent, loading } = this.state
    return <AsyncComponent children='Hello world' className='theme--fox' />
  }
}

export { DynamicComponent }
