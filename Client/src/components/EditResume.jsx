import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function EditResume() {
  const { resumeId } = useParams();
  useEffect(() => {
    console.log(resumeId);
  }, [resumeId]);
  return <div></div>;
}

export default EditResume;
