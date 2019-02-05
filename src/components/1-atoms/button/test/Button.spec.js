import React from 'react'
import { Button } from '../Button'
import renderer from 'react-test-renderer'

test('object assignment', () => {
  const data = { one: 1 }
  data['two'] = 2
  expect(data).toEqual({ one: 1, two: 2 })
})

test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

it('renders correctly', () => {
  const tree = renderer.create(<Button>Facebook</Button>).toJSON()
  expect(tree).toMatchSnapshot()
})
