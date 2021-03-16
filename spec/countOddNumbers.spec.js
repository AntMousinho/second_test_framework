const countOddNumbers = require('./../src/countOddNumbers.js');

describe('Odd number count in', function() {
    it('[1, 2, 3, 4, 5, 6] is 3', function() {
        expect(countOddNumbers([1, 2, 3, 4, 5, 6])).toEqual(3);
    })

    it('[0, 1, 2] is 1', function() {
        expect(countOddNumbers([0, 1, 2])).toEqual(1);
    })

    it('[2, 4, 6] is 0', function() {
        expect(countOddNumbers([2, 4, 6])).toEqual(0);
    })
})
