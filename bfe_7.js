// Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.

function returnOdds(x){
  var z = [];
  for(i=1;i<=x;i+=2){
    z.push(i)
  }
  return z;
}

console.log(returnOdds(50));
