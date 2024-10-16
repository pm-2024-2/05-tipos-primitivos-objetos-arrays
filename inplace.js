function dobro(array) { // in-place
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i] * 2
    }
}
// function dobro(array) { // cópia
//     var resp = Array.from(array) // cópia
//     for (var i = 0; i < resp.length; i++) {
//         resp[i] = resp[i] * 2
//     }
//     return resp
// }

var numeros1 = [2, 4, 6]
var numeros2 = dobro(numeros1)
console.log(numeros1)