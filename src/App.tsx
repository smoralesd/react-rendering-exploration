import React from "react";
import "./App.css";
import { CurrentTimeFC, CurrentTimeProps } from "./ai-web-similar/CurrentTime";
import {
  MouseTrackerFC,
  MouseTrackerProps
} from "./ai-web-similar/MouseTracker";

export type Point = {
  x: number;
  y: number;
};

type AppState = CurrentTimeProps & MouseTrackerProps;

export default class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      currentTime: new Date(),
      mousePosition: {
        x: 0,
        y: 0
      }
    };
  }

  public componentDidMount(): void {
    setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  public render() {
    return (
      <div className="App" onMouseMove={this.onMouseOver}>
        <h1>React.FC, Passing the whole state</h1>
        <span>
          <CurrentTimeFC {...this.state} />
        </span>
        <span>
          <MouseTrackerFC {...this.state} />
        </span>
      </div>
    );
  }

  private onMouseOver = (e: React.MouseEvent) => {
    this.setState({
      mousePosition: {
        x: e.screenX,
        y: e.screenY
      }
    });
  };
}
