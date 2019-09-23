import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import common_pt_br from "./translations/pt_br/common.json";
// import common_en from "./translations/en/common.json";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducer from './redux/reducers'
import '../src/styles/css/materialize.min.css'

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'pt_br',   // language to use
        resources: {    
            pt_br: {
                common: common_pt_br    // 'common' is our custom namespace
            }
        },
});

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <Provider store={createStore(reducer, {}, applyMiddleware(reduxThunk))}>
            <Router>
                <App />
            </Router>
        </Provider>
    </I18nextProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
