// De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].
var array = [-1,-3,2]

function replaceNegatives(x){
  for(i=0;i<x.length;i++){
    if(x[i]<0){
      x[i]="Dojo"
    }
  }
  return x
}

console.log(replaceNegatives(array))