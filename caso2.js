// Yulisa Quispe Quispe

const historialSesiones = [
    { codigo: 1001, tipo: "Caminata ligera", duracionMin: 20, calorias: 110 },
    { codigo: 1015, tipo: "Movilidad y estiramiento", duracionMin: 30, calorias: 135 },
    { codigo: 1028, tipo: "Fuerza en casa", duracionMin: 45, calorias: 290 },
    { codigo: 1042, tipo: "Trote continuo", duracionMin: 50, calorias: 380 },
    { codigo: 1060, tipo: "Partido de fútbol", duracionMin: 60, calorias: 520 },
    { codigo: 1077, tipo: "Circuito funcional", duracionMin: 75, calorias: 610 },
    { codigo: 1095, tipo: "Ruta larga", duracionMin: 90, calorias: 740 }
];

function buscarSesionPorCodigo(sesionesOrdenadas, codigoBuscado){

    let inicio = 0;
    let fin = sesionesOrdenadas.length - 1;
    let saltos = 0;

    while(inicio <= fin){
        saltos++;

        let mitad = Math.floor((inicio + fin) / 2);

        console.log(`Rango actual: desde índice ${inicio} hasta ${fin}`);
        console.log(`El centro está en el índice [${mitad}] y su código es: ${sesionesOrdenadas[mitad].codigo}`);

        // Caso 1 - si el código se ubica en el centro
        if(sesionesOrdenadas[mitad].codigo === codigoBuscado){
            console.log(`Sesión encontrada`);
            console.log(`Código: ${sesionesOrdenadas[mitad].codigo}`);
            console.log(`Tipo: ${sesionesOrdenadas[mitad].tipo}`);
            console.log(`Duración en minutos: ${sesionesOrdenadas[mitad].duracionMin}`);
            console.log(`Calorías: ${sesionesOrdenadas[mitad].calorias}`);
            console.log(`Índice en el arreglo: ${mitad}`);
            console.log(`Total de saltos: ${saltos}`);
            return sesionesOrdenadas[mitad];
        }
        // Caso 2 - si el código es mayor, descartamos la mitad izquierda
        else if(sesionesOrdenadas[mitad].codigo < codigoBuscado){
            console.log(`Descartamos la mitad izquierda`);
            inicio = mitad + 1;
        }
        // Caso 3 - si el código es menor, descartamos la mitad derecha
        else{
            console.log(`Descartamos la mitad derecha`);
            fin = mitad - 1;
        }
    }

    // El código no se encuentra
    console.log(`No se encontró ninguna sesión con el código ${codigoBuscado}`);
    return null;
}

buscarSesionPorCodigo(historialSesiones, 1042);
buscarSesionPorCodigo(historialSesiones, 1050);