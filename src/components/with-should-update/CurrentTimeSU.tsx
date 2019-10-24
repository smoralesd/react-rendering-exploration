import React from "react";

import { CurrentTimeProps } from "../../types/CurrentTimeProps";

export class CurrentTimeSU extends React.Component<CurrentTimeProps> {
  public render() {
    return (
      <div>
        current time: <span>{this.props.currentTime.toLocaleString()}</span>
      </div>
    );
  }

  public shouldComponentUpdate(nextProps: CurrentTimeProps): boolean {
      return this.props.currentTime !== nextProps.currentTime;
  }
}
