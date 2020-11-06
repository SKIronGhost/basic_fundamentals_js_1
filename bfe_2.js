// Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. 

function sumPairs(){
  let sum=0;
  for(i=0;i<=1000;i+=2){
    sum = sum+i;
  }
  return sum;
}

console.log(sumPairs());