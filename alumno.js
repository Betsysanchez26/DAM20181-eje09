"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alumno = /** @class */ (function () {
    function Alumno() {
        this.alumnos = Array();
        //Modificar
    }
    Alumno.prototype.agregar = function (nC, name, app, prom, gen, fNac, act) {
        var newAlumno;
        newAlumno = {
            noControl: nC,
            nombre: name,
            apellidos: app,
            promedio: prom,
            genero: gen,
            fechaDeNacimiento: fNac,
            activo: act
        };
        this.alumnos.push(newAlumno);
        console.log(this.alumnos[this.alumnos.length - 1]);
    };
    //Borrar
    Alumno.prototype.borrar = function (nC) {
        for (var i = 0; i < this.alumnos.length; i++) {
            if (nC === this.alumnos[i].noControl) {
                //this.alumnos.;
            }
        }
    };
    //Imprimir
    Alumno.prototype.leer = function (nC) {
        for (var i = 0; i < this.alumnos.length; i++) {
            if (nC == "") {
                console.log(this.alumnos[i]);
            }
            else if (nC === this.alumnos[i].noControl) {
                console.log(this.alumnos[i]);
            }
        }
    };
    return Alumno;
}());
exports.Alumno = Alumno;
