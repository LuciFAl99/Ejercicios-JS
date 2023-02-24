// ejercicio 1 y 10
/*
let miNombre = prompt("Ingrese su nombre:");
console.log(miNombre)
// 2 y 10
let miApellido = prompt("Ingrese su apellido:");
console.log(miApellido)
// 3 y 10
let miEdad = prompt("Ingrese su edad:");
console.log(miEdad)
//4 y 10
let miMascota = prompt("Ingrese su mascota:");
console.log(miMascota)
// 5 y 10
let edadMascota = prompt("Ingrese la edad de su mascota:")
console.log(edadMascota) 
// ejercicio 6
console.log(miNombre, miApellido, miEdad, miMascota) 
// ejercicio 7
let nombreCompleto = miNombre + " " + miApellido
console.log(nombreCompleto)
// ejercicio 8
let textoPresentacion = "Hola, mi nombre es " + nombreCompleto + " tengo " + miEdad + " años. Mi mascota se llama "+ miMascota + " y tiene " + edadMascota + " meses"
console.log(textoPresentacion)
// ejercicio 9
let sumaEdades = miEdad + edadMascota
console.log(sumaEdades)
let restaEdades = miEdad - edadMascota
console.log(restaEdades)
let productoEdades = miEdad * edadMascota
console.log(productoEdades)
let divisionEdades = miEdad / edadMascota
console.log(divisionEdades)  */

// ejercicio 11
const alumno = {
    nombreAlumno: "José",
    apellido: "Ferreyra",
    edad: 36,
    colorOjos: "Marrón",
    autoFavorito: "Falcon",
}
console.table(alumno)
console.log(alumno.nombreAlumno)
console.log(alumno.apellido)
console.log(alumno.edad)
console.log(alumno.colorOjos)
console.log(alumno.autoFavorito)

// ejercicio 12
const mascota = {
    nombreMascota: "Suni",
    tipoMascota: "Gata",
    edadMascota: 9,
    color: "Blanco",
    esDormilona: true,    
}
console.table(mascota)
console.log(mascota.nombreMascota)
console.log(mascota.tipoMascota)
console.log(mascota.edadMascota)
console.log(mascota.color)
console.log(mascota.esDormilona)

//ejercicio 13
let frutas = ["manzanas", "bananas", "peras", "duraznos", "sandías"]
console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

//ejercicio 14
let numeros = [6, 8, 7, 4, 3]
console.log(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

//ejercicio 15

let familia = ["mamá", "papá", "hermano", "tío", "abuelo"]
console.log(familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

// ejercicio 16
/*let textoAleatorio = "Hola, voy a comprar unas " + frutas[1] + ", quizas sean " + numeros[3] + " para llevarle a mi " + familia[4]
console.log(textoAleatorio)

//ejercicio 17
let miEdad = prompt("Ingrese su edad")
let edadCompañero = prompt("Ingrese la edad de su compañero")
let edadesIguales = miEdad === edadCompañero
console.log( "Mi edad es igual a la de mi compañero: ", edadesIguales)
let soyMayor = miEdad > edadCompañero
console.log("Mi edad es mayor a la de mi compañero: ",soyMayor)
let soyMenor = miEdad < edadCompañero
console.log("Mi edad es menor a la de mi compañero: ",soyMenor) */

// ejercicio 18
/*let soyMayorDeEdad = prompt("Ingrese su edad") >= 18
console.log ("Soy mayor de edad: "+ soyMayorDeEdad) */

// ejercicio 19
/*let edad = parseInt(prompt("Introducir edad:"))
let altura = parseInt(prompt("Introducir su altura: "))
let puedeSubir = edad > 6 && altura >= 120
console.log ("Puede subir a la atraccion: " + puedeSubir)*/

// ejercicio 20vip
let pase = prompt("Ingrese su pase:")
let saldo = parseInt(prompt("Ingrese su saldo:"))
let puedePasar = pase === "vip" || saldo > 1000
console.log("puede pasar: " + puedePasar)
