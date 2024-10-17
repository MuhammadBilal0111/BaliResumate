import React from "react";
import EditableHeading from "./components/EditableHeading";
import { useState } from "react";
import ReactQuill from "react-quill";
import Alert from "@mui/material/Alert";
import "react-quill/dist/quill.snow.css";

function PersonalSummary() {
  const [professionalDetails, setProfessionalDetails] = useState("");
  const [tempDetails, setTempDetails] = useState("");
  const [headingText, setHeadingText] = useState("Professional Details");

  const handleProfessionalDetails = (html) => {
    if (html.length <= 600) {
      setProfessionalDetails(html);
      let tempElement = document.createElement("div");
      tempElement.innerHTML = html;
      setTempDetails(tempElement.textContent || tempElement.innerText || "");
    }
  };
  const handleTextChange = (e) => {
    setHeadingText(e.target.value);
  };
  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <div className="flex gap-2 items-center ">
        <EditableHeading
          headingText={headingText}
          onTextChange={handleTextChange}
        />
      </div>
      <p className="text-sm text-gray-500 font-semibold my-3">
        Write 2-4 short, energetic sentences about how great you are. Mention
        the role and what you did. What were the big achievements? Describe your
        motivation and list your skills.
      </p>
      <ReactQuill
        theme="snow"
        placeholder="Curious science teacher with 8+ years of experience and a track record of..."
        value={professionalDetails}
        className="h-72 mb-14 text-2xl font-gray-600 dark:text-gray-500"
        onChange={handleProfessionalDetails}
      />
      <div className="flex justify-between text-sm text-gray-500 font-semibold">
        <p>
          Recruiter tip: write 400-600 characters to increase interview chances
        </p>
        <span>{tempDetails.length}/600</span>
      </div>

      {tempDetails.length > 600 && (
        <Alert severity="error">Text Limit Exceeded</Alert>
      )}
    </div>
  );
}

export default PersonalSummary;
