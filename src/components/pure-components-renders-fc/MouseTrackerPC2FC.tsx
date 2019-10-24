import React from "react";
import { MouseTrackerFC } from "../ai-web-similar/MouseTrackerFC";
import { MouseTrackerProps } from "../../types/MouseTrackerProps";

export class MouseTrackerPC2FC extends React.PureComponent<MouseTrackerProps> {
    public render() {
        return <MouseTrackerFC {...this.props}/>
    }
}