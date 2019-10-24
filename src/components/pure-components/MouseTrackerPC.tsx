import React from "react";

import { MouseTrackerProps } from "../../types/MouseTrackerProps";

export class MouseTrackerPC extends React.PureComponent<MouseTrackerProps> {
  public render() {
    return (
      <div>
        Mouse position:
        <div>x: {this.props.mousePosition.x}</div>
        <div>y: {this.props.mousePosition.y}</div>
      </div>
    );
  }
}
