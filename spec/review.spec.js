/* global expect, it, describe */
import Vue from 'vue'
import review from '../src/review.vue'

Vue.config.productionTip = false

describe('review', () => {
  // Inspect the raw component options
  it('has a data function', () => {
    expect(typeof review.data).toBe('function')
  })
  it('intially have dialog set to false', () => {
    const defaultData = review.data()
    expect(defaultData.dialog).toBe(false)
  })
  it('have props with reviews', () => {
    expect(typeof review.props).toBe('object')
    const prop = review.props
    expect(prop[0]).toBe('reviews')
  })
})
