import * as React from "react";

export default class Answer extends React.Component {

    render() {
        const {answerText, answerCount, doShowText, index} = this.props;
        return (
            <>
                <p>{index + 1} {doShowText && answerText} {doShowText && answerCount}</p>
            </>
        );
    }
}