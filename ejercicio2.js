const titulo = document.createElement("h1");
titulo.textContent = "Ejercicio 2";
const body = document.querySelector("body");
body.appendChild(titulo);

//Definir vectores, A de longitud n y B de longitud m con n <= m;

const vectorA = [1, 2, 3];
const vectorB = [4, 6, 1, 2, 3, 8];

const vectores = document.createElement("h3");
vectores.textContent = `A = [${vectorA}] y B = [${vectorB}]`;
body.appendChild(vectores);

//*Determinar si la secuencia de de números del vector A se encuentra en B

//Inicializar el contador del arrero A
let i = 0;
//Inicializar el contador del arreglo B
let j = 0;
//Inicializar el contador de la secuencia de números en B
let e = 0;

const obtenerB = function (i, j, e) {
  while (i < vectorA.length && j < vectorB.length) {
    if (vectorA[i] === vectorB[j]) {
      i++;
      j++;
      e++;
    } else {
      i == 0;
      j++;
      e == 0;
    }
  }

  if (e == vectorA.length) {
    let position = j - vectorA.length;
    console.log(
      `Sí existe la secuencia de valor de A en B y se encuentra en la posición ${position} comenzando en el arreglo desde 0`
    );
    let resultado = document.createElement("h4");
    resultado.textContent = `Sí existe la secuencia de valor de A en B y se encuentra en la posición ${position} comenzando en el arreglo desde 0 del vector B`;
    body.appendChild(resultado);
  } else {
    let resultado = document.createElement("h4");
    resultado.textContent = `No existe la secuencia de valor de A en B`;
    body.appendChild(resultado);
    console.log(`No existe la secuencia de valores en el arreglo B`);
  }
};

obtenerB(i, j, e);
