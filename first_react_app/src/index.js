import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ControlPanel from './components/ControlPanel';
import store from './Stores/Store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter,Route,Link} from 'react-router-dom';
import Home from './view/Home';
import About from './view/About';
import NotFound from './view/NotFound';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li> <link to='/'></link></li>
                    <li> <link to='/about'></link></li>
                    <li> <link to='/notFound'></link></li>
                </ul>
                <Route path='/' exact component={Home}></Route>
                <Route path='/about' component={About}></Route>
                <Route path='/notFound' component={NotFound}></Route>
            </div>
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root')
    );
registerServiceWorker();
