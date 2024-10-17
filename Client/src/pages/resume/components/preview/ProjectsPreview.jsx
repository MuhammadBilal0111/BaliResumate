import React from "react";
import { useSelector } from "react-redux";
function ProjectsPreview() {
  const { resumeInfo } = useSelector((state) => state.resume);
  return (
    <div>
      <h1
        className="font-bold border-b-2 mb-2"
        style={{
          color: resumeInfo.themeColor,
          borderColor: resumeInfo.themeColor,
        }}
      >
        Projects
      </h1>
      {resumeInfo.projects.map((project, index) => (
        <div key={index} className="flex flex-col justify-center">
          <div className="flex  items-center justify-between">
            <h1 className="truncate font-bold text-sm mb-2">{project.name}</h1>
            <div className="flex items-center ">
              {project.frameworks.map((framework, index) => (
                <span key={index} className="text-xs truncate mr-1">
                  {framework} |
                </span>
              ))}
              <a
                href={`${project.githubLink}`}
                className="text-blue-500 hover:underline"
              >
                Code
              </a>
            </div>
          </div>

          <p className="text-xs">{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectsPreview;
