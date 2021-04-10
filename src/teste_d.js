'use strict'

const fs = require('fs')

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin
})

process.stdin.on('end', function() {
    inputString = inputString.split('\n')

    main()
})

function readLine() {
    return inputString[currentLine++]
}

function solution(rowsAndColumns, numberList) {

    const finalMatrix = Array(rowsAndColumns)

    for(let  i = 0; i < finalMatrix.length; i++) {
        let matrixLineWithElements = []
        for(let k = 0; k < (numberList.length/rowsAndColumns); k++) {
            matrixLineWithElements[k] = numberList[k+i*finalMatrix.length]
        }
        finalMatrix[i] = matrixLineWithElements
    }

    return finalMatrix
}

function main() {
    const ws = fs.createWriteStream("./write-here.txt")

    const rowsAndColumns = parseInt(readLine().trim(), 10)

    const numberOfElements = rowsAndColumns*rowsAndColumns

    let numberList = Array(numberOfElements)

    for(let i = 0; i < numberOfElements; i++) {
        numberList[i] = parseInt(readLine(), 10)
    }

    const result = solution(rowsAndColumns, numberList);

    ws.write(result + '\n')

    ws.end()
}