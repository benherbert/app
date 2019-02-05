import React from 'react'
import renderer from 'react-test-renderer'
import { Link, StaticRouter } from 'react-router-dom'

import { Nav } from '../Nav'

const context = {
  test: 'test'
}

it('renders correctly', () => {
  const component = renderer.create(
    <StaticRouter location='someLocation' context={context}>
      <Nav />
    </StaticRouter>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
