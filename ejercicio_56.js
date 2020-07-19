let nombres = ["Rafael", "Luisa", "Adriana", "Pedro", "Laura", "Manuel", "Bruna", "Marcos", "Cecilia", "Carlos"];
let edades = [20, 15, 35, 38, 45, 25, 44, 12, 34, 48];

edadMayor = 0;

for (let i = 0; i < edades.length; i++) {
    if (edadMayor < edades[i]) {
        edadMayor = edades[i];
    }
} {
    console.log(`El(a) alumno(a) con mas edad es: ${nombres[edades.indexOf(edadMayor)]}, tiene ${edadMayor} años.`);
}