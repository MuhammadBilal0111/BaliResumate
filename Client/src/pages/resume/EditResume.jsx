import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Formsection from "./components/FormSection";
import ResumePreview from "./components/ResumePreview";
import { editResumeInfo } from "../../store/resumeInfoSlice";
import dummy from "../../../dummy";
import { useDispatch, useSelector } from "react-redux";

function EditResume() {
  const dispatch = useDispatch();
  const { resumeId } = useParams();
  useEffect(() => {
    dispatch(editResumeInfo(dummy));
  }, [resumeId]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 ">
      {/* Form Sections */}
      <Formsection />
      {/* ResumePreview */}
      <ResumePreview />
    </div>
  );
}

export default EditResume;
