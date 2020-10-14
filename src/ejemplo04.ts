import { Ordenador } from './ejemplo03'

let o1 = new Ordenador("Asus", 16)
o1.procesador = "i7"
console.log(o1.procesador)
console.log(o1.marca)
o1.marca = "Dell"
console.log(`La nueva marca es: ${o1.marca}`)
console.log(`El precio es: ${o1.precio}`)