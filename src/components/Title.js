import * as React from "react";

export default class Title extends React.Component {

    render() {
        const {titleText, doShowText} = this.props;
        return (
            <p>{doShowText && titleText}</p>
        );
    }
}