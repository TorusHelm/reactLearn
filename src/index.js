import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
// import NewApp from './NewApp';
// import AppUpdate from './AppUpdate';
// import AppHandle from './AppHandle';
// import AppLifecicles from './AppLifecicles';
// import AppConditional from './AppConditional';
// import AppConditional2 from './AppConditional2';
// import App from './App';
// import AppLession from './AppLession';
// import AppLoadingData from './AppLoadingData';
// import AppForm from './AppForm';
// import AppForm2 from './AppForm2';
// import AppFormPractice from './AppFormPractice';
import AppContainerComponent from './AppContainerComponent';

ReactDOM.render(<AppContainerComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
