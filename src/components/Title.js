import * as React from "react";

export default class Title extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            doShowText: false
        }
    }


    render() {
        const {titleText} = this.props;
        const {doShowText} = this.state;
        return (
            <p>{doShowText && titleText}</p>
        );
    }
}