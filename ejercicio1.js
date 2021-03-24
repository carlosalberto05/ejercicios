//Declaro mi arreglo con n elementos, para este ejemplo son 5
const arregloA = [4, 3, 5, 1, 2, 10, 20, 50];

//Declaro una variable que se le asigna el primer valor del arreglo "4" como mayor, asumo que el primer valor es el mayor
let mayor = arregloA[0];
//Declaro otra variable para ir iterando el arreglo A
let i = 1;
let segundoMayor = 0;

//Creo un ciclo para recorrer todo el arrelo mientras mi variable sea menor que el tamaño del arreglo
while (i < arregloA.length) {
  //Utilizo otra varibale axuliar para guardar el siguiente valor de los elementos de mi arreglo y así compararlo con el anterior
  let aux = arregloA[i];
  //Comparo el valor del elemento n de mi arreglo contra el elemento n+1 de mi arreglo, si n < n+1, a la variable mayor se le asigna el valor de n+1
  if (mayor < aux) {
    segundoMayor = mayor;
    mayor = aux;
  }
  i++;
}

console.log(
  `El primer valor mayor es: ${mayor} y el segundo valor mayor es: ${segundoMayor}`
);
