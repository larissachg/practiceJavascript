/*Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en una alerta. ---------- */
// let num = prompt('Introduce un numero');

//     if (num%2==0) {
//         alert(`${num} Es numero par`);
//     } else {
//     alert(`${num} No es numero par`);
//     }


/*_______________________________________________________________________________
Crear un programa que determine si un número introducido en un Prompt es divisible por 5 o no, mostrar el resultado con console.log
_______________________________________________________________________________*/
// let num = prompt('Introduce un numero');
// let division = (num / 5);

// if (num % 5 == 0) {
//     console.log(num/5);
//     alert(`${num} / 5 = ${division}`);
// } else {
//     alert(`${num} no es multiplo de 5`);
// }



/*_______________________________________________________________________________
Crear un programa que determine si un número introducido en un popup es divisible por 11 y 5 o no, mostrar el resultado con console.log
_______________________________________________________________________________*/
// let num = prompt('Introduce un numero');
// let division1 = num / 5;
// let division2 = num / 11;

// if (num % 5 == 0) {
//     console.log(num);
//     console.log(division1);

// } else if (num % 11 == 0){
//     console.log(num);
//     console.log(division2);
// } else {
//     alert(`${num} no es multiplo de 5 o de 11`);
// }



/*_______________________________________________________________________________
Crear un programa que le pida al usuario dos números en un Prompt y luego muestre en un alerta el número mayor
_______________________________________________________________________________*/
// const num1 = prompt('Introduce un numero');
// const num2 = prompt('Introduce otro numero');

// console.log(num1);
// console.log(num2);

// if (num1 > num2) {
//     alert(`${num1} es el mayor`);
// } else{
//     alert(`${num2} es el mayor`);
// }

/*_______________________________________________________________________________
Crear un programa que le pida al usuario primero un números al usuario a través de un prompt y luego un segundo número para luego mostrar en un alerta el número mayor, esta vez realizar el ejercicio ocupando un if ternario.
_______________________________________________________________________________*/
// let mensaje;
// mensaje = (num1 > num2 ? alert(`${num1} es el mayor`) : alert(`${num2} es el mayor`));



/*_______________________________________________________________________________
Crear un programa que determine si un string introducido por un usuario empieza con un número o con una letra.
_______________________________________________________________________________*/
// const character = prompt('Introduce una fila de caracteres');
// const firstChar = character.slice(0,1);

// console.log(character);
// console.log(firstChar);

// if (isNaN(firstChar)) {
//     alert(`${firstChar} es un string`);
// } else {
//     alert(`${firstChar} es un numero`);
// }



/*_______________________________________________________________________________
Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si el triángulo es válido o no
_______________________________________________________________________________*/
// const num1 = prompt('Introduce un angulo');
// const num2 = prompt('Introduce otro angulo');
// const num3 = prompt('Introduce el angulo final');

 

// let triangulo = (num1 == num2 && num2 == num3);

// if(isNaN(num1) || isNaN(num2) ||isNaN(num3)){
//     alert(`No seas idiota2`)
// }else if (triangulo){
//     console.log(triangulo);
//     alert(`Es un triangulo`)
// } else {
//     console.log(triangulo);
//     alert(`No es un triangulo`)
// }


/*_______________________________________________________________________________
Determinar si una palabra empieza con mayúscula o no.
_______________________________________________________________________________*/
// const palabra = prompt('Introduce una palabra');
// const firstLetter = palabra.slice(0,1);

// console.log(palabra);
// console.log(firstLetter);

// if (firstLetter == firstLetter.toUpperCase()) {
//     alert(`${firstLetter} es Mayuscula`);
// } else{
//     alert(`${firstLetter} es minuscula`);
// }



/*_______________________________________________________________________________
Determinar si un año dado es bisiesto.
_______________________________________________________________________________*/
// const year = prompt('Introduzca un año');
// console.log(year.length == 4);

// if (year.length !== 4){
//     alert(`${year} por favor introduzca un anho correcto`);
// }
// else if(year % 4 == 0) {
//     alert(`${year} es año bisiesto`);
// } else {
//     alert(`${year} No es un año bisiesto`);
// }



/*_______________________________________________________________________________
Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y 10, el usuario , luego a el usuario se le pedirá que introduzca un número en un popup para intentar adivinarlo. Si la entrada del usuario coincide con el número de conjetura, el programa mostrará un mensaje de "buen trabajo" de lo contrario mostrará un mensaje de "No corresponde"
_______________________________________________________________________________*/
const aleatorio = Math.floor(Math.random() * 10 );
console.log(aleatorio);

const numUsuario = prompt('Introduce un # del 1 al 10');
console.log(numUsuario);

if (isNaN(numUsuario) || (numUsuario > 10)){
    alert(`Caracter invalido`);
} else if(numUsuario == aleatorio){
    alert(`El numero aleatorio es ${aleatorio} - Haz ganado!`);
} else {
    alert(`El numero aleatorio es ${aleatorio} - Intentalo nuevamente`);
}

/* El siguiente código tiene un error que se produce en algunos casos especiales, descubrirlo y arreglarlo:
Obtener edad
 if(edad < 13) {
 	console.log("Es niño");
 }if(edad < 18 ){
  	console.log("Es adolecente");
 } else{
  	console.log("Es adolecente");
 } */

//  edad = 10;

//  if(edad < 13) {
//  	console.log("Es niño");
//  } else if (edad < 18 ){
//   	console.log("Es adolecente");
//  } else{
//   	console.log("Es adulto");
//  }