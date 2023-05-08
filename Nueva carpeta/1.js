//Fórmulas matemáticas en JavaScript

//para enviar a consola varias cosas a la vez en un objeto:
console.log({
    a1,
    a2,
    a3,
})

//funcion que retorna un valor (hola)
function calcular(){
    return console.log("hola")
}
calcular()

//imprime en consola todo en una fila separado
var a1=1
var a2=1
var a3=1
console.log({
    a1,
    a2,
    a3,
})

//console.group("") es para cuando se quiere separa un grupo
console.group('Sección de depuración');
console.log('Mensaje de depuración 1');
console.log('Mensaje de depuración 2');
console.groupEnd();
//> Sección de depuración
//  Mensaje de depuración 1
//  Mensaje de depuración 2

//uso de pi:
Math.PI//3.1415...

//eleva a la un exponente
const radio=1
Math.pow(radio,2) //radio^2

//redondea
const n = 3.14159265359;
const nFormateado = n.toFixed(3);//aproxima a 3 decimales
console.log(nFormateado); // muestra "3.142" en la consola

//mensaje de advertencia
console.warn("cuidado!")//mensaje con icono de advertencia

//raiz cuadrada de un numero
Math.sqrt(3)//raiz(3)=1.7320508075688772

//operador logico OR, "o"
a || b //si se cumple a o b dara secuencia

//para que le de el valor del objeto del DOM
.value

//negador
!true//false

//innerText: propiedad para acceder a texto de elemento HTML
//<div id="mi-div">Hola mundo!</div>
const div = document.querySelector("#mi-div");
console.log(div.innerText); // muestra "Hola mundo!" en la consola
div.innerText = "¡Hola amigos!";//para poner texto
//se cambia el texto dentro del elemento div
//<div id="mi-div">¡Hola amigos!</div>

//variable con valor indefinido
x=undefined

//devuelve cadena de texto con valor monetario
console.log(`$${"1000"}`)//$1000

//return dentro del if detiene la ejecución de la función y devuelve
//un valor especificado si se cumple una determinada condición. Esto
//solo si entra a una funcion.
return//sirve para retornar un valor o salir al usar una funcion

//para objetos literales: (lo mismo que diccionarios en py)
//ejemplo de un objeto con varios tipos de elementos:
const obj={
    name: 'Lex Luthor',
    trabajos: [
      { year: 2018, empresa: 'LexCorp', salario: 5000, },
      { year: 2019, empresa: 'LexCorp', salario: 5300, },
      { year: 2020, empresa: 'LexCorp', salario: 4000, },
      { year: 2021, empresa: 'LexCorp', salario: 3000, },
      { year: 2022, empresa: 'LexCorp', salario: 3500, },
      { year: 2023, empresa: 'LexCorp', salario: 3050, },
    ],
}
//name:string
//trabajos:lista(dentro de la lista mas objetos(year:number,empresa:string,salario:number))
//...otro ejemplo:
//persona es un objeto
const persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 30,
    email: 'juan.perez@example.com'
};
//enlista los valores de las llaves
const valores = Object.values(persona);
console.log(valores); // devuelve ['Juan', 'Pérez', 30, 'juan.perez@example.com']
//lo anterior tambien se puede hacer:
const valores1 = [];
for (const propiedad in persona) {
  valores1.push(persona[propiedad]);//propiedad toma el valor de cada llave
}
//valores1=valores da lo mismo
//acceder a un valor segun llave
console.log(persona["nombre"])//'Juan'
//Object.keys(persona)=>obtiene llaves de persona formando una lista: ['nombre', 'apellido', 'edad', 'email']
//.map=>mapea es decir aplica algo a cada elemento de la lista anterior
//en la funcion retorna los valores segun cada llave
const valores3 = Object.keys(persona).map(function(propiedad) {
    return persona[propiedad];
});
console.log(valores3); // devuelve ['Juan', 'Pérez', 30, 'juan.perez@example.com']
//Object.entries(persona)
const lista=Object.entries(persona)//genera: [Array(2), Array(2), Array(2), Array(2)]
                                   //en cada array hay:
                                   //['nombre', 'Juan']
                                   //['apellido', 'Pérez']
                                   //['edad', 30]
