// JavaScript: array é um tipo referenciado
// arrays (vetores) são, na verdade, listas
// Array e uma Lista: estruturas de dados
// Array é sequencial na memória e tamanho é fixo
// Listas tem tamanho variável

var nomes = ['Adriana', 'Julie']
console.log(nomes)
console.log(nomes[1])
console.log(typeof(nomes)) // OBJETO/REFERENCIADO

// OBJETO TEM MÉTODOS (funções de um objeto)
nomes.push('Guilherme')
console.log(nomes)
console.log(nomes.length)

console.log(nomes.pop())
console.log(nomes)

nomes.unshift('Lauana')
console.log(nomes)
nomes.shift()
console.log(nomes)

nomes[9] = 'Maxsuel'
console.log(nomes)

var idades = new Array(3)
console.log(idades)

nomes = ['André', 'Vitor', 'Gabriel', 'Lucas']
nomes.splice(1, 2)
console.log(nomes)

