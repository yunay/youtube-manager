//import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';

const App = () => {
    return <Layout />
}

ReactDOM.render(<App />, document.getElementById('root'));