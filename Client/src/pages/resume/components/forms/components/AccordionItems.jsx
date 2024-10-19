import React from "react";
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

function AccordianItems({
  accordionItem,
  labels,
  placeholder,
  onDeleteItem,
  onHandleChange,
}) {
  return (
    <Accordion className="my-3">
      <AccordionSummary
        expandIcon={<MdOutlineKeyboardArrowDown />}
        aria-controls="panel1-content"
        id="panel1-header"
        className="hover:text-blue-700 font-semibold"
        onChange={(e) => onHandleChange(e, accordionItem.id)}
      >
        {accordionItem.field_title}
      </AccordionSummary>
      <AccordionDetails>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 mb-2">
          <div>
            <label
              htmlFor="field_title"
              className="font-semibold text-gray-600"
            >
              {labels.title}
            </label>
            <TextField
              id="field_title"
              label="Outlined"
              variant="outlined"
              type="text"
              value={accordionItem.title}
              onChange={(e) => onHandleChange(e, accordionItem.id)}
            />
          </div>
          <div>
            <label htmlFor="employer" className="font-semibold text-gray-600">
              {labels.organization}
            </label>
            <TextField
              label="Outlined"
              variant="outlined"
              id="employer"
              type="text"
              onChange={(e) => onHandleChange(e, accordionItem.id)}
            ></TextField>
          </div>
          <div>
            <div className="flex items-center gap-3">
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
                onChange={(e) => onHandleChange(e, accordionItem.id)}
              />
              <TextField
                variant="outlined"
                id="end_year"
                type="number"
                placeholder="YYYY"
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
              onChange={(e) => onHandleChange(e, accordionItem.id)}
            ></TextField>
          </div>
        </div>
        <div className="">
          <ReactQuill
            theme="snow"
            placeholder={placeholder.TextContent}
            value={accordionItem.content}
            onChange={(value) =>
              onHandleChange(
                { target: { id: "content", value } },
                accordionItem.id
              )
            }
            className="h-72 mb-14 text-2xl font-gray-600"
          />
          <div className="flex justify-between text-sm text-gray-500 font-semibold">
            <p>
              Recruiter tip: write 200+ characters to increase interview chances
            </p>
            <span>/200+</span>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordianItems;
