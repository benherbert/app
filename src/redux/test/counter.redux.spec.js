import expect from 'expect'

import { increment, decrement, counter as reducer } from '../counter.redux'

// TODO: no store, so state is not actuall updated, this only tests the function of the reducer...
describe('counter', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(0)
  })

  it('should handle INCREMENT and counter should increase by 1', () => {
    expect(reducer(0, increment)).toEqual(1)
  })

  it('should handle DECREMENT and counter should decrease by 1', () => {
    expect(reducer(1, decrement)).toEqual(0)
  })
})
