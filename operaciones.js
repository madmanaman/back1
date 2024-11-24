const fs = require('fs');

// Función para registrar una cita
function registrar(nombre, edad, animal, color, enfermedad) {
  const cita = { nombre, edad, animal, color, enfermedad };
  const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
  citas.push(cita);
  fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2), 'utf8');
  console.log("Cita registrada con éxito:", cita);
}

// Función para leer todas las citas
function leer() {
  const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
  console.log("Citas registradas:", citas);
}

module.exports = { registrar, leer };
