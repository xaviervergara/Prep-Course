// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var arr = [];
  for (var property in objeto) {
    arr.push([property, objeto[property]]);
  }
  return arr;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  var obj = {};
  for (var i = 0; i < string.length; i++) {
    if (obj.hasOwnProperty(string[i])) {
      obj[string[i]] = obj[string[i]] + 1;
    } else {
      obj[string[i]] = 1;
    }
  }
  return obj;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var str = "";
  var str2 = "";
  for (var i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      str = str + s[i];
    }
    if (s[i] === s[i].toLowerCase()) {
      str2 = str2 + s[i];
    }
  }
  return str + str2;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let strToArray = str.split(" ");
  let array = strToArray.map(function (elemento) {
    return elemento.split("").reverse().join("");
  });
  return array.join(" ");
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numToString = numero.toString();
  var strToArray = numToString.split("");
  var jn = strToArray.reverse().join("");
  if (jn === numToString) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let toArray = cadena.split("");
  // console.log(toArray);
  let a = toArray.filter(function (e) {
    return e !== "a" && e !== "b" && e !== "c";
  });
  return a.join("");
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  function encontrarMinimo(arreglo) {
    let cont = arreglo[0];
    for (let k = 1; k < arreglo.length; k++) {
      if (arreglo[k] < cont) {
        cont = arreglo[k];
      }
    }
    return cont;
  }

  arrayNumeros = arr.map(function (elemento) {
    return elemento.length;
  });

  let resultado = [];
  let iter = arr.length;
  let min = encontrarMinimo(arrayNumeros);

  for (let j = 0; j < iter; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (min === arr[i].length) {
        resultado.push(arr[i]);
        arrayNumeros.splice(i, 1);
        arr.splice(i, 1);
        min = encontrarMinimo(arrayNumeros);
        // console.log("ITERACION " + j);
        // console.log("arrayNumeros = " + arrayNumeros);
        // console.log("min =  " + min);
        // console.log("arr = " + arr);
        // console.log("resultado = " + resultado);
      }
    }
  }

  return resultado;
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let inter = [];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        inter.push(arreglo1[i]);
      }
    }
  }

  return inter;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

// function sortArray(arr) {
//   function encontrarMinimo(arreglo) {
//     let cont = arreglo[0].length;
//     for (let k = 1; k < arreglo.length; k++) {
//       if (arreglo[k].length < cont) {
//         cont = arreglo[k].length;
//       }
//     }
//     return cont;
//   }

//   let resultado = [];
//   let iter = arr.length;
//   let min = encontrarMinimo(arr);

//   for (let j = 0; j < iter; j++) {
//     for (let i = 0; i < arr.length; i++) {
//       if (min === arr[i].length) {
//         resultado.push(arr[i]);
//         arr.splice(i, 1);
//         min = encontrarMinimo(arr);
//         console.log("ITERACION " + j);
//         console.log("min =  " + min);
//         console.log("resultado = " + resultado);
//         console.log("arr = " + arr);
//       }
//     }
//   }

//   return resultado;
// }
