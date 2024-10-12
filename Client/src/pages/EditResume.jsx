import React from "react";
import { useParams } from "react-router-dom";
function EditResume() {
  const { resumeId } = useParams();
  console.log(resumeId);
  // useResume
  return <div>EditResume</div>;
}

export default EditResume;
