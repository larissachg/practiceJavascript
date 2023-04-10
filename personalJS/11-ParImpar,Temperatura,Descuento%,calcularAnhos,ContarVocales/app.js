/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.*/
const validarNumeroPrimo = (number) => {
  for (let x = 2; x < number / 2; x++) {
    if (number % x == 0) {
      console.log(false);
    } else {
      console.log(true);
    }
  }
};

validarNumeroPrimo(8); //FALTA

/*_____________________________________________________________________________
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.*/
const validarNumero = (number) =>
  number % 2 === 0
    ? console.log(`${number} es PAR`)
    : console.log(`${number} es IMPAR`);

validarNumero(29);
validarNumero(36);

/*_____________________________________________________________________________
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.*/
const convertirTemperatura = (temperatura, tipo) => {
  if (tipo == "C") {
    const conversion = temperatura * 1.8 + 32;
    console.log(
      `${temperatura} '${tipo}' es lo mismo a ${conversion} Farenheit`
    );
  } else {
    const conversionReverse = (temperatura - 32) * 1.8;
    console.log(
      `${temperatura} '${tipo}' es lo mismo a ${conversionReverse} 'C'`
    );
  }
};

convertirTemperatura(0, "C");
convertirTemperatura(32, "farenheit");

/*_____________________________________________________________________________
15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.*/
function BinarioADecimal(num) {
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
       sum += +num[i] * 2 ** (num.length - 1 - i);
    }
    return sum;
}
console.log(BinarioADecimal(100));
BinarioADecimal(100); //FALTA

/*_____________________________________________________________________________
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.*/
const calcularMontoFinal = (monto, descuento) => {
  const aplicarDescuento = monto - monto * (descuento / 100);
  console.log(aplicarDescuento);
};
calcularMontoFinal(1000, 20);

/*_____________________________________________________________________________
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/
const calculateTime = (date) => {
  const millisecondsDifference = Date.now() - date.getTime();
  const dateDifference = new Date(millisecondsDifference);
  const resultDate = Math.abs(dateDifference.getUTCFullYear() - 1970);
  return resultDate.toString();
};
console.log(calculateTime(new Date(1984, 4, 23)));
calculateTime(new Date(1984, 4, 23));

/*_____________________________________________________________________________
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */
const IdentificarText = (texto) => {
  const vocales = ["a", "e", "i", "o", "u"];
  let contadorVocales = 0;
    
  texto = texto.replaceAll(' ', '');
  for (let i = 0; i < texto.length; i++) {
    const esVocal = vocales.includes(texto[i]);
    if (esVocal) {
      contadorVocales++;
    }
  }
  console.log(texto);
  console.log("numero consonantes =", texto.length - contadorVocales);
  console.log("numero vocales =", contadorVocales);
};

IdentificarText('Hola Mundo');
IdentificarText('La lechuza hace shh');