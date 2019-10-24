import React from "react";
import { CurrentTimeProps } from "../../types/CurrentTimeProps";
import { CurrentTimeFC } from "../functional-components/CurrentTimeFC";

export class CurrentTimePC2FC extends React.PureComponent<CurrentTimeProps> {
    public render() {
        return <CurrentTimeFC {...this.props}/>;
    }
}