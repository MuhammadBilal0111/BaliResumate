import React, { useState } from "react";
import PersonalSummary from "./forms/PersonalSummary";
import { Button } from "@mui/material";
import { TbColorFilter } from "react-icons/tb";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import PersonalDetails from "./forms/PersonalDetails";
import EmploymentHistory from "./forms/EmploymentHistory";
import Education from "./forms/Education";

function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(0);
  return (
    <div className="px-5 py-10">
      <div className="flex justify-between items-center">
        {/* Theme button */}
        <Button
          variant="outlined"
          size="sm"
          className="flex gap-2 items-center"
        >
          <TbColorFilter />
          Theme
        </Button>
        <div className="flex gap-2">
          {/* Previous button */}
          {activeFormIndex > 0 && (
            <Button
              variant="contained"
              size="sm"
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              <GrLinkPrevious />
            </Button>
          )}
          {/* Next button */}
          <Button
            variant="outlined"
            size="sm"
            className="flex gap-2 items-center"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            Next
            <GrLinkNext />
          </Button>
        </div>
      </div>
      {/* Personal Details */}
      {activeFormIndex === 0 && <PersonalDetails />}

      {/* Personal Summary */}
      {activeFormIndex === 1 && <PersonalSummary />}

      {/* Education Summary */}
      {activeFormIndex === 2 && <Education />}
      {/* Employee Summary */}
      {activeFormIndex === 3 && <EmploymentHistory />}
    </div>
  );
}

export default FormSection;
