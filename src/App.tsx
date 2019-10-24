import React from "react";
import "./App.css";
import { CurrentTimeFC } from "./ai-web-similar/CurrentTime";
import { MouseTrackerFC } from "./ai-web-similar/MouseTracker";
import { CurrentTimeProps } from "./types/CurrentTimeProps";
import { MouseTrackerProps } from "./types/MouseTrackerProps";
import { CurrentTimePC } from "./pure-components-renders-fc/CurrentTimePC";
import { MouseTrackerPC } from "./pure-components-renders-fc/MouseTrackerPC";

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
        <CurrentTimeFC {...this.state} />
        <MouseTrackerFC {...this.state} />
        <h1>React.FC, Passing only needed props</h1>
        <CurrentTimeFC currentTime={this.state.currentTime} />
        <MouseTrackerFC mousePosition={this.state.mousePosition} />
        <h1>React.PureComponent, Passing the whole state</h1>
        <CurrentTimePC {...this.state} />
        <MouseTrackerPC {...this.state} />
        <h1>React.PureComponent, Passing only needed props</h1>
        <CurrentTimePC currentTime={this.state.currentTime} />
        <MouseTrackerPC mousePosition={this.state.mousePosition} />
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
