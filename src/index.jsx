import './index.less'
import React from 'react'
import {render} from 'react-dom'
import { createRoot } from 'react-dom/client';
import App from './components/App'
import { Provider } from 'react-redux';
import { store } from './reducers';

const root = createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
       
)