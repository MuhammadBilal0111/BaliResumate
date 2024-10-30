import React from "react";
import { useSelector } from "react-redux";
function ProfessionalExperience() {
  const { resumeInfo } = useSelector((state) => state.resume);
  return (
    <div className="my-6">
      <h2
        className="font-bold border-b-2 mb-2"
        style={{
          color: resumeInfo?.themeColor,
          borderColor: resumeInfo?.themeColor,
        }}
      >
        Professional Exerience
      </h2>
      {resumeInfo?.experience.map((experience, index) => (
        <div key={index} className="flex flex-col gap-2 my-3">
          <div>
            <h2 className="font-bold text-sm">{experience?.title}</h2>
            <h2 className="text-xs flex justify-between items-center">
              {experience?.companyName}, {experience?.city},{experience?.state}
              <span>
                {experience?.startDate}-
                {experience?.currentlyWorking ? "Present" : experience?.endDate}
              </span>
            </h2>
          </div>
          <p className="text-xs">{experience?.workSummary}</p>
        </div>
      ))}
    </div>
  );
}

export default ProfessionalExperience;
