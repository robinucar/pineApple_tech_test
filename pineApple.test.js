const pineApple = require('./pineApple')
describe('pineApple', () => {
    it('returns numbers from 1 to 100', () => {
        expect(pineApple(1,100).length).toEqual(100)
    })

    it('returns "Pine" instead of the number if number is multiple of 3', () => {
        expect(pineApple(1,100)).toContain('Pine')
    })

    it('reurns Apple instead of number if number is multiple of 5', () => {
        expect(pineApple(1,100)).toContain('Apple')
    })

    it('returns PineApple instead of number if number is multiple of both 3 and 5',() => {
        expect(pineApple(1,100)).toContain('PineApple')
    })
})