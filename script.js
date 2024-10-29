function calcularCalorias(ejercicio, intensidad, duracion) {
    let caloriasPorMinuto = 0;

    switch (ejercicio) {
        case 'correr':
            if (intensidad === 'baja') caloriasPorMinuto = 10;
            else if (intensidad === 'media') caloriasPorMinuto = 13;
            else if (intensidad === 'alta') caloriasPorMinuto = 16;
            break;
        case 'nadar':
            if (intensidad === 'baja') caloriasPorMinuto = 8;
            else if (intensidad === 'media') caloriasPorMinuto = 11;
            else if (intensidad === 'alta') caloriasPorMinuto = 14;
            break;
        case 'bicicleta':
            if (intensidad === 'baja') caloriasPorMinuto = 6;
            else if (intensidad === 'media') caloriasPorMinuto = 9;
            else if (intensidad === 'alta') caloriasPorMinuto = 12;
            break;
        default:
            return "Ejercicio no válido";
    }

    const caloriasQuemadas = caloriasPorMinuto * duracion;
    return "Calorías quemadas: " + caloriasQuemadas + " cal";
}

const ejercicio = prompt("Ingrese el tipo de ejercicio (correr, nadar, bicicleta):").toLowerCase();
const intensidad = prompt("Ingrese la intensidad del ejercicio (baja, media, alta):").toLowerCase();
const duracion = parseInt(prompt("Ingrese la duración del ejercicio en minutos:"), 10);

const resultado = calcularCalorias(ejercicio, intensidad, duracion);
alert(resultado);
