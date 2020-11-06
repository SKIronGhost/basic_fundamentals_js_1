// Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 

var arr = [1,3,5,7];
var y = 3;

function maxValues(x){
  let sum = 0;
  let z = []
  for(i=0;i<x.length;i++){
    if(x[i]>y){
      sum++
      z.push(x[i]);
      }
      
    }
    console.log("hay "+sum+" números en el array mayores que "+y+", estos son "+z)
    
  }

console.log(maxValues(arr));