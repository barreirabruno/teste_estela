function main() {

// Teremos uma matriz 2x2
   const numeroLinhasEColunas = 2
// Elementos com os quais a matriz será formada
   const listaDeElementos = [8, 9, 10, 11]
//   const listaDeElementos = [8, 9, 10, 11, 8, 9, 1, 2, 3]

    switch(numeroLinhasEColunas) {
        case 2: 
            formaLinhaDeDuasColunas(listaDeElementos)
            break;
        case 3 : 
            formaLinhaDeTresColunas(listaDeElementos)
            break;
        default: 
            console.log('[NÃO FOI POSSÍVEL FORMAR UMA MATRIZ, PASSE OUTRO INTEIRO]')
    }
}

function formaLinhaDeTresColunas(listaDeElementos) {
// Linha da matriz
    let umaLinhaDaMatriz = []
// Formando uma linha da matriz
    for(var indice = 0; indice <= 2; indice++) {
        console.log(`[O VALOR DO ÍNCIDE ${indice} NA LISTA DE ELEMENTOS É]: `, listaDeElementos[indice])
        umaLinhaDaMatriz.push(listaDeElementos[indice])
    }
//Imprimir o valor de umaLinhaDaMatriz
    console.log("[VOCÊ FORMOU A PRIMEIRA LINHA DA MATRIZ]: ", umaLinhaDaMatriz)
    umaLinhaDaMatriz = []
// Formando a segunda linha da matriz
    for(var indice = 3; indice <= 5; indice++) {
        console.log(`[O VALOR DO ÍNCIDE ${indice} NA LISTA DE ELEMENTOS É]: `, listaDeElementos[indice])
        umaLinhaDaMatriz.push(listaDeElementos[indice])
    }
//Imprimir o valor de umaLinhaDaMatriz
    console.log("[VOCÊ FORMOU A SEGUNDA LINHA DA MATRIZ]: ", umaLinhaDaMatriz)
    umaLinhaDaMatriz = []
// Formando a segunda linha da matriz
    for(var indice = 6; indice <= 8; indice++) {
        console.log(`[O VALOR DO ÍNCIDE ${indice} NA LISTA DE ELEMENTOS É]: `, listaDeElementos[indice])
        umaLinhaDaMatriz.push(listaDeElementos[indice])
    }
//Imprimir o valor de umaLinhaDaMatriz
    console.log("[VOCÊ FORMOU A TERCEIRA LINHA DA MATRIZ]: ", umaLinhaDaMatriz)
    umaLinhaDaMatriz = []

    return listaDeElementos
}

function formaLinhaDeDuasColunas(listaDeElementos) {
// Linha da matriz
    let umaLinhaDaMatriz = []
// Formando a primeira linha da matriz
    for(var indice = 0; indice <= 1; indice++) {
        console.log(`[O VALOR DO ÍNCIDE ${indice} NA LISTA DE ELEMENTOS É]: `, listaDeElementos[indice])
        umaLinhaDaMatriz.push(listaDeElementos[indice])
    }
// Imprime o valor de umaLinhaDaMatriz
    console.log("[VOCÊ FORMOU A PRIMEIRA LINHA DA MATRIZ]: ", umaLinhaDaMatriz)
    umaLinhaDaMatriz = []
// Formando a segunda linha da matriz
    for(var indice = 2; indice <= 3; indice++) {
        console.log(`[O VALOR DO ÍNCIDE ${indice} NA LISTA DE ELEMENTOS É]: `, listaDeElementos[indice])
        umaLinhaDaMatriz.push(listaDeElementos[indice])
    }

// Imprime o valor de umaLinhaDaMatriz
    console.log("[VOCÊ FORMOU A SEGUNDA LINHA DA MATRIZ]: ", umaLinhaDaMatriz)
    umaLinhaDaMatriz = []

    return umaLinhaDaMatriz
}

main()