// Yulisa Quispe Quispe

const asistentes = [
    { dni: "72849102", nombre: "Lucía Mendoza", entrada: "VIP" },
    { dni: "45192034", nombre: "Mateo Vargas", entrada: "General" },
    { dni: "80129384", nombre: "Sofía Castro", entrada: "Estudiante" },
    { dni: "10293847", nombre: "Diego Paredes", entrada: "VIP" },
    { dni: "65748392", nombre: "Valeria Ríos", entrada: "General" }
];

function verificarIngreso(listaAsistentes, dniBuscado){

    let pasos = 0;

    for(let i = 0; i < listaAsistentes.length; i++){
        pasos++;

        console.log(`Revisando asistente [${i}]: ${listaAsistentes[i].nombre}`);

        // Si el DNI coincide, mostramos la bienvenida
        if(listaAsistentes[i].dni === dniBuscado){
            console.log(`Bienvenido ${listaAsistentes[i].nombre}, tu entrada es ${listaAsistentes[i].entrada}`);
            console.log(`El número de pasos realizados es ${pasos}`);
            return listaAsistentes[i];
        }
    }

    // Si termina el recorrido, el DNI no está registrado
    console.log(`Acceso denegado: DNI no registrado`);
    console.log(`El número de pasos realizados es ${pasos}`);
    return null;
}

verificarIngreso(asistentes, "80129384");
verificarIngreso(asistentes, "11111111");