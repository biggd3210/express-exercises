const express = require('express');

// helper imports
const { validateNums, findMean, findMedian, findMode, createResult } = require('./helpers');
const ExpressError = require('./expressError');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/mean', (request, response) => {
    if (!request.query.nums) {
        throw new ExpressError("request must include query string of comma-separated values. Ex: /[operation]?nums=1,2,3", 400)
    }
    const nums = validateNums(request.query.nums.split(','));
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }
    const result = findMean(nums);
    const msg = createResult(result, 'mean');
    response.status(200).send(msg);
});

app.get('/median', (request, response) => {
    if (!request.query.nums) {
        throw new ExpressError("request must include query string of comma-separated values. Ex: /[operation]?nums=1,2,3", 400)
    }
    const nums = validateNums(request.query.nums.split(','));
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }
    const result = findMedian(nums);
    const msg = createResult(result, 'median')
    response.status(201).send(msg);
});

app.get('/mode', (request, response, next) => {
    if (!request.query.nums) {
        throw new ExpressError("request must include query string of comma-separated values. Ex: /[operation]?nums=1,2,3", 400)
    }
    const nums = validateNums(request.query.nums.split(','));
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }
    const result = findMode(nums);
    const msg = createResult(result, 'mode');
    response.status(200).send(msg);
})

app.use(function (request, response, next) {
    const err = new ExpressError("Not Found", 404);
    return next(err);
});

app.use(function (err, request, response, next) {
    response.status(err.status || 500);

    return response.json({
        error: err,
        message: err.message
    });
});

app.listen(3000, function() {
    console.log('App on port 3000');
})