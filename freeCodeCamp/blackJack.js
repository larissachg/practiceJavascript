/* Conteo de cartas
En el juego de casino Blackjack, un jugador puede determinar si tiene una ventaja en la siguiente mano sobre la casa llevando la cuenta del número relativo de cartas altas y bajas que quedan en la baraja. Esto se llama cuenta de tarjetas.

Tener más cartas altas en la baraja es una ventaja para el jugador. Se le asigna un valor a cada carta de acuerdo a la siguiente tabla. Cuando el conteo es positivo, el jugador debería apostar alto. Cuando el conteo da 0 o negativo, el jugador debería apostar bajo.

Cambios del conteo	Cartas

  +1	-> 2, 3, 4, 5, 6
   0  -> 7, 8, 9
  -1	-> 10, 'J', 'Q', 'K', 'A'

Escribirás una función para contar cartas. Recibirá un parámetro card (carta) que puede ser un número o una cadena y aumentar o reducir la variable global count (conteo) de acuerdo al valor de la carta (observa la tabla). La función devolverá una cadena con el conteo actual y la cadena Bet (Apuesta) si el conteo es positivo, o Hold (Espera) si el conteo es cero o negativo. El conteo actual y la decisión del jugador (Bet o Hold) deben estar separados por un solo espacio.

Resultados de ejemplo: -3 Hold o 5 Bet

Sugerencia
NO reinicies count a 0 cuando el valor sea 7, 8 o 9. NO devuelvas un arreglo.
NO incluyas comillas (individuales o dobles) en el resultado. */

let count = 0;

function cc(card) {
  // Cambia solo el código debajo de esta línea
  const positivos = [2, 3, 4, 5, 6];
  const negativos = [10, 'J', 'Q', 'K', 'A'];
  
  if (positivos.includes(card)) {
    count++;
  } else if (negativos.includes(card)) {
    count--;
  }
  return count > 0 ? `${count} Bet` : `${count} Hold`
  // Cambia solo el código encima de esta línea
}

cc(2); 
cc(3); 
cc(7); 
cc('K'); 
cc('A');

/* Su función debe devolver un valor para el conteo y el texto (Bet o Hold) con un carácter de espacio entre ellos.
Aprobado:La secuencia de cartas 2, 3, 4, 5, 6 debe devolver la cadena 5 Bet
Aprobado:La secuencia de cartas 7, 8, 9 debe devolver la cadena 0 Hold
Aprobado:La secuencia de cartas 10, J, Q, K, A debe devolver la cadena -5 Hold
Aprobado:La secuencia de cartas 3, 7, Q, 8, A debe devolver la cadena -1 Hold
Aprobado:La secuencia de cartas 2, J, 9, 2, 7 debe devolver la cadena 1 Bet
Aprobado:La secuencia de cartas 2, 2, 10 debe devolver la cadena 1 Bet
Aprobado:La secuencia de cartas 3, 2, A, 10, K debe devolver la cadena -1 Hold */