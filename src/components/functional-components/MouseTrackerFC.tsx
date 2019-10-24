import React from "react";
import { MouseTrackerProps } from "../../types/MouseTrackerProps";

export const MouseTrackerFC: React.FC<MouseTrackerProps> = ({
  mousePosition
}) => {
  return (
    <div>
      Mouse position: <span>x: {mousePosition.x}</span> <span>y: {mousePosition.y}</span>
    </div>
  );
};
