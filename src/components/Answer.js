import * as React from "react";

export default class Answer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            doShowText: false
        }
    }


    render() {
        const {titleText: answerText} = this.props;
        const {doShowText} = this.state;
        return (
            <p>{doShowText && answerText}</p>
        );
    }
}