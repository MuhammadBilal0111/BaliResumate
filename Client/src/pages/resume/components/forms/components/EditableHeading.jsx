import React, { useState } from "react";
import { Tooltip } from "@mui/material";
import { TbPencil } from "react-icons/tb";

function EditableHeading({ headingText, onTextChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleInputBlur = (e) => {
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <>
          <input
            type="text"
            value={headingText}
            onChange={onTextChange}
            onBlur={handleInputBlur}
            className="font-sans text-2xl font-semibold truncate text-gray-900 border-none p-0"
            autoFocus
          />
        </>
      ) : (
        <div className="flex items-center gap-2">
          <h1 className="font-sans text-2xl font-semibold truncate text-gray-900 dark:text-gray-200">
            {headingText}
          </h1>
          <Tooltip title="Add" placement="top">
            <TbPencil
              className="text-2xl cursor-pointer hover:text-blue-700"
              onClick={handleEditClick}
            />
          </Tooltip>
        </div>
      )}
    </>
  );
}

export default EditableHeading;
