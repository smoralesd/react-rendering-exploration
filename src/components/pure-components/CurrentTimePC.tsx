import React from 'react';

import { CurrentTimeProps } from '../../types/CurrentTimeProps';

export class CurrentTimePC extends React.PureComponent<CurrentTimeProps> {
  public render() {
    return (
      <div>
        current time: <div>{this.props.currentTime.toLocaleString()}</div>
      </div>
    );
  }
}
