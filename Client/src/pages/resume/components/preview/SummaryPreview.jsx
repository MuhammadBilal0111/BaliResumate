import React, { useState } from "react";
import { useSelector } from "react-redux";

function Summary() {
  const { resumeInfo } = useSelector((state) => state.resume);
  
  return (
    <div
      className="text-xs"
      dangerouslySetInnerHTML={{ __html: resumeInfo?.summary }}
    ></div>
  );
}

export default Summary;
