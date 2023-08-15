/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10. */
const caracterCounts = (cadena) => {
  if (typeof cadena === "string") {
    console.log(cadena.length);
  } else {
    console.log("No se puede");
  }
};

caracterCounts("Hola Mundo");
caracterCounts(2);
caracterCounts(["Hola", "Mundo"]);

/*_____________________________________________________________________________
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */
const recorte = (text, limit) => {
  if (typeof text === "string") {
    console.log(text.slice(0, limit));
  } else {
    console.log("No se puede");
  }
};

recorte("Hola Mundo Como estan", 15);

/*_____________________________________________________________________________
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */
const dividir = (string, caracter) => {
  if (typeof string === "string") {
    console.log(string.split(caracter));
  } else {
    console.log("No se puede");
  }
};

dividir("Hola que tal", " ");

/*_____________________________________________________________________________
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */
const repeat = (text, repeticion) => {
  if (typeof text === "string") {
    console.log(text.repeat(repeticion));
  } else {
    console.log("No se puede");
  }
};

repeat("Hola Mundo ", 3);

/*_____________________________________________________________________________
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/
const reverseText = (String) => {
  const reverseString = String.split("").reverse().join("");

  console.log(reverseString);
};

reverseText("Hola Mundo");

/*_____________________________________________________________________________
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/
const repeatWord = (text, word) => {
  const arrayText = text.split(" ");
  const result = arrayText.filter((palabra) => {
    return palabra.includes(word);
  });
  console.log(arrayText);
  console.log(result);
  const countRepeat = result.length;
  console.log(countRepeat);
};

repeatWord("Hola carita feliz, estoy feliz", "feliz");

/*_____________________________________________________________________________
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/
const esPalindromo = (text) => {
  const reverse = text.split("").reverse().join("");
  console.log(reverse);
  if (text === reverse) {
    console.log(true);
  } else {
    console.log(false);
  }
};

esPalindromo("hola");
esPalindromo("ana");

/*_____________________________________________________________________________
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/
const deleteWord = (cadena, word) => {
  const array = cadena.split(" ");
  console.log(array);

  const result1 = array
    .filter((palabra) => palabra.includes(word))
    .map((palabra) => {
      return palabra.replace(word, "");
    });

  //OPCION 2
  const result2 = array.reduce((acc, palabra, index) => {
    console.log("pv: ", acc);
    if (palabra.includes(word)) {
      acc.push(palabra.replace(word, ""));
    }
    return acc;
  }, []);

  //OPCION 3
  const resultadoFinalisimo = [];
  array.forEach((palabra) => {
    if (palabra.includes(word)) {
      resultadoFinalisimo.push(palabra.replace(word, ""));
    }
  });

  console.log("1", result1);
  console.log("2 -------", result2);
  console.log("3 -------", resultadoFinalisimo);
};

deleteWord("abc1, xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

/*_____________________________________________________________________________
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/
const obtenerAleatorio = (min, max) => {
  const aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(aleatorio);
};
obtenerAleatorio(501, 600);

/*_____________________________________________________________________________
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.*/
const esCapicua = (number) => {
  const reverse = number.toString().split("").reverse().join("");
  console.log(reverse);
  if (number === +reverse) {
    console.log(true);
  } else {
    console.log(false);
  }
};

esCapicua(123);
esCapicua(2002);

/*_____________________________________________________________________________
  11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

const factorial = (number) => {
  //********** opcion uno primera solucion

  // const array = [];
  // let multi = 1;
  // for (let i = 1; i <= number; i++) {
  //   array.push(i);
  //   multi = multi * i;
  // }
  // console.log(array);
  // console.log(multi);

  //********** opcion 2
//Esta funcion sirve para crear un arreglo dado un numero
  const numerosAnteriores = [...Array(number).keys()].map((n) => n + 1);
  const result = numerosAnteriores.reduce((prev, actual) => prev * actual);
  console.log(numerosAnteriores);
  console.log(result);
};

factorial(5);
