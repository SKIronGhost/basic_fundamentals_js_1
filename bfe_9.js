// Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4])
var arr = [1,5,10,-2];

function getSquare(x){
  let z = []
  for(i=0;i<x.length;i++){
    square = x[i]**2;
    z.push(square);
  }
  return z;
}

console.log(getSquare(arr));