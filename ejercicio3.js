//Definir el algoritmo del ordenamiento por conteo

const vectorA = [2, 5, 3, 2, 7, 5, 3, 2, 2, 4];

//obtener el valor maximo del vectorA
const maxVectorA = Math.max(...vectorA);
console.log(`El valor maximo del vecto a es: ${maxVectorA}`);
//Obtener el valor minimo del vectorA
const minVectorA = Math.min(...vectorA);
console.log(`El valor maximo del vecto a es: ${minVectorA}`);
//Obtener el tamaño del vector C
const sizeArrayC = maxVectorA - minVectorA + 1;
console.log(`El tamaño del vector C tiene que ser: ${sizeArrayC}`);
//iniciarlizar contador
cont = 0;
vectorC = [0];

for (i = 1; i < sizeArrayC; i++) {
  vectorC = [...vectorC, 0];
}

console.log(`Inicializando el vector C es: ${vectorC}`);

i = 0;

while (cont < vectorA.length) {
  i = vectorA[cont] - minVectorA;
  vectorC[i] = vectorC[i] + 1;
  cont++;
}

console.log(`Vector C:  ${vectorC}`);

cont = 0;
cont2 = 0;
nuevoValor = minVectorA;

while (cont < vectorC.length) {
  i = 0;
  while (i < vectorC[cont]) {
    vectorA[cont2] = nuevoValor;
    cont2++;
    i++;
  }
  nuevoValor++;
  cont++;
}

console.log(`El vector A queda de la siguiente manera: ${vectorA}`);
