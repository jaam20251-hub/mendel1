const cruceSelect = document.getElementById('cruce');
const genotiposSpan = document.getElementById('genotipos');
const fenotiposSpan = document.getElementById('fenotipos');
const resultadosDiv = document.getElementById('resultados');

const cruzamientos = {
  "AA,AA": { gen: "100% AA", fen: "100% dominante" },
  "AA,aa": { gen: "100% Aa", fen: "100% dominante" },
  "Aa,Aa": { gen: "25% AA, 50% Aa, 25% aa", fen: "75% dominante, 25% recesivo" },
  "Aa,aa": { gen: "50% Aa, 50% aa", fen: "50% dominante, 50% recesivo" }
};

function mostrarResultados() {
  const seleccion = cruceSelect.value;
  const datos = cruzamientos[seleccion];
  genotiposSpan.textContent = datos.gen;
  fenotiposSpan.textContent = datos.fen;
  resultadosDiv.style.display = 'block';
}

function nuevoDesafio() {
  const opciones = Object.keys(cruzamientos);
  const aleatorio = opciones[Math.floor(Math.random() * opciones.length)];
  alert('🎯 ¿Qué proporciones genéticas y fenotípicas esperas si cruzas: ' + aleatorio.replace(',', ' x ') + '?');
}