// Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 

var z = [-3,3,5,7];

function maxValue(x){
let max = 0
  for(i=0;i<x.length;i++){
    if(max<x[i]){
      max=x[i]
    }
  }
  return max;
}

console.log(maxValue(z));