"use strict";

function commonWords(first, second) {
    var str1 = first.split(",");
    var str2 = second.split(",");
    var res = [];
    for (var i = 0; i < str1.length; i++) {
        for (var j = 0; j < str2.length; j++) {
            if (str1[i] == str2[j]) {
               res.push(str1[i]);
            }
        }
    }
    return res.sort().join(",");
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(commonWords("hello,world", "hello,earth"), "hello", "Hello");
    assert.equal(commonWords("one,two,three", "four,five,six"), "", "Too different");
    assert.equal(commonWords("one,two,three", "four,five,one,two,six,three"), "one,three,two", "1 2 3");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
