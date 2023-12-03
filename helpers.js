// helpers for calculator.js

function createResult(result, operation) {
    let msg = {
        "operation" : operation,
        "result" : result
    }
    return msg;
}

function validateNums(queryInput) {
    let result = [];

    for (let i = 0; i < queryInput.length; i++) {
        let input = Number(queryInput[i]);

        if (Number.isNaN(input)) {
            return new Error(
                `Value '${input[i]}' at index ${i} is not a valid number.`
            );
        }
        result.push(input);
    }
    return result;
}

function findMean(nums) {
    if (nums.length === 0) return 0;
    return nums.reduce(function(acc, curr) {
        return acc + curr;
    }) / nums.length;
}

function counter(arr) {
    return arr.reduce(function(acc, next) {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
    }, {});
}

function findMode(nums) {
    let freqCounter = counter(nums);

    let count = 0;
    let mostFrequent;

    for (let key in freqCounter) {
        if (freqCounter[key] > count) {
            mostFrequent = key;
            count = freqCounter[key];
        }
    }
    return +mostFrequent;
}

function findMedian(nums) {
    
    nums.sort((a, b) => a - b);

    let middleIndex = Math.floor(nums.length / 2);
    let median;

    if (nums.length % 2 === 0) {
        median = (nums[middleIndex] + nums[middleIndex - 1]) /2
    } else {
        median = nums[middleIndex];
    }
    return median
}

module.exports= {
    validateNums: validateNums,
    findMean: findMean,
    findMedian: findMedian,
    findMode: findMode,
    createResult: createResult
}