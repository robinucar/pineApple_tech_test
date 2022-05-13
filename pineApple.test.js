const pineApple = require('./pineApple')
describe('pineApple', () => {
    
    it('returns numbers from 1 to 100', () => {
        expect(pineApple(1,100).length).toEqual(100)
    })

    it('returns "Pine" instead of the number if number is multiple of 3', () => {
        expect(pineApple(3,4)).toEqual(['Pine',4])
    })

    it('reurns Apple instead of number if number is multiple of 5', () => {
        expect(pineApple(5,7)).toEqual(['Apple','Pine',7])
    })

    it('returns PineApple instead of number if number is multiple of both 3 and 5',() => {
        expect(pineApple(15,15)).toEqual(['PineApple'])
        expect(pineApple(1,100)).toEqual(expect.arrayContaining([1,2,'Pine','Apple', 'PineApple', 98]))
        expect(pineApple(1,100)).not.toEqual(expect.arrayContaining([3,5,15,30,90]))
    })
})