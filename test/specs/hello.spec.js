import {expect} from 'chai'
import {a} from '@/index.min.js'
describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    expect(typeof a).to.be.equal('string')
  })
})
