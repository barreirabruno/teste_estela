function main() {
// VARIAVEL INDICE A CADA FOR SOMA 3 = [0, 3, 6]
// LAÇO DO FOR SOMA DE TRÊS EM TRÊS = [2, 5, 8]
// Teremos uma matriz 2x2
    const numeroLinhasEColunas = 4
    // const listaDeElementos = geraNumeroDeElementosDeUmaMatrizQuadratica(numeroLinhasEColunas)
// Elementos com os quais a matriz será formada
   const listaDeElementos = [
    8, 9, 10, 11,
    1, 2, 3, 4,
    9, 8, 2, 1,
    7, 3, 2, 4,
    ]

    const numeroLinhasEColunasA = 4
    const listaDeElementosA = [
        6, 7,
        9, 3
    ]

    // for(var contarApartirDe = 0; contarApartirDe < listaDeElementos.length; contarApartirDe += numeroLinhasEColunas ) {
    //     console.log(`[VOCÊ ESTÁ NO INDICE ${contarApartirDe}]`)
    //     console.log(listaDeElementos[contarApartirDe])
    //     console.log(listaDeElementos[contarApartirDe + 1])
    //     console.log(listaDeElementos[contarApartirDe + 2])
    //     console.log(listaDeElementos[contarApartirDe + 3])
    // }

    for(var contarApartirDe = 0; contarApartirDe < listaDeElementosA.length; contarApartirDe += numeroLinhasEColunasA ) {
        console.log(`[VOCÊ ESTÁ NO INDICE ${contarApartirDe}]`)
        for(var indice = 0; indice < numeroLinhasEColunasA-1; indice++) {
            console.log("[SEGUNDO FOR - INDICE]: ", indice)
            console.log(listaDeElementos[contarApartirDe])
            console.log(listaDeElementos[indice + 1])
        }
    }
}

function geraNumeroDeElementosDeUmaMatrizQuadratica(numeroTotalDeElementos) {
    let listaDeElementos = []

   for(var indice = 0; indice < (numeroTotalDeElementos * numeroTotalDeElementos); indice++) {
        listaDeElementos.push(Math.round(Math.random()))
   }

   return listaDeElementos
}

main()