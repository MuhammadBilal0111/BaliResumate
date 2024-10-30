import React from "react";
import { useSelector } from "react-redux";

function SkillsPreview() {
  const { resumeInfo } = useSelector((state) => state.resume);
  return (
    <div className="my-6">
      <h1
        className="font-bold border-b-2 mb-2"
        style={{
          color: resumeInfo?.themeColor,
          borderColor: resumeInfo?.themeColor,
        }}
      >
        Technicals Skills
      </h1>
      {resumeInfo.skills.map((skill, index) => (
        <div key={index} className="flex justify-between items-center">
          <h2 className="text-xs">{skill?.name}</h2>
          <div className="h-2 bg-gray-200 w-[160px]">
            <div
              className="h-2"
              style={{
                backgroundColor: resumeInfo.themeColor,
                width: skill?.rating + "%",
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsPreview;
