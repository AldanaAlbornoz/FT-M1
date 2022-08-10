

// Closures


// Stack(agregar remover, buscar)


// Queue(agregar remover, buscar)


// linkedlist(agregar remover, buscar, addInPosition)
// agregar al principio
// agregar al final
// agregar en una posicion
// agregar al principio
// agregar en el medio segun alguna posicion


// HashTable


// BinaryTree 












/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa 
es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/
function Queue() { //Implementar la clase Queue     // Cola FIFO
    this.data = [];
    this.contador = 0;
   
   
    // método enqueue: agrega un valor respetando el orden.
    Queue.prototype.enqueue = function(valor) {
     this.data.push(valor); // pusheo el valor al final y
     this.contador ++;      // aumento en 1 el contador
    };
   
   
   
    // método dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
    Queue.prototype.dequeue = function() {
     if(this.contador > 0){ // si el cont es > O, le resto 1
       this.contador--;
       return this.data.shift(); // y retorno el arreglo data sin el 1er elem
     }else{ // si no, si la lista es vacia:
       return undefined;
     }
    };
   
   
   
    // método size: retorna el tamaño (cantidad de elementos) de la queue.
    Queue.prototype.size = function() {
     return this.contador;
    };
}










function Stack() { // Pila LIFO - Last In, First Out.
  this.data = [];
  this.contador = 0;
  Stack.prototype.agregar = function(value) {
    this.data.push(value) // agrega un valor a la pila (al final).
    this.contador++;
  };
  Stack.prototype.remover = function() {
    this.contador--;
    return this.data.pop(); // retorna el valor de lo que saca un valor al final de 

  };
  Stack.prototype.tamaño = function() {
    return this.contador;
  };
}






   // No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  Stack,
};
