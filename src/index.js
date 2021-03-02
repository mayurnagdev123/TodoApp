import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import Reducer from './store/reducer/reducer'
import { createStore } from 'redux';

const app=(
<BrowserRouter>
<App />
</BrowserRouter>
)
const store=createStore(Reducer);
store.subscribe(()=>{
    console.log("[index.js]","Subscription Notification","----",store.getState());
})
ReactDOM.render(<Provider store={store}>{app}</Provider>, document.getElementById('root'));
registerServiceWorker();
