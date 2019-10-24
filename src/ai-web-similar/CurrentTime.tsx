import React from "react";

export type CurrentTimeProps = {
    currentTime: Date;
}

export const CurrentTimeFC: React.FC<CurrentTimeProps> = ({ currentTime }) => (<div>current time: <div>{currentTime.toLocaleString()}</div></div>);