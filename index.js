var animal = 'dog'

function myAnimal() {
  var animal = 'dog';
  return animal
}

function yourAnimal() {
  var yourAnimal = 'cat';
  return yourAnimal
}

function add2(n) {
  return n + 2
}

 function funkyFunction() {
  var theFunk = "FUNKY!"
  return function () {
  }
}
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction
