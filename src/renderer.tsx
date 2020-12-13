import './assets/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import { AppInitiailzer } from './AppInitializer';

const App = () => {
    return <Layout />
}

const runApp = ()=>{

    AppInitiailzer().then(()=>{

        ReactDOM.render(<App />, document.getElementById('root'));
    })

    ReactDOM.render(<div>Loading...</div>, document.getElementById('root'));
}

runApp();