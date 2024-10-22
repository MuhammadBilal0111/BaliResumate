import React from "react";
import PersonalPreviewSection from "./preview/PersonalPreviewSection";
import SummaryPreview from "./preview/SummaryPreview";
import ProfessionalExperiencePreview from "./preview/ExperiencePreview";
import SkillsPreview from "./preview/SkillsPreview";
import EducationPreview from "./preview/EducationPreview";
import ProjectsPreview from "./preview/ProjectsPreview";
import { useSelector } from "react-redux";

function ResumePreview() {
  const { resumeInfo } = useSelector((state) => state.resume);
  return (
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      {/* Personal Preview */}
      <PersonalPreviewSection />
      {/* Summary */}
      <SummaryPreview />
      {/* Professional Experience */}
      <ProfessionalExperiencePreview />
      {/* Projects */}
      <ProjectsPreview />
      {/* Education */}
      <EducationPreview />
      {/* Skills */}
      <SkillsPreview />
    </div>
  );
}

export default ResumePreview;
