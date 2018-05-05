const fs = require('fs');
const path = require('path');
const express = require('express');
const serveFavicon = require('serve-favicon');
const ReactDOMServer = require('react-dom/server');

const isDev = process.env.NODE_ENV === 'development';

const app = express();
app.use(serveFavicon(path.join(__dirname, '../favicon.ico')));
if (!isDev) {
  const serverEntry = require('../dist/index.server').default;
  const template = fs.readFileSync(
    path.join(__dirname, '../dist/index.html'),
    'utf-8',
  );
  app.use('/public', express.static(path.join(__dirname, '../dist')));
  app.get('*', (req, res) => {
    const appString = ReactDOMServer.renderToString(serverEntry);
    res.send(template.replace('<!-- app -->', appString));
  });
} else {
  const devStatic = require('./util/dev.static');
  devStatic(app);
}

app.listen(3333, () => {
  console.log('http://localhost:3333');
});
