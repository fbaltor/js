'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = solution(s);
        
        console.log(result);
    }
}


const solution = getSub1

function getSub1(string) {
    if (string.length == 1) return []

    let subs = new Array()
    for (let i = 0; i < string.length; i++) {
        let sub
        if (i == 0) {
            sub = string.substring(1)
        } else if (i == string.length - 1) {
            sub = string.substring(0, string.length - 1)
        } else {
            sub = string.substring(0, i) + string.substring(i + 1)
        }

        subs.push(sub)
    }

    return subs
}

