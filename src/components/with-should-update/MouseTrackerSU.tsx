import React from "react";

import { MouseTrackerProps } from "../../types/MouseTrackerProps";

export class MouseTrackerSU extends React.Component<MouseTrackerProps> {
  public render() {
    return (
      <div>
        Mouse position:
        <div>x: {this.props.mousePosition.x}</div>
        <div>y: {this.props.mousePosition.y}</div>
      </div>
    );
  }

  public shouldComponentUpdate(nextProps: MouseTrackerProps) {
    const { x, y } = this.props.mousePosition;
    const { x: nextX, y: nextY } = nextProps.mousePosition;

    return x !== nextX || y !== nextY;
  }
}
