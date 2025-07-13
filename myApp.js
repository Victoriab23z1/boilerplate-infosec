const express = require('express');
const helmet = require('helmet');

const app = express();

// ✅ Middleware requerido por FreeCodeCamp para ocultar "X-Powered-By"
app.use(helmet.hidePoweredBy());

// ✅ Exportar la app para que los tests de freeCodeCamp funcionen
module.exports = app;