//                                 //['email', 'juan.perez@example.com']

//arrow functions (funciones flecha) =>:
let suma = (a, b) => a + b;
console.log(suma(2, 3)); // 5

//.filter()
//filtra segun se cumpla una condicion
const numeros = [1, 2, 3, 4, 5, 6];
const numerosPares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});
console.log(numerosPares); // devuelve [2, 4, 6]

//.reduce() aplica una funcion a todos los elementos siendo el primero
//la primera entrada de la funcion un acumulador y la segunda entrada 
//el valor de la lista o del elemento de iteracion
lista=[1,2,3,4]
const sumar=(acumulador,nuevoValor)=>{
    return acumulador+nuevoValor;
};
const sumaLista=lista.reduce(sumar)
//sumaLista=1+2+3+4=10
//forma reducidad de lo anterior:
const sumList=lista.reduce((a,b)=>a+b)//10

//.find(), toma un funcion y entrega el primer elemento que cumple esa condicion
let personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 17 },
    { nombre: "Pedro", edad: 20 },
];
let personaMayorDeEdad = personas.find(function(persona) {
    return persona.edad > 18;
});
console.log(personaMayorDeEdad); // { nombre: "Juan", edad: 25 }
//a continuacion se hace la forma reducida con arrow functions (funciones flecha) =>:
//.find(variable=>condicion con la variable)
let personaMayorDeEdad = personas.find(persona => persona.edad > 18);
console.log(personaMayorDeEdad); // { nombre: "Juan", edad: 25 }

//.slice(), .slice(incio, fin) no modifica el array original, sino que devuelve una nueva matriz 
//que contiene una copia de los elementos seleccionados.
const array = [1, 2, 3, 4, 5];
const newArray = array.slice(1, 3);//devuelve una lista desde la posicion 1 hasta la 3
console.log(newArray); // Output: [2, 3]

//.splice(), eliminar o agregar elementos en un array en una posición específica. 
//Este método modifica el array original.
const array = [1, 2, 3, 4, 5];
array.splice(1, 2);//elimina desde la posicion 1 a la 2
console.log(array); // Output: [1, 4, 5]
//tambien puede agregar en caso de que no esten los valores dentro desde la posicion 2 array
//se agregara [6, 7, 8]
array.splice(2, 0, 6, 7, 8);
console.log(array); // Output: [1, 4, 6, 7, 8, 5]

//.forEach(), iterar sobre los elementos de un array y ejecutar una función en cada uno de ellos.
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(function(numero) {
  console.log(numero);
});
//1
//2
//3
//4
//5


//revisar mas metodos de array:
//https://static.platzi.com/media/user_upload/arrays-7d61b443-5ae4-44f5-855f-88be36e6247b.jpg
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//
//function (){} //eso es un funcion anonima

//% modulo: da el residuo
console.log(6%2)//0
console.log(7%2)//1

//en los condiciones el cero, undifined, false es falso

//operador !: devuelve falso si es falso
//!(operacion)
console.log(!(10%2))//true
console.log(!(7%2))//false

//math.floor(), redonde para abajo
Math.floor(10.1)//10

//Math.round(), obtiene el siguiente numero mas cercano
//(si es >.5 redondea hacia arriba, si es <.5 redonda hacia abajo)
Math.round(2.5) // output: 3
Math.round(2.49) // output: 2

//Math.ceil(), redondea hacia arriba
Math.ceil(2.5) // output: 3
Math.ceil(2.49) // output: 3
Math.ceil(2.1) // output: 3

