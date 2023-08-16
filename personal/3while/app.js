/* Mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo ingresa el usuario en un prompt. 
________________________________________________________*/
// let num = prompt('Ingresa un numero');
// const array = [];
// let i = 1;

// while (i <= num) {
//     array.push(i);
//     i++;
// }
// console.log(array);



/* _____________________________________________________
Mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo ingresa el usuario en un prompt. 
________________________________________________________*/
// let num = prompt('Ingresa un numero');
// const array = [];
// let i = 1;

// while (i <= num) {
//     array.push(i);
//     i+=2;
// }
// console.log(array);



/* ________________________________________________________
Mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo ingresa el usuario en un prompt.
________________________________________________________*/
// let num = prompt('Ingresa un numero');
// const array = [];
// let i = 1;

// while (num >= i) {
//     array.push(num);
//     num--;
// }
// console.log(array);



/* ________________________________________________________
Escribir utilizando console.log la tabla del 9 hasta 9x10.
________________________________________________________*/
// let i = 1;
// let num = prompt('Introduce un numero');

// while ( i <= 10) {
//     let multi = num * i;
//     console.log(`${num} * ${i} = ${multi}`);
//     i++;
// } 



/*________________________________________________________
Pedir al usuario que ingrese un número en un prompt, hacer la suma de todos los dígitos, validar que el número ingresado no contenga letras. 
________________________________________________________*/
// let num = prompt('Introduce una cifra');
// let i = 0;
// let suma = 0;

// if (!isNaN(num)){

//     while ( i < num.length) {
//         console.log(num[i]);
//         suma = suma + parseInt(num[i]);
//         i++;
//     } 
//     console.log(suma);

// } else {
//     alert ('Cifra Invalida');
// }



/*________________________________________________________
Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario. 
________________________________________________________*/
// let numInicio = prompt('Introduce un numero menor a 10');
// let numFinal = prompt('Introduce un numero mayor a 10');

// let suma = 0;

// if (isNaN(numInicio) || isNaN(numFinal)) {
//     alert('no seas imbecil')
// }else{
//     numInicio = parseInt(numInicio);
//     numFinal = parseInt(numFinal);
//     while (numInicio <= numFinal){
        
//         if(numInicio % 2 == 0){
//             suma = suma + numInicio;
//             console.log(numInicio);
//         }

//         numInicio++;
//     }
//     console.log(suma);
// } 



/*________________________________________________________
Realizar la sumatoria de los primeros N números, donde N es ingresado por el usuario.
________________________________________________________*/
// let num = prompt('Ingresar un numero');

// let i = 1;
// let suma = 0;

// if (isNaN(num)){
//     alert('Introducir numero valido');
// } else{
//     num = parseInt(num);
//     while ( i < num){
//         console.log(i);
//         suma = suma + i;
//         i++;
//     }
//     console.log(`La suma de los numeros antes de ${num} es ${suma}`);
// }



/*________________________________________________________
Realizar el factorial de los primeros N números. 
________________________________________________________*/
let num = prompt('Ingresar un numero');

let i = 1;
let multi = num;

if (isNaN(num)){
    alert('Introducir numero valido');
} else{
    num = parseInt(num);
    while (i < num){
        console.log(i);
        multi = multi * i;
        i++;
    }
    console.log(`El factorial de ${num} es ${multi}`);
}