import { Point } from "../App";
import React from "react";

export type MouseTrackerProps = {
    mousePosition: Point;
}

export const MouseTrackerFC: React.FC<MouseTrackerProps> = ({mousePosition: position}) => {
    return <div>
        Mouse position:
        <div>x: {position.x}</div>
        <div>y: {position.y}</div>
    </div>
}