import * as React from "react";

export default class Answer extends React.Component {

    render() {
        const {answerText, answerCount, doShowText} = this.props;
        return (
            <>
                <p>{doShowText && answerCount}</p>
                <p>{doShowText && answerText}</p>
            </>
        );
    }
}