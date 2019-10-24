import React from "react";

import { CurrentTimeProps } from "../../types/CurrentTimeProps";

export class CurrentTimeSU extends React.Component<CurrentTimeProps> {
  public render() {
    return (
      <div>
        current time: <div>{this.props.currentTime.toLocaleString()}</div>
      </div>
    );
  }

  public shouldComponentUpdate(nextProps: CurrentTimeProps): boolean {
      return this.props.currentTime !== nextProps.currentTime;
  }
}
