import React from "react";
import { useSelector } from "react-redux";

function EducationPreview() {
  const { resumeInfo } = useSelector((state) => state.resume);
  return (
    <div className="my-6">
      <h1
        className="font-bold border-b-2 mb-2"
        style={{
          color: resumeInfo.themeColor,
          borderColor: resumeInfo.themeColor,
        }}
      >
        Education
      </h1>
      {resumeInfo.education.map((education, index) => (
        <div key={index} className="flex flex-col gap-2 my-3">
          <div>
            <h2 className="font-bold text-sm">{education.universityName}</h2>
            <h2 className="text-xs flex justify-between items-center">
              {education.degree}, {education.major}
              <span>
                {education.startDate}-
                {education.currentlyWorking ? "Present" : education.endDate}
              </span>
            </h2>
          </div>
          <p className="text-xs">{education.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EducationPreview;
