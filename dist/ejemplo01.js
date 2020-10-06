"use strict";
class Vehiculo {
    constructor(_matricula, marca) {
        this._matricula = _matricula;
        this._marca = marca;
    }
    getMatricula() {
        return this._matricula;
    }
    getMarca() {
        return this._marca;
    }
    setMarca(_marca) {
        this._marca = _marca;
    }
}
let v1;
let miVehiculo = new Vehiculo("1234ABC", "Opel");
v1 = new Vehiculo("5678XYZ", "Renault");
console.log(`La marca de v1 es: ${v1.getMarca()}`);
v1.setMarca("Seat");
console.log(`La marca de v1 es: ${v1.getMarca()}`);
console.log(`Los datos del vehículo son: Matrícula: ${miVehiculo.getMatricula()}, Marca: ${miVehiculo.getMarca()}.`);