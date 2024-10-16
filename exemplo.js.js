var x = 2 // primitivo number
var y = 6
console.log(x == y)
console.log(typeof(x))
var z = new Number(6) // objeto, é referenciado
var m = new Number(6)
console.log(Number(z) == Number(m))
console.log(x == z)
console.log(x + y)
console.log(x + z)
console.log(typeof(z))

// tipo primitivo é sempre copiado
var q = 5
var w = q
q = 1
console.log(w)

// tipo referenciado
var a1 = [10, 20, 30]
console.log(a1)
var a2 = a1
console.log(a2)
a1[2] = 60
console.log(a1)
console.log(a2)
a2[1] = 200
console.log(a1)
console.log(typeof(a2))

