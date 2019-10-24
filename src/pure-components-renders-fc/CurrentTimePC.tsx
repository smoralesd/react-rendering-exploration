import React from "react";
import { CurrentTimeProps } from "../types/CurrentTimeProps";
import { CurrentTimeFC } from "../ai-web-similar/CurrentTime";

export class CurrentTimePC extends React.PureComponent<CurrentTimeProps> {
    public render() {
        return <CurrentTimeFC {...this.props}/>;
    }
}