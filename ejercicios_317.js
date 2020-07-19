const pagoPorHora = 10;

let valores = [];

let sueldoSemanal = [];

let sumaTotal = 0;

let choferes = [{
        nombre: "Luis",
        horas: [8, 7, 6, 2, 7, 0],
    },
    {
        nombre: "Jose",
        horas: [10, 7, 5, 9, 4, 6],
    },
    {
        nombre: "Alberto",
        horas: [9, 6, 3, 8, 3, 8],
    },
    {
        nombre: "Pablo",
        horas: [6, 3, 9, 2, 0, 6],
    },
    {
        nombre: "Roberto",
        horas: [8, 5, 9, 6, 3, 5],
    },
];

for (let i = 0; i < choferes.length; i++) {
    let suma = choferes[i].horas;
    let pagoSemanal = suma.reduce((a, b) => a + b, 0);
    sueldoSemanal.push(pagoSemanal * pagoPorHora * 6);
    console.log(`---Reporte ${i + 1}---`);
    console.log(`${choferes[i].nombre} trabajo: ${pagoSemanal} horas.`);
    console.log(
        `Su sueldo de esta semana es: ${pagoSemanal * pagoPorHora * 6} soles.`
    );
}
for (let j = 0; j < choferes.length; j++) {
    valores.push(choferes[j].horas[j]);
} {
    console.log(`---Reporte General ---`);
    console.log(
        ` trabajo mas horas el dia lunes:${Math.max.apply(null, valores)} horas.`
    );
}

sueldoSemanal.forEach(function(sueldoSemanal) {
    sumaTotal += sueldoSemanal;
});
console.log(`La empresa pagara esta semana: ${sumaTotal} soles`);