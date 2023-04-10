/* Escribir un programa que muestre un prompt donde el usuario ingresa un número, luego muestra otro prompt pidiendo otro número, finalmente el programa muestra una alerta con el resultado de la suma. */


let num = prompt('Ingresa un Numero');
console.log(num);

const num2 = prompt('Ingresa otro numero');
console.log(num2);

// const numero1 = Number.parseInt(num);
// const numero2 = Number.parseInt(num2);
const resultado = parseInt(num) + parseInt(num2);

if (isNaN(resultado)) {
    alert('Numero invalidoa')
}else{
    alert(`El resultado de la suma es ${resultado}`);
}