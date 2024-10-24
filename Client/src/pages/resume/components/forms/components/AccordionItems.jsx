import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

// render the Accordion for Education, Employment components
function AccordianItems({
  accordionItem,
  labels,
  placeholder,
  onDeleteItem,
  onHandleChange,
}) {
  const [tempDetails, setTempDetails] = useState("");

  const handleAccordiontDetails = (content, delta, source, editor) => {
    // Extract the plain text from the editor and trim any whitespace
    console.log("content", content);
    const textContent = editor?.getText()?.trim();
    setTempDetails(textContent);

    // Only update professionalDetails if the text length is strictly less than 600
    if (textContent.length < 700) {
      onHandleChange(
        { target: { id: "content", value: content } },
        accordionItem.id
      );
    }
  };
  return (
    <Accordion className="my-3">
      <AccordionSummary
        expandIcon={<MdOutlineKeyboardArrowDown />}
        aria-controls="panel1-content"
        id="panel1-header"
        className="hover:text-blue-700 font-semibold dark:bg-black"
        onChange={(e) => onHandleChange(e, accordionItem.id)}
      >
        {accordionItem.field_title}
      </AccordionSummary>
      <AccordionDetails>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 mb-2">
          <div className="">
            <label
              htmlFor="field_title"
              className="font-semibold text-gray-600"
            >
              {labels.title}
            </label>
            <TextField
              id="field_title"
              variant="outlined"
              type="text"
              value={accordionItem.title}
              onChange={(e) => onHandleChange(e, accordionItem.id)}
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="employer" className="font-semibold text-gray-600">
              {labels.organization}
            </label>
            <TextField
              variant="outlined"
              id="degree"
              type="text"
              onChange={(e) => onHandleChange(e, accordionItem.id)}
              className="w-full"
            ></TextField>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <label htmlFor="date" className="font-semibold text-gray-600">
                Start & End Date
              </label>
              <Tooltip title="If you do not want to show the date. Leave it blank">
                <IconButton>
                  <HiOutlineQuestionMarkCircle className="text-xl text-blue-700 cursor-pointer" />
                </IconButton>
              </Tooltip>
            </div>
            <div className="flex gap-4 justify-between items-center">
              <TextField
                variant="outlined"
                id="start_year"
                type="number"
                placeholder="YYYY"
                className="flex-1"
                onChange={(e) => onHandleChange(e, accordionItem.id)}
              />
              <TextField
                variant="outlined"
                id="end_year"
                type="number"
                placeholder="YYYY"
                className="flex-1"
                onChange={(e) => onHandleChange(e, accordionItem.id)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="city" className="font-semibold text-gray-600">
              {labels.city}
            </label>
            <TextField
              variant="outlined"
              id="city"
              type="text"
              className="w-full"
              onChange={(e) => onHandleChange(e, accordionItem.id)}
            ></TextField>
          </div>
        </div>
        <div className="">
          <ReactQuill
            theme="snow"
            placeholder={placeholder.TextContent}
            value={accordionItem.content}
            onChange={handleAccordiontDetails}
            className="h-72 mb-14 text-2xl font-gray-600"
          />
          <div className="flex justify-between text-sm text-gray-500 font-semibold">
            <p>
              Recruiter tip: write 200+ characters to increase interview chances
            </p>
            <span>{tempDetails.length}/200+</span>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordianItems;
