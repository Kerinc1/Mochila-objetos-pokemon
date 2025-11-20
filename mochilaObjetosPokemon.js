// ---------------------------------------------
//  Ejercicio: Mochila de Objetos Pokémon
// ---------------------------------------------

// 1. Mochila inicial
const mochila = ["Poción", "Pokebola", "Antídoto"];

console.log(" Mochila inicial:", mochila);


// 2. Compra de objetos (agregar con push)
// El entrenador compra más objetos

mochila.push("Super Poción");
mochila.push("Revivir");
mochila.push("Hiper Poción");
mochila.push("Cuerda Huida");

console.log(" Después de comprar objetos:", mochila);

// 3. Uso de objetos (eliminar con splice) 
mochila.splice(0, 1);

// Buscar "Revivir" y eliminarlo
const indiceRevivir = mochila.indexOf("Revivir");

if (indiceRevivir !== -1) {
    mochila.splice(indiceRevivir, 1);
}

console.log(" Después de usar 2 objetos:", mochila);

// 4. Cambiar un objeto por otro 
// Reemplazar "Antídoto" por "Full Restore"

mochila[2] = "Full Restore";
console.log(" Después de reemplazar Antídoto por Full Restore:", mochila);

// 5. Error al intentar reasignar un const 
// mochila = [];

console.log(" Mochila final:", mochila);

console.log("\n--- INVENTARIO FINAL ---");
console.table(mochila);

