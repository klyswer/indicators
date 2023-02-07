import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {reduxStore} from './app/store';
import App from './App';

const store = reduxStore();

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <App />
    </Provider>
);
