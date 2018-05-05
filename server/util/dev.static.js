const path = require('path');
const webpack = require('webpack');
const axios = require('axios');
const proxy = require('http-proxy-middleware');
const ReactDOMServer = require('react-dom/server');
const MemoryFs = require('memory-fs');

const serverConfig = require('../../build/webpack.config.server');

const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:8888/public/index.html')
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
};

const Module = module.constructor;
let serverBundle;

const mfs = new MemoryFs();
const serverCompiler = webpack(serverConfig);
serverCompiler.outputFileSystem = mfs;
serverCompiler.watch({}, (err, stats) => {
  if (err) throw err;
  stats = stats.toJson();
  stats.errors.forEach(console.error);
  stats.warnings.forEach(console.warn);

  const bundlePath = path.join(
    serverConfig.output.path,
    serverConfig.output.filename,
  );
  const bundle = mfs.readFileSync(bundlePath, 'utf-8');
  const m = new Module();
  m._compile(bundle, 'index.server.js');
  serverBundle = m.exports.default;
});

module.exports = function (app) {
  app.use('/public', proxy({
    target: 'http://localhost:8888',
  }));

  app.get('*', (req, res) => {
    const content = ReactDOMServer.renderToString(serverBundle);
    getTemplate()
      .then((template) => {
        res.send(template.replace('<!-- app -->', content));
      });
  });
};
