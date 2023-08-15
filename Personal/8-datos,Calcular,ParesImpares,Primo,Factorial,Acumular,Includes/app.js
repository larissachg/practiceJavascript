/* 1- Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años" Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings
_____________________________________________________*/
// let nameIs = prompt('Introduce tu nombre');
// let age = parseInt(prompt('Introduce tu edad'));
// let nextYear = age + 1;

// if (isNaN(age)) {
//     alert(`Verifica tus datos`);
// } else{
//     alert(`Hola ${nameIs}, tienes ${age} anhos y el anho que viene trendas ${nextYear}`)
// }



/*_____________________________________________________
2- Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo. triángulo = b * h/2 rectángulo = b * h círculo = π * r2 (pi * radio al cuadrado)
_____________________________________________________*/
// let figure = prompt('Introduce la figura: triangulo, rectangulo o circulo');
// let base;
// let altura;
// let radio;

// switch (figure) {
//     case 'triangulo':
//         base = parseInt(prompt('Introduce la medida de la base'));
//         altura = parseInt(prompt('Introduce la medida de la altura'));
//         const operaTri = (base * altura)/2;
//         alert(`El area del triangulo es ${operaTri}`);
//         break;
//     case 'rectangulo':
//         base = parseInt(prompt('Introduce la medida de la base'));
//         altura = parseInt(prompt('Introduce la medida de la altura'));
//         const operaRect = (base * altura);
//         alert(`El area del rectangulo es ${operaRect}`);
//         break;
//     case 'circulo':
//         radio = parseInt(prompt('Introduce la medida del radio'));
//         const operaCir = (Math.PI * Math.pow(radio,2));
//         alert(`El area del circulo es ${operaCir}`);
//         break;
//     default: alert('Introduce una figura valida');
// }



/*_____________________________________________________
3- Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar" si el número es 5 el resultado será: 1 - es impar 2 - es par 3 - es impar 4 - es par 5 - es impar
_____________________________________________________*/
// let numero = parseInt(prompt("Intoduce un numero"));

// for (let i = 1; i <= numero; i++) {

//     if(i % 2 === 0){
//         console.log(`${i} es PAR`);
//     } else {
//         console.log(`${i} es IMPAR`);
//     }

// }



/*_____________________________________________________
4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no. Un número primo es aquel que solo es divisible por sí mismo y la unidad
_____________________________________________________*/
// let num = parseInt(prompt('Introduce un numero'));
// let divisores = 0;

// if (num === 1) console.log('El numero no es valido');
// else{
//     for (let i = 2; i < num; i++){
//         if (num % 1 == 0) {
//             console.log(`${num} / ${i} = ${num / i} No es primo`);
//             divisores++;
//             break;
//         }
//     }
// }

// if(divisores == 0) console.log(`${num} es primo`);



/*_____________________________________________________
5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial. El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.
_____________________________________________________*/
// let numero = parseInt(prompt('Introduce un numero'));
// const array = [];
// let multi = 1;

// for (let i = 1; i <= numero; i++) {
//     array.push(i);
//     multi = multi * i;
// }

// console.log(array);
// console.log(multi);

//USANDO REDUCE:
// const reducido = array.reduce((previous,current)=> previous * current)

// console.log(reducido);



/*_____________________________________________________
6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido
_____________________________________________________*/
// let suma = 0;
// let contador = 0;

// while(suma < 50){
//     suma += parseInt(prompt('Introduce un numero'));
//     contador++
// }

// console.log(`La suma total es de ${suma}`);
// console.log(`El total de numeros introducidos es ${contador}`);



/*_____________________________________________________
7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola: -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6 -el array de pares e impares
_____________________________________________________*/
// const numeros = [2,5,7,10,3];
// let pares = [];
// let impares = [];


// for(const number of numeros){
    // let random = Math.round(Math.random() * 10 + 1);
//     const result = number * random;
//     console.log(`${number} x ${random} = ${result}`);

//     if(result % 2 == 0){
//         pares.push(result);
//     } else {
//         impares.push(result);
//     }
// }

// console.log(pares);
// console.log(impares);



/*_____________________________________________________
8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23 const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
_____________________________________________________*/
// const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// let ci = prompt('Introduce tu DNI');

// if(ci.length == 8 && parseInt(ci)>0) {
//     let letra = ci % 23;
//     console.log(letra);
//     console.log(`Tu CI completo es ${ci}${letras[letra]}`);
// }


/*_____________________________________________________
9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
_____________________________________________________*/
// let palabra = prompt('Introduce una palabra');
// let contadorVocales = 0;
// const vocales = ['a','e','i','o','u'];

// for (let i = 0; i < palabra.length; i++) {
//     const esVocal = vocales.includes(palabra[i]);
//     if (esVocal) {
//         contadorVocales++;
//     }
// }
// console.log("numero consonantes =", palabra.length - contadorVocales);
// console.log("numero vocales =", contadorVocales);
// console.log("numero letras =", palabra.length);



/*_____________________________________________________
10- Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
_____________________________________________________*/
// const colores = ["azul", "amarillo", "rojo", "verde", "rosa"];

// let color = prompt('Introduce un color');

// if (colores.includes(color)) {
//     console.log(color);
//     alert('Le acertaste')
// } else {
//     alert('Intenta nuevamente');
// }