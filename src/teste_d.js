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

    console.log("[FINAL MATRIX CONST]", finalMatrix)
    console.log("[FINAL MATRIX LENGTH]", finalMatrix.length)
    console.log("[NUMBER LIST]", numberList)
    console.log("[NUMBER LIST LENGTH]", numberList.length)

    /**
     * [TOTAL OF ELEMENTS] / [NUMBER OF ROWS AND COLUMNS] = [NUMBER OF ELEMENTS PER LINE]
     * 
     * [10, 90, 100, 40]
     *  0       2
     *  
     * [10, 165, 77, 90, 2, 3, 90, 88, 10]
     *  0            3          6
     * 
     * [123, 44, 55, 90, 8, 7, 33, 55, 99, 99, 100, 12, 111, 34, 21, 12]
     *   0               4              8                12
     *  
     * [90, 65, 44, 33, 4, 11, 33, 55, 66, 7, 22, 12, 34, 56, 67, 12, 88, 77, 345, 345, 890, 987, 87, 11, 1, 11, 34, 56, 32, 45]
     *  0                   5                     10                      15                           20                     
    */

    // POINT THE [[[[ LINES ]]]] OF THE MATRIX
    for(let  i = 0; i < finalMatrix.length; i++) {
        let matrixLineWithElements = []
        // for(let j = 0; j < (numberList.length/rowsAndColumns); j++) {
        //     console.log(j)
        //     matrixLineWithElements[j] = numberList[j]
        // }
        for(let k = 0; k < (numberList.length/rowsAndColumns); k++) {
            console.log("           [K+I*FINALMATRIX.LENGTH] ", k+i*finalMatrix.length)
            matrixLineWithElements[k] = numberList[k+i*finalMatrix.length]
        }
        // console.log("[MATRIX LINE WITH ELEMENTS]", matrixLineWithElements)
        finalMatrix[i] = matrixLineWithElements
        // console.log(`[MATRIX ${i}]`, finalMatrix[i])
    }

    console.log("[YOU ARE OUSTIDE FOR LOOP]: ")
    console.log("[FINAL MATRIX]", finalMatrix)

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