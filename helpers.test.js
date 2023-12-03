const { findMean, findMedian, findMode } = require('./helpers')

describe('findMean function testing', function() {
    test('should find mean of nums array', function() {
        let nums = [1,2,3,4,5];
        expect(findMean(nums)).toEqual(3);
    })
})

describe('findMedian function testing', function() {
    test('should test median function with an even set of numbers', function() {
        let nums = [1,2,3,4,5,6];
        expect(findMedian(nums)).toEqual(3.5);
    })
    test('should test median function with an odd set of numbers', function() {
        let nums = [1,2,3,4,5];
        expect(findMedian(nums)).toEqual(3);
    })
})

describe('findMode function testing', function() {
    test('should test mode when all number frequencies are the same', function() {
        let nums = [1,2,3,4,5];
        expect(findMode(nums)).toEqual(1);
    })
    test('should test mode when one number has greater frequency', function() {
        let nums = [1,2,3,4,4,5];
        expect(findMode(nums)).toEqual(4)
    })
})