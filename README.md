# Contador con Webpack — proyecto de ejemplo

## Instalar dependencias
```bash
npm install
```

## Levantar en modo desarrollo (abre el navegador solo)
```bash
npm start
```

## Generar la versión final en dist/
```bash
npm run build
```

Estructura:
```
webpack-demo/
├── src/
│   ├── index.js        ← punto de entrada
│   ├── contador.js      ← lógica del contador (módulo aparte)
│   ├── estilos.css       ← estilos
│   └── index.html        ← plantilla usada por HtmlWebpackPlugin
├── webpack.config.js
├── package.json
└── README.md
```
