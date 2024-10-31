import React, { useState } from "react";
import EditableHeading from "./components/EditableHeading";
import { FaPlus } from "react-icons/fa6";
import AccordionItems from "./components/AccordionItems";
import { useSelector, useDispatch } from "react-redux";
import { editResumeInfo } from "../../../../store/resumeInfoSlice";

function ExperienceHistory() {
  const { resumeInfo } = useSelector((state) => state.resume);
  const experienceData = resumeInfo?.experience || [];
  const [headingText, setHeadingText] = useState("Employment History");
  const dispatch = useDispatch();

  // const [accordions, setAccordions] = useState([
  //   { id: 1, field_title: "(Not Specified)", content: "" },
  // ]);
  const handleTextChange = (e) => {
    setHeadingText(e.target.value);
  };
  // handle add Accordion
  const handleAddAccordian = () => {
    const newId =
      experienceData?.length > 0
        ? experienceData[experienceData.length - 1].id + 1
        : 1;
    const newAccordian = {
      id: newId,
      title: "(Not Specified)",
      description: "",
    };
    //setAccordions([...accordions, newAccordian]);
    dispatch(
      editResumeInfo({
        ...resumeInfo,
        experience: [...experienceData, newAccordian],
      })
    );
  };

  // handle Delete Accordion
  const handleDeleteAccordian = (id) => {
    // setItems(items.filter((item) => item.id !== id));
    const updatedAccordions = experienceData?.filter((item) => item.id !== id);
    dispatch(editResumeInfo({ ...resumeInfo, experience: updatedAccordions })); // updating the experience state after filtering the object
  };
  const handleChange = (e, id) => {
    const updatedAccordian = experienceData.map((accordion) =>
      accordion.id === id
        ? { ...accordion, [e.target.id]: e.target.value }
        : accordion
    );
    dispatch(editResumeInfo({ ...resumeInfo, experience: updatedAccordian }));
  };
  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10 border-[#ff6666]">
      <div>
        <EditableHeading
          headingText={headingText}
          onTextChange={handleTextChange}
        />
        <p className="text-sm text-gray-500 font-semibold my-3">
          Show your relevant experience (last 10 years). Use bullet points to
          note your achievements, if possible - use numbers/facts (Achieved X,
          measured by Y, by doing Z).
        </p>
        {experienceData &&
          experienceData.map((accordionItem) => (
            <AccordionItems
              key={accordionItem?.id}
              accordionItem={accordionItem}
              onHandleChange={handleChange}
              onDeleteItem={handleDeleteAccordian}
              labels={{
                title: "Job Title",
                organization: "Employer",
                dates: "Start & End Date",
                city: "City",
              }}
              placeholder={{
                TextContent:
                  "e.g. Created and implemented lesson plans based on child-led interests and curiosities...",
              }}
            />
          ))}
        <div
          className="flex items-center gap-2 text-blue-700 text-lg font-semibold hover:bg-blue-100 shadow-sm cursor-pointer px-4 py-2"
          onClick={handleAddAccordian}
        >
          <FaPlus />
          <span>Add one more Employment</span>
        </div>
      </div>
    </div>
  );
}

export default ExperienceHistory;
