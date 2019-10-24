import React from 'react';

import { CurrentTimeProps } from '../../types/CurrentTimeProps';

export class CurrentTimePC extends React.PureComponent<CurrentTimeProps> {
  public render() {
    return (
      <div>
        current time: <span>{this.props.currentTime.toLocaleString()}</span>
      </div>
    );
  }
}
