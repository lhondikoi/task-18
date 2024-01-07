import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // react-redux

import App from './App'
import store from './store' // redux

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
