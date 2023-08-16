/* Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y el programa muestre en una alerta la temperatura en Fahrenheit. */

let temperatura = prompt('Ingrese la temperatura');
console.log(`${temperatura} Celcius`);

const conversion = (temperatura * 1.8) + 32;
console.log(conversion);

alert(`Es lo mismo a ${conversion} farenheit`);

//(celciusAqui × 1.8) + 32 = tuNuevoValorEnFarenheit