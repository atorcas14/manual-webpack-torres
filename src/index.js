import './estilos.css';                 // Webpack incluirá este CSS en el bundle gracias a los loaders
import { crearContador } from './contador.js';

const contador = crearContador(0);

const valorEl = document.getElementById('valor');
const estadoEl = document.getElementById('estado');

function actualizarVista() {
  valorEl.textContent = contador.obtenerValor();
  estadoEl.textContent = contador.esPar() ? 'Par' : 'Impar';
}

document.getElementById('btn-mas').addEventListener('click', () => {
  contador.incrementar();
  actualizarVista();
});

document.getElementById('btn-menos').addEventListener('click', () => {
  contador.decrementar();
  actualizarVista();
});

actualizarVista();
