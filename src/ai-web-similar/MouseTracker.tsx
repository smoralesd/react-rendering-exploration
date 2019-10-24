import React from "react";
import { MouseTrackerProps } from "../types/MouseTrackerProps";

export const MouseTrackerFC: React.FC<MouseTrackerProps> = ({
  mousePosition
}) => {
  return (
    <div>
      Mouse position:
      <div>x: {mousePosition.x}</div>
      <div>y: {mousePosition.y}</div>
    </div>
  );
};
