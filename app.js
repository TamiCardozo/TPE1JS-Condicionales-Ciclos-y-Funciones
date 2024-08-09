/* ejercicio nº1 PAR O IMPAR */
function ParOImpar(numero) {
    if (numero % 2 === 0) {
        console.log("El número es par.");
    } else {
        console.log("El número es impar.");
    }
}
ParOImpar(3);

/*ejercicio nº2 NUMERO MAYOR*/ 
function compararNumeros(num1, num2) {
    if (num1 > num2) {
        console.log("El número mayor es:", num1);
    } else if (num1 < num2) {
        console.log("El número mayor es:", num2);
    } else {
        console.log("Los números son iguales."); 
}
}
compararNumeros(2, 9);

/*ejercicio nº3 MULTIPLO DE 5*/
function MULTIPLOdecinco (numero) {
    if (numero % 5 === 0) {
        console.log("El número es múltiplo de 5.");
    } else {
        console.log("El número no es múltiplo de 5.");
    }
}
MULTIPLOdecinco(67);

/*ejercicio nº4 IMPRIMIR NÙMEROS DEL 0 AL NUMERO DADO */
function imprimirNumeros(numero) {
    for (let i = 0; i <= numero; i++) {
        console.log(i);
    }
}
imprimirNumeros(8);

/*ejercicio nº5 IMPRIMIR UNA PALABRA*/
function repetirPalabra(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
        console.log(palabra);
    }
}
repetirPalabra("HOLA",5);

/*ejercicio nº6 Función para imprimir todos los elementos de un array*/
function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
imprimirArray([1, 2, 3, 4, 5, 6]);

/*ejercicio nº7 imprimir todos los elementos de un array excepto el de la posición 5 */
function imprimirArraySinlaquintaposicion(array) {
    for (let i = 0; i < array.length; i++) {
        if (i !== 4) { // La posición 5 en un array tiene índice 4
            console.log(array[i]);
        }
    }
}
imprimirArraySinlaquintaposicion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/*ejercicio nº8 Función para multiplicar cada elemento de un array por un número*/
function multiplicarArrayPorNumerooelementos(array, numero) {
    array.forEach(valor => console.log(valor * numero));
}

multiplicarArrayPorNumerooelementos([1, 2, 3, 4, 5], 3);