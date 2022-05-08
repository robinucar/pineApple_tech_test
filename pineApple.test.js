const pineApple = require('./pineApple')
describe('pineApple', () => {
    it('returns numbers from 1 to 100', () => {
        expect(pineApple(1,100).length).toEqual(100)
    })
})