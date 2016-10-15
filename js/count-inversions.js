"use strict";


function countInversion(sequence){
    var count = 0;
    var temp;
    for (var passnum = sequence.length; passnum > 0; passnum--) {
        for (var i = 1; i < passnum; i++) {
            if (sequence[i] < sequence[i - 1]) {
                temp = sequence[i - 1];
                sequence[i - 1] = sequence[i];
                sequence[i] = temp;
                count++;
            }
        }
    }
    return count;
}



var assert = require('assert');

if (!global.is_checking) {
    assert.equal(countInversion([1, 2, 5, 3, 4, 7, 6]), 3, "Example");
    assert.equal(countInversion([0, 1, 2, 3]), 0, "Sorted");
    assert.equal(countInversion([99, -99]), 1, "Two numbers");
    assert.equal(countInversion([5, 3, 2, 1, 0]), 10, "Reversed");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}