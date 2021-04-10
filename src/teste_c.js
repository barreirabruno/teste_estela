'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    console.log("[ENTER A NUMBER]")
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++]
}

function calculateMatrixAbsoluteValue(numberList, rowsXColumns) {
    formMatrix(numberList, rowsXColumns)
    return numberList
}

function formMatrix(numberList, rowsXColumns) {
    console.log("[NUMBERLIST TO FORM A MATRIX]: ", numberList)
    console.log("[ROWS AND COLUMNS VALUES]: ", rowsXColumns)
    const finalMatrix = Array(rowsXColumns)
    const newMatrixLine = Array(rowsXColumns/2)


    for(let h = 0; h < numberList.length; h += (numberList.length/2)) {
        console.log("[H INDEX] ", h)
        let i = 0
        let j = 1
        if(numberList.length%2 !== 0) {
            console.log("[KEEP CALM AND CREATE EVEN LENGTH MATRIXES]")
            return null
        }
        while(j <= ((numberList.length/2) - 1)) {
            if(j === 1) {
                console.log(numberList[h])
                newMatrixLine[h] = (numberList[h])
            }
            console.log("[I TO GUIDE THE FINAL MATRIX INDEX]: ", i + j)
            console.log("[H IS THE SALT COUNT]: ", h)
            console.log(numberList[h  + j])
            newMatrixLine[h] = (numberList[h + j])
            j++
        }
        finalMatrix[h] = newMatrixLine
    }

    console.log('[MATRIX LINE] ', newMatrixLine)
    console.log('[FINAL MATRIX] ', finalMatrix)
}

function main() {
    const ws = fs.createWriteStream("./write-here.txt");

    const rowsXColumns = parseInt(readLine().trim(), 10);

    let numberList = Array(rowsXColumns);

    for (let i = 0; i < rowsXColumns; i++) {
        numberList[i] = parseInt(readLine(), 10)
    }

    const result = calculateMatrixAbsoluteValue(numberList, rowsXColumns);

    ws.write(result + '\n');

    ws.end();
}
