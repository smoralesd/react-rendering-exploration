import React from "react";
import "./App.css";
import { CurrentTimeFC } from "./components/functional-components/CurrentTimeFC";
import { MouseTrackerFC } from "./components/functional-components/MouseTrackerFC";
import { CurrentTimeProps } from "./types/CurrentTimeProps";
import { MouseTrackerProps } from "./types/MouseTrackerProps";
import { CurrentTimePC2FC } from "./components/pure-components-renders-fc/CurrentTimePC2FC";
import { MouseTrackerPC2FC } from "./components/pure-components-renders-fc/MouseTrackerPC2FC";
import { CurrentTimePC } from "./components/pure-components/CurrentTimePC";
import { MouseTrackerPC } from "./components/pure-components/MouseTrackerPC";
import { CurrentTimeSU } from "./components/with-should-update/CurrentTimeSU";
import { MouseTrackerSU } from "./components/with-should-update/MouseTrackerSU";

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
                <div className="left">
                    <h1>Passing the whole state</h1>
                    <h2>React.FC</h2>
                    <CurrentTimeFC {...this.state} />
                    <MouseTrackerFC {...this.state} />
                    <h2>React.PureComponent renders FC</h2>
                    <CurrentTimePC2FC {...this.state} />
                    <MouseTrackerPC2FC {...this.state} />
                    <h2>React.PureComponent</h2>
                    <CurrentTimePC {...this.state} />
                    <MouseTrackerPC {...this.state} />
                    <h2>React.Component with shouldComponentUpdate</h2>
                    <CurrentTimeSU {...this.state} />
                    <MouseTrackerSU {...this.state} />
                </div>
                <div className="right">
                    <h1>Passing only needed props</h1>
                    <h2>React.FC</h2>
                    <CurrentTimeFC currentTime={this.state.currentTime} />
                    <MouseTrackerFC mousePosition={this.state.mousePosition} />
                    <h2>React.PureComponent renders FC</h2>
                    <CurrentTimePC2FC currentTime={this.state.currentTime} />
                    <MouseTrackerPC2FC mousePosition={this.state.mousePosition} />
                    <h2>React.PureComponent</h2>
                    <CurrentTimePC currentTime={this.state.currentTime} />
                    <MouseTrackerPC mousePosition={this.state.mousePosition} />
                    <h2>React.Component with shouldComponentUpdate</h2>
                    <CurrentTimeSU currentTime={this.state.currentTime} />
                    <MouseTrackerSU mousePosition={this.state.mousePosition} />
                </div>
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
