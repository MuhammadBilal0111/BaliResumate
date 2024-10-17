import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Formsection from "./components/FormSection";
import ResumePreview from "./components/ResumePreview";
import { resumeInfo } from "../../store/resumeInfoSlice";
import dummy from "../../../dummy";
import { useDispatch } from "react-redux";

function EditResume() {
  const dispatch = useDispatch();
  // const [resumeInfo, setResumeInfo] = useState();
  const { resumeId } = useParams();
  useEffect(() => {
    dispatch(resumeInfo(dummy));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-2">
      {/* Form Sections */}
      <Formsection />
      {/* ResumePreview */}
      <ResumePreview />
    </div>
  );
}

export default EditResume;
