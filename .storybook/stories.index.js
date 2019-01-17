import React from 'react'
import { storiesOf, configure } from '@storybook/react'

import WelcomePage from './WelcomePage'

import '../src/assets/styles/scss/app.scss'

const req = require.context('../src', true, /.stories.js$/)

const loadStories = () => req.keys().forEach((filename) => req(filename))

storiesOf('Welcome', module)
  .add('Welcome', () => (
    <WelcomePage />
  ))

configure(loadStories, module)
