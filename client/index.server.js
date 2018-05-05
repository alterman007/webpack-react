import React from 'react';
import { StaticRouter } from 'react-router-dom';
import App from './views/app';

export default (req) => (
  <StaticRouter
    location={req.url}
    context={{}}
  >
    <App />
  </StaticRouter>
);
