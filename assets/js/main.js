//ejercicio 1

function isPalindrome(entrada) {
  // Validar que el elemento ingresado es string
  if (typeof entrada !== "string") {
    return "Debes ingresar una cadena de texto";
  }

  // Elimina espacios y convierte a minúsculas
  const entradaSinEspacios = entrada.replace(/\s+/g, "").toLowerCase();

  const entradaInvertida = entradaSinEspacios.split("").reverse().join("");
  return entradaSinEspacios === entradaInvertida;
}

console.log(isPalindrome("radar"));
console.log(isPalindrome("adios"));
console.log(isPalindrome(123));


//ejercicio 2 vocales

function getVowelsCount(vowel) {
  if (typeof vowel !== "string") {
    return "Debes ingresar una cadena de texto";
  }

  let contador = 0;

  for (let i = 0; i < vowel.length; i++) {
    // Verificar si el caracter es una vocal
    if ("aeiou".includes(vowel[i].toLowerCase())) {
      contador++;
    }
  }

  // Retornar el número de vocales encontradas
  return contador;
}

console.log(getVowelsCount("Hola Mundo"));
console.log(getVowelsCount(12345));
console.log(getVowelsCount("JavaScript"));

//ejercicio 3

function Person(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

Person.prototype.getDetails = function () {
  return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años`;
};

const persona1 = new Person("Juan", 30);
const persona2 = new Person("Ana", 40);

console.log(persona1.getDetails());
console.log(persona2.getDetails());


//ejercicio 4

function multiplicarPorDos(numeros) {
  if (!Array.isArray(numeros)) {
    // método en JavaScript que determina si el argumento proporcionado es un array.
    return "Debes ingresar un array con dos números.";
  }

  if (numeros.length === 0) {
    return "No podemos calcular elementos vacíos.";
  }

  if (numeros.length > 2) {
    return "Solo se admiten 2 números.";
  }

  if (!numeros.every((num) => typeof num === "number")) {
    return "Ambos elementos deben ser números.";
  }

  return numeros.map((num) => num * 2);
}

console.log(multiplicarPorDos([1, 2])); // [2, 4]
console.log(multiplicarPorDos([])); // No podemos calcular elementos vacíos.
console.log(multiplicarPorDos([1, 2, 3])); // Solo se admiten 2 números.
console.log(multiplicarPorDos(["a", 2])); // Ambos elementos deben ser números.
console.log(multiplicarPorDos(true)); // Debes ingresar un array con dos números.

//ejercicio 5
function filterEvenNumbers(arrayDeNumeros) {
  if (!Array.isArray(arrayDeNumeros)) {
    return "ingresa una lista valida";
  }

  if (arrayDeNumeros.length === 0) {
    return [];
  }

  if (!arrayDeNumeros.every((num) => typeof num === "number")) {
    return "Deben contener números";
  }

  const numerosPares = arrayDeNumeros.filter((num) => num % 2 === 0);
  return numerosPares;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8])); // [2, 4, 6, 8]
console.log(filterEvenNumbers(["hola"])); // "Deben contener números"
console.log(filterEvenNumbers(["1", "2", "3", "4", "5"])); // [2, 4]
console.log(filterEvenNumbers(true)); // "Ingresa una lista válida"
console.log(filterEvenNumbers([])); // []
