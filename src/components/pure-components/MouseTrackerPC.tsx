import React from "react";

import { MouseTrackerProps } from "../../types/MouseTrackerProps";

export class MouseTrackerPC extends React.PureComponent<MouseTrackerProps> {
  public render() {
    return (
      <div>
        Mouse position: <span>x: {this.props.mousePosition.x}</span> <span>y: {this.props.mousePosition.y}</span>
      </div>
    );
  }
}
