const NOTAS = [11, 9, 15, 12, 18, 20, 13, 19, 10, 14, 18, 12, 17, 7, 20];

let suma = 0;
let arribaPromedio = [];

for (let i = 0; i < NOTAS.length; i++) {
    suma = suma + NOTAS[i];
}

let promedio = suma / NOTAS.length;

for (let j = 0; j < NOTAS.length; j++) {
    if (NOTAS[j] > promedio) {
        arribaPromedio.push(NOTAS[j]);
    }
} {
    console.log(`EL promedio del aula es: ${promedio.toFixed(2)}`);
    console.log(
        `EL numero de alumnos arriba del promedio es: ${arribaPromedio.length}`
    );
}