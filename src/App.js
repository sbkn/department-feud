import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./components/Title";
import Answer from "./components/Answer";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Title titleText="Title goes here"/>
                <Answer answerText="Answer 1"/>
            </header>
        </div>
    );
}

export default App;
