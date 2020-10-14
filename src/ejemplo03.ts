/*
declaramos una clase se escriben con mayúscula
las clases están formadas por atributos y métodos
el método constructor se invoca cuando creo
un nuevo objeto de la forma new NombreClase()
en este caso new Ordenador("Dell")
*/
export class Ordenador{
    private "_marca": string
    private "_procesador": string
    private "_memoria": number
    constructor(_marca: string, _memoria: number){
        this._marca = _marca
        this._memoria = _memoria
    }
    set procesador(_procesador: string){
        this._procesador = _procesador
    }
    get procesador(){
        return this._procesador
    }
    set marca(_marca: string){
        this._marca = _marca
    }
    get marca(){
        return this._marca
    }
    get precio(){
        let precio: number
        if (this._memoria > 8){
            precio = 580
        }else{
            precio = 500
        }
        return precio
    }

}
