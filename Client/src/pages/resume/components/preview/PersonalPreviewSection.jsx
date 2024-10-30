import React from "react";
import { useSelector } from "react-redux";
function PersonalPreviewSection() {
  const { resumeInfo } = useSelector((state) => state.resume);

  return (
    <div>
      <h1
        className="font-bold text-2xl text-center"
        style={{ color: resumeInfo?.themeColor }}
      >
        {resumeInfo?.firstName} {resumeInfo?.lastName}
      </h1>
      <h1 className="text-sm text-center font-medium">{resumeInfo.jobTitle}</h1>
      <h1 className="text-center font-normal text-xs">
        {resumeInfo?.address} {resumeInfo?.postalCode}
      </h1>
      <div className="flex justify-between items-center mt-4">
        <h2
          className="text-xs font-normal"
          style={{ color: resumeInfo?.themeColor }}
        >
          {resumeInfo?.phone}
        </h2>
        <h2
          className="text-xs font-normal"
          style={{ color: resumeInfo?.themeColor }}
        >
          {resumeInfo?.email}
        </h2>
      </div>
      <hr
        className="border-[1.5px] my-2"
        style={{ borderColor: resumeInfo?.themeColor }}
      />
    </div>
  );
}

export default PersonalPreviewSection;
