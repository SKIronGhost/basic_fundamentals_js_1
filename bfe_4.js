// Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 

var array1 = [1,2,5];
var array2 = [-5,2,5,12];

function sumArray(x){
  let sum=0;
  for(i=0;i<x.length;i++){
    sum = sum + x[i];
  }
  return sum;
}

console.log(sumArray(array1));
console.log(sumArray(array2));