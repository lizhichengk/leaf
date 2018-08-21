import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ControlPanel from './components/ControlPanel';
import store from './Stores/Store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ControlPanel />
    </Provider>
    ,document.getElementById('root')
    );
registerServiceWorker();
