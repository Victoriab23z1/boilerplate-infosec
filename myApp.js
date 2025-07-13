const express = require('express');
const app = express();
const helmet = require('helmet');

// ✅ Ocultar el header X-Powered-By
app.use(helmet.hidePoweredBy());

const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});

// ✅ Exportar la app SOLO aquí
module.exports = app;
