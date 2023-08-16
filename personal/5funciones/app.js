/*_____________________________________________________
Crear una función que reciba un valor cualquiera y lo muestre ocupando console.log(), llamar a la función pasando el valor 5
_____________________________________________________*/
// function numero(num) {
//     console.log(num);
// }

//DE FLECHA:
// const numero = (num) => {
//   console.log(num);
// }
// const numero2 = (num) => console.log(num);

// numero(5);
// numero2(23);

/*_____________________________________________________
La siguiente función devuelve undefined en lugar de la multiplicación, se pide arreglarla:
  function multiply(a, b){
    a * b
  } 
_____________________________________________________*/
// function multiply(a, b){
//     return a * b;
//   }

// multiply(2, 5);

// DE FLECHA:
// const multiply2 = (a, b) => (a*b) ;

/*_____________________________________________________
Crear una función que reciba dos valores y devuelva la suma de ellos. 
_____________________________________________________*/
// function suma(a, b){
//     return (a + b);
// }
// suma(5, 5);

//DE FLECHA:
// const suma2 = (a, b) => { return (a + b) };

/*_____________________________________________________
Crear una función que reciba un número entero y muestre un error si el tipo de dato pasado es de otro tipo.
_____________________________________________________*/
// function numero(num) {
//     if (isNaN(num)){
//         return ("No es un numero");
//     } else {
//         return (num);
//     }
// }

//DE FLECHA:
// const numero2 = (num2) => isNaN(num2) ? ("No es un numero") :  (num2);

// numero(8);
// numero('L');

/*_____________________________________________________
Crear una función autoejecutable que muestre "muuu" en pantalla
_____________________________________________________*/
(() =>console.log("muuu")
)();

function hola() {
  console.log("hola auto");
}

hola();
