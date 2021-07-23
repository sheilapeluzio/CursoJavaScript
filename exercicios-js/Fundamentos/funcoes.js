function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`valor acima do permitido `)
        return area
    } else {
        return area

    }

}
console.log(area(20, 4))
console.log(area())
console.log(area(2, 4))
console.log(area(20, 4, 3, 3, 4, 5))

function minhaFuncao(objeto) {
  objeto.nome = "Henrique";
}

var pessoa = {nome: "Sheila", Sobrenome: "Peluzio", ano: 1989};
var x, y;

x = pessoa.nome;     // x recebe o valor "Honda"
console.log(pessoa)    
minhaFuncao(pessoa);
y = pessoa.nome;   // y recebe o valor "Toyota"
                    // (a propriedade make foi alterada pela função)
console.log(pessoa)