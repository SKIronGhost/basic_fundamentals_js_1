// Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).

var arr = [1,5,10,-2];

function maxMinAvg(x){
  let z = [];
  let max = x[0];
  let min = x[0];
  let avg = x[0]
  if(x.length<1){

  }
  else{
    let sum = 0;
    for(i=0;i<x.length;i++){
      sum = sum + x[i]
      if(x[i]>max)
      max = x[i]
      if(x[i]<min)
      min = x[i]
    }
    avg=sum/x.length
  }
    z.push(max)
    z.push(min)
    z.push(avg)
  console.log(z)

}

console.log(maxMinAvg(arr))