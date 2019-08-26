
const expect = require('chai').expect
const calculator = require('../calc.js')

describe('stringCalculator', () => {
    it('Should return Zero for an empty input', () => {
        let result = calculator('')
        expect(result).to.equal(0)
    })

    it('Should return 1 from 1 ', () => {
        let result = calculator('1')
        expect(result).to.equal(1)
    })

    it('Should return 5 from 3,2', () => {
        let result = calculator('3,2')
        expect(result).to.equal(5)
    })

    it('Should return 12 from 8 and 4 separated by a new line', () => {
        let result = calculator('8\n4 ')
        expect(result).to.equal(12)
    })

    it('Should return 15 from 8 and 4 separated by a new line and comma', () => {
        let result = calculator('8\n4,3')
        expect(result).to.equal(15)
    })

    it('Should throw an exception with 10,-5', () => {
        let result = ()=>{calculator('10,-5')}
        expect(result).to.throw()
    })

    it('Should return 20 from 10,5,5,1001', () => {
        let result = calculator('10,5,5,1001')
        expect(result).to.equal(20)
    })

    it('Should return 40 from 10,5,5,1001', () => {
        let result = calculator(' 10  , 10 ,10 , 10000   ,  10    ,,,  ')
        expect(result).to.equal(40)
    })
})

 