//.sort()
const lista=[1,1,22,3,1,4]
function ordenar(selector,nuevoValor){
    //selector=1, nuevoValor=[1,22,3,1,4]
    //compara a selector con todos los valores que estan en nuevoValor
    if(selector>nuevoValor){
        return 1;
    }else if(selector==nuevoValor){
        return 0;
    }else if(selector<nuevoValor){
        return -1;
    }
}
const lista1=lista.sort(ordenar)//lista1=[1, 1, 1, 3, 4, 22]
//forma condensada del .sort():
// Ordenar un array de números de forma ascendente
const numeros = [3, 5, 1, 4, 2];
numeros.sort();
console.log(numeros); // [1, 2, 3, 4, 5]
// Ordenar un array de números de forma descendente
const numeros2 = [3, 5, 1, 4, 2];
numeros2.sort(function(a, b) {
  return b - a;
});
// Ordenar un array de objetos por una propiedad de texto de forma ascendente
const frutas = [
{ nombre: 'Manzana', color: 'Rojo' },
{ nombre: 'Plátano', color: 'Amarillo' },
{ nombre: 'Naranja', color: 'Naranja' }
];
frutas.sort(function(a, b) {
if (a.nombre < b.nombre) {
return -1;
}
if (a.nombre > b.nombre) {
return 1;
}
return 0;
});
console.log(frutas);
/*
[
{ nombre: 'Manzana', color: 'Rojo' },
{ nombre: 'Naranja', color: 'Naranja' },
{ nombre: 'Plátano', color: 'Amarillo' }
]
*/
//otra forma:
const lista2=listadesorden.sort((a,b)=>a-b)






//agregar cosas (lista,valores,objetos, funciones) a un objeto literal
const PlatziMath = {};
PlatziMath.mensaje="Hola"
console.log(PlatziMath.mensaje)//Hola
PlatziMath.esPar = function esPar(lista) {
    return !(lista.length % 2);
}//haciendo esto se guarda la funcion esPar y hay que entrarle un lista
const x=PlatziMath.esPar([1,2,3,4])//se llama a la funcion es par y se agrega [1,2,3,4]
console.log(x)//true, envia true ya que la longitud e la lista tiene numero par=4
//al final el objeto es:
PlatziMath={mensaje: 'Hola', esPar: ƒ }// ƒ es la funcion esPar(lista)

//.push(), agrega elementos a una lista
let numeros = [];
numeros.push(1, 2, 3);//aqui se agregan 3 elementos
console.log(numeros); // [1, 2, 3]

//para agregar varias fracciones de script y se deben poner en el html
//de forma ordenada segun como se necesiten los archivos, de esta forma
//se obtiene un script dividido en tres partes sin necesidad de usar import
//de esta forma por ejemplo primero en salario.js hay informacion que se usara en
//analisis.js
/* 
<script src="./platzimath.js"></script>
<script src="./salarios.js"></script>
<script src="./analisis.js"></script> 
*/

//revision de obtencion de informacion en objetos literals:
const salarios = [
{
    name: 'Juanita',
    trabajos: [
    { year: 2018, empresa: 'Freelance', salario: 250, },
    { year: 2019, empresa: 'Freelance', salario: 250, },
    { year: 2020, empresa: 'Industrias Mokepon', salario: 850, },
    { year: 2021, empresa: 'Industrias Mokepon', salario: 1050, },
    { year: 2022, empresa: 'Industrias Mokepon', salario: 1250, },
    { year: 2023, empresa: 'Industrias Mokepon', salario: 1250, },
    ],
},
{
    name: 'Alex',
    trabajos: [
    { year: 2018, empresa: 'Freelance', salario: 450, },
    { year: 2019, empresa: 'Freelance', salario: 550, },
    { year: 2020, empresa: 'Freelance', salario: 400, },
    { year: 2021, empresa: 'Industrias Mokepon', salario: 1050, },
    { year: 2022, empresa: 'Industrias Mokepon', salario: 1250, },
    { year: 2023, empresa: 'Industrias Mokepon', salario: 1250, },
    ],
}
]
function encontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda);
    //retorna nombre en la llave name dentro del objeto que esta en la lista
    //salarios
}
function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;//devuelve una lista
    //encontrarPersona(nombrePersona) devuelve el objeto con llave name==condicion
    //devuelve lo que esta en trabajos

    const salarios = trabajos.map(function (elemento) {
      return elemento.salario;
      //aqui retorna una lista con los salarios
    });
  
    const medianaSalarios = PlatziMath.calcularMediana(salarios);
    //salarios es una lista
  
    console.log(medianaSalarios);
    return medianaSalarios;
}

















