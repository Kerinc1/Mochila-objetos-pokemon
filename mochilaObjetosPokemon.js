// ---------------------------------------------
//  Ejercicio: Mochila de Objetos Pokémon
// ---------------------------------------------

// Mochila inicial
const mochila = ["Poción", "Pokebola", "Antídoto"];

console.log(" Mochila inicial:", mochila);


// Compra de objetos (agregar con push)
// El entrenador compra más objetos

mochila.push("Super Poción");
mochila.push("Revivir");
mochila.push("Hiper Poción");
mochila.push("Cuerda Huida");

console.log(" Después de comprar objetos:", mochila);

// Uso de objetos (eliminar con splice) 
mochila.splice(0, 1);

// Buscar "Revivir" y eliminarlo
const indiceRevivir = mochila.indexOf("Revivir");

if (indiceRevivir !== -1) {
    mochila.splice(indiceRevivir, 1);
}

console.log(" Después de usar 2 objetos:", mochila);

// Cambiar un objeto por otro 
// Reemplazar "Antídoto" por "Full Restore"

mochila[2] = "Full Restore";


console.log(" Después de reemplazar Antídoto por Full Restore:", mochila);

// Error al intentar reasignar un const 
// mochila = [];

console.log(" Mochila final:", mochila);


