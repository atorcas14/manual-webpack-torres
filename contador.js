// Módulo independiente: Webpack resolverá el import que se hace
// desde index.js y lo incluirá en el mismo bundle final.
export function crearContador(valorInicial = 0) {
  let valor = valorInicial;

  return {
    incrementar: () => ++valor,
    decrementar: () => --valor,
    obtenerValor: () => valor,
    esPar: () => valor % 2 === 0
  };
}
