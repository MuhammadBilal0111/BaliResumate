import React, { useState } from "react";
import PersonalSummary from "./forms/PersonalSummary";
import { Button } from "@mui/material";
import { TbColorFilter } from "react-icons/tb";
import { GrLinkNext } from "react-icons/gr";

function FormSection() {
  const { activeFormIndex, setActiveFormIndex } = useState(0);
  return (
    <div className="mt-5">
      <div className="flex justify-between items-center">
        <Button
          variant="outlined"
          size="sm"
          className="flex gap-2 items-center"
        >
          <TbColorFilter />
          Theme
        </Button>
        <Button
          variant="outlined"
          size="sm"
          className="flex gap-2 items-center"
        >
          Next
          <GrLinkNext />
        </Button>
      </div>

      {/* <PersonalDetails /> */}

      {/* Personal Summary */}
      <PersonalSummary />
    </div>
  );
}

export default FormSection;
