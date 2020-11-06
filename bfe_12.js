// Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 

var arr1 = [1,5,10,-2]
var arr2 = [4,8]
var arr3 = [2]

function replaceNumbers(x){
  if (x.length>1){
    first=x[0]
    last=x[x.length-1]
    x[0]=last
    x[x.length-1]=first
    
    return x
    }
    
    else{
      return false;
    }
  }
  

console.log(replaceNumbers(arr1));
console.log(replaceNumbers(arr2));
console.log(replaceNumbers(arr3));