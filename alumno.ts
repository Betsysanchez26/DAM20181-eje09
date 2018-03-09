interface AlumnoD{
    noControl:string;
    nombre:string;
    apellidos:string;
    promedio:number;
    genero:string;
    fechaDeNacimiento:string;
    activo:boolean;
}//Agregar
export class Alumno{
    alumnos= Array<AlumnoD>();
     agregar(nC:string,name:string,app:string,prom:number,gen:string,fNac:string,act:boolean):void{
        let newAlumno:any;
        newAlumno={
            noControl:nC,
            nombre:name,
            apellidos:app,
            promedio:prom,
            genero:gen,
            fechaDeNacimiento:fNac,
            activo:act
    }
    this.alumnos.push(newAlumno);
    console.log("---------SE AGREGO NUEVO ALUMNO-------------");
    console.log(this.alumnos[this.alumnos.length-1]);
}
//Borrar
     arrayFiltrado;
    borrar(nC:string){
        
        for(let i=0;i<this.alumnos.length;i++){
            if(nC===this.alumnos[i].noControl){
                this.arrayFiltrado=this.alumnos.splice(i,1);
                this.alumnos=this.arrayFiltrado;
            }
            
        console.log("----------NUEVO ARREGLO------------");
        console.log(this.alumnos[i]);
        }

    }
//Imprimir
    leer(nC:string){
        for(let i=0;i<this.alumnos.length;i++){
            if(nC==""){
                console.log("--------------IMPRIME TODOS LOS ELEMENTOS DEL ARREGLO----------------------");
                console.log(this.alumnos[i]);
            }else if(nC===this.alumnos[i].noControl){
                console.log("--------------IMPRIME UN ELEMETO EN ESPECIFICO DEL ARREGLO----------------------");
                console.log(this.alumnos[i]);
            }
        }
    }
//Modificar
    modificar(ncViejo:string,ncNuevo:string){
        for(let i=0;i<this.alumnos.length;i++){
            if(ncViejo===this.alumnos[i].noControl){
                this.alumnos[i].noControl=ncNuevo;
                console.log("-------------SE ACTUALIZO NUMERO DE CONTROL-----------")
                console.log(this.alumnos[i]);
            }
        }
    }
}
