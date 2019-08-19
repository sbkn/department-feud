import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./components/Title";
import Answer from "./components/Answer";
import Game from "./Resources/it-sec-quiz.json";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>

                {Game.questions.map(question => {
                    console.log(question.titleText);
                    return(
                        <>
                            <Title doShowText={true} titleText={question.titleText}/>
                            {question.answers.map(answer => {
                                return (
                                    <Answer doShowText={true} answerText={answer.answerText}/>
                                )
                            })}
                        </>
                    );
                })}
            </header>
        </div>
    );
}

export default App;
