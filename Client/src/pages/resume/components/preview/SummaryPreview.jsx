import React from "react";
import { useSelector } from "react-redux";

function Summary() {
  const { resumeInfo } = useSelector((state) => state.resume);
  return (
    <div>
      <p className="text-xs">{resumeInfo.summary}</p>
    </div>
  );
}

export default Summary;
