class Vehiculo {
    private _matricula: string
    private _marca: string

    constructor(_matricula: string, marca: string){
        this._matricula = _matricula
        this._marca = marca
    }
    getMatricula(){
        return this._matricula
    }
    getMarca(){
        return this._marca
    }
    get marca(){
        return this._marca
    }
    setMarca(_marca: string){
        this._marca = _marca
    }
    set marca (_marca: string){
        this._marca = _marca
    }
}
let v1: Vehiculo
let miVehiculo = new Vehiculo("1234ABC", "Opel")
v1 = new Vehiculo("5678XYZ", "Renault")
console.log(`La marca de v1 es: ${v1.getMarca()}`)
v1.setMarca("Seat")
v1.marca = "Maseratti"
console.log(`La marca de v1 es: ${v1.getMarca()}`)
console.log(`Los datos del vehículo son: Matrícula: ${miVehiculo.getMatricula()}, Marca: ${miVehiculo.marca}.`)