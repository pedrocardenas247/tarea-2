let variables = ["Junio", 0.2, "Amarillo", 9, "Perla", 0.3];

let nuevo = [];

for (let i = variables.length - 1; i < variables.length; i++) {
    nuevo.push(variables[variables.length - 1]);

    for (let j = 0; j < variables.length - 1; j++) {
        nuevo.push(variables[j]);
    }
} {
    console.log(nuevo);
}