import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import EditableHeading from "./components/EditableHeading";
import FormFields from "./components/FormFields";
import { formFields, additionalFormFields } from "../../../../utils/constants";

function PersonalDetails() {
  const [headingText, setHeadingText] = useState("Personal Details");
  const [showDetails, setShowDetails] = useState(false);
  const handleShowDetails = () => {
    showDetails ? setShowDetails(false) : setShowDetails(true);
  };
  const handleTextChange = (e) => {
    setHeadingText(e.target.value);
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10 border-[#ff6666]">
      <div className="flex flex-col gap-4 mb-4">
        <EditableHeading
          headingText={headingText}
          onTextChange={handleTextChange}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          {formFields.map((field) => (
            <FormFields key={field.id} {...field} />
          ))}
          {showDetails && (
            <>
              {additionalFormFields.map((field) => (
                <FormFields key={field.id} {...field} />
              ))}
            </>
          )}
        </div>
        <div
          className="flex items-center gap-2 text-blue-500 font-semibold hover:text-blue-700 cursor-pointer"
          onClick={handleShowDetails}
        >
          {!showDetails && (
            <>
              <span>Add more details</span>
              <FaChevronDown />
            </>
          )}
          {showDetails && (
            <>
              <span>Hide additional details</span>
              <FaChevronUp />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
