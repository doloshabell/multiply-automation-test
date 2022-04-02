const { it } = require('@jest/globals');
const multiply = require('./multiply');
describe('multiply function', () => {
    it('should return a*b parameter', () => {
        expect(multiply(5,5)).toBe(25);
        expect(multiply(4,4)).toBe(16);
        expect(multiply(2,2)).toBe(4);
    });

    it('should return 0 by given non number values', () => {
        expect(multiply('1','2')).toBe(0);
    })
})