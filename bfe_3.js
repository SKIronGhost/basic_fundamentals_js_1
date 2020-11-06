// Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).
function sumOdds(){
  let sum=0;
  for(i=1;i<=5000;i+=2){
    sum = sum+i;
  }
  return sum;
}

console.log(sumOdds());