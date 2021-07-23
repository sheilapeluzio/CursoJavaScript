const fabricantes = ["Sheila", "Henrique", "Liz"]

function imprimir(nome, indice) {
    console.log(`${indice}. ${nome}`)
}
fabricantes.forEach(imprimir)