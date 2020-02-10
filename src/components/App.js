import React from 'react';
import logo from '../logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="App-header">
                Hello fusion 3
            </div>
            <div className="App-body">
                <h5>Pipelines</h5>
                <ul>Index</ul>
                <ul>Query</ul>
            </div>

        </div>
    );
}

function test(doc) {
    return "Hello Sean";
}

export default App;
