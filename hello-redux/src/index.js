import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from "./store";
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
const render = () => ReactDOM.render(<App />,
document.getElementById("root"));
render();
registerServiceWorker();


store.subscribe(render);