const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'


const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
  return func.salario > funcAtual.salario ? func : funcAtual 
}
function chineses2(f) {
  if (f.pais==='China') {
    return true
  }
  else
    return false

}


axios.get(url).then(response => {
  const funcionarios = response.data
  // console.log(funcionarios)
  
//  mulher chinesa com menor salario
  const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)
  
  console.log(func)
})