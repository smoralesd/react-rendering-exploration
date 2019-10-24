import React from "react";

import { MouseTrackerProps } from "../../types/MouseTrackerProps";

export class MouseTrackerSU extends React.Component<MouseTrackerProps> {
  public render() {
    return (
      <div>
        Mouse position: <span>x: {this.props.mousePosition.x}</span> <span>y: {this.props.mousePosition.y}</span>
      </div>
    );
  }

  public shouldComponentUpdate(nextProps: MouseTrackerProps) {
    const { x, y } = this.props.mousePosition;
    const { x: nextX, y: nextY } = nextProps.mousePosition;

    return x !== nextX || y !== nextY;
  }
}
