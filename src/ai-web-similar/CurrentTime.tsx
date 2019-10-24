import React from "react";
import { CurrentTimeProps } from "../types/CurrentTimeProps";

export const CurrentTimeFC: React.FC<CurrentTimeProps> = ({ currentTime }) => (
  <div>
    current time: <div>{currentTime.toLocaleString()}</div>
  </div>
);
