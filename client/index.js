import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { AppContainer } from 'react-hot-loader';
import App from './views/app';

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app'),
);

// const render = (Component) => {
//   ReactDOM.render(
//     <AppContainer>
//       <App />
//     </AppContainer>,
//     document.querySelector('#app'),
//   );
// };

// render(App);

// if (module.hot) {
//   module.hot.accept('./app.js', () => {
//     const UpdateApp = require('./app').default;
//     render(UpdateApp);
//   })
// }

