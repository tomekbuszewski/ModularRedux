import React from 'react';
import { render as reactRender } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import { store } from './kernel'

import App from './globals/components/App';

const rootEl = document.getElementById('root');
const render = Component =>
  reactRender(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    rootEl
  );

render(App);
if (module.hot) {
  module.hot.accept('./globals/components/App', () => render(require('./globals/components/App').default));
}

