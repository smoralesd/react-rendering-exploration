import React from "react";
import { MouseTrackerFC } from "../ai-web-similar/MouseTracker";
import { MouseTrackerProps } from "../types/MouseTrackerProps";

export class MouseTrackerPC extends React.PureComponent<MouseTrackerProps> {
    public render() {
        return <MouseTrackerFC {...this.props}/>
    }
}