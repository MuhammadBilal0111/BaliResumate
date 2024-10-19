import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

function FormFields({ id, label, type, placeholder, tooltipContent }) {
  console.log(label);
  return (
    <div>
      <div className="flex gap-3 items-center">
        <label htmlFor={id} className="font-semibold text-gray-600">
          {label}
        </label>
        {tooltipContent && (
          <Tooltip title={tooltipContent}>
            <IconButton>
              <HiOutlineQuestionMarkCircle className="text-xl text-blue-700" />
            </IconButton>
          </Tooltip>
        )}
      </div>
      <TextField
        id={id}
        className="w-full"
        label={placeholder}
        type={type}
        variant="filled"
      />
    </div>
  );
}

export default FormFields;
