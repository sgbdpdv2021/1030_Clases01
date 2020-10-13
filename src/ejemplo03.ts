class Ordenador{
    "marca": string
    "procesador": string

    constructor(marca: string){
        this.marca = marca
    }
}

let o1 = new Ordenador("Asus")

// o1.marca = "Dell"
o1.procesador = "i7"

console.log(o1.procesador)
console.log(o1.marca)