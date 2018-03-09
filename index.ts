import { Alumno } from "./alumno";

let nuevoAlumno = new Alumno ();

nuevoAlumno.agregar(`14401007`,`Betsy`,`Sanchez Carrillo`,95,`F`,`26-06-1996`,true);
nuevoAlumno.agregar(`14400968`,`José`,`Monroy Salcedo`,90,`M`,`28-04-1995`,true);
nuevoAlumno.agregar(`14400944`,`Ania`,`Vega Rosales`,100,`F`,`26-04-1997`,true);
nuevoAlumno.agregar(`14401095`,`Mariana`,`Sanchez Morales`,80,`F`,`14-07-1998`,true);
nuevoAlumno.agregar(`14401022`,`Diego`,`Carrillo Martinez`,77,`M`,`15-12-1997`,false);
nuevoAlumno.agregar(`14401034`,`Yashira`,`Sanchez Carrillo`,98,`F`,`08-11-1996`,true);

//imprime todos los elementos del arreglo
nuevoAlumno.leer("");
//imprime un elemento en especifico del arreglo
nuevoAlumno.leer("14401007");