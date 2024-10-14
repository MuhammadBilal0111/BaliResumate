import React from "react";
import { Link } from "react-router-dom";
import { PiNotebookBold } from "react-icons/pi";

function ResumeItem({ resume }) {
  return (
    <Link to={`/dashboard/resume/:${resume.resumeId}/edit`}>
      <div className="flex items-center justify-center bg-secondary h-[280px] border border-primary rounded-lg hover:scale-105 transition-all hover:shadow-md hover:shadow-primary">
        <PiNotebookBold className="text-3xl" />
      </div>
      <h3 className="my-1 text-center">{resume.title}</h3>
    </Link>
  );
}

export default ResumeItem;
