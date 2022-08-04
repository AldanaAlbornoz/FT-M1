'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var data = num.split("").reverse(); // aca separamos el string num y lo invertimos
  var result = 0;                    // creamos una nueva var para almacenar el valor de la suma
  for(var i = 0; i< data.length;i++) { // creamos una nueva var para ir incrementando la posicion
    result = 2**i *data[i] + result;  // 2 elev a la i * un elemento del array en la posicion i
  }
  return result;

  /* El método split() divide un objeto de tipo String en un array (vector) de 
  cadenas mediante la separación de la cadena en subcadenas.

  El método reverse() invierte el orden de los elementos de un array in place.
   El primer elemento pasa a ser el último y el último pasa a ser el primero

   */
}

function DecimalABinario(num) {
  // tu codigo aca
 
 var resto = ""; // creamos una var de "tipo" string para almacenar los restos.
 while(num>0) {
   resto = (num%2)+resto; // almacena los restos de num%2
   num = Math.floor(num/2); // redondeamos el nro para abajo par sacar el restos y 
                            // solo nos quede 1 o 0. y se va reduciendo num
 }
 return resto;
}
/*
var  numero = parseInt(num);
 var resto =  [];
 while(numero > 0) {
  resto = ((numero % 2) + resto).push(resto);

  numero = Math.floor(numero/2)
 }
 return resto.join(" ");
*/

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}