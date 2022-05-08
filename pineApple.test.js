const pineApple = require('./pineApple')
describe('pineApple', () => {
    it('returns numbers from 1 to 100', () => {
        expect(pineApple().length).toEqual(100)
    })
})