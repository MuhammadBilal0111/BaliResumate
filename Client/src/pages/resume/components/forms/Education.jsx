import React, { useState } from "react";
import EditableHeading from "./components/EditableHeading";
import { FaPlus } from "react-icons/fa6";
import AccordionItems from "./components/AccordionItems";
import { useDispatch } from "react-redux";
import { editResumeInfo } from "../../../../store/resumeInfoSlice";
import { useSelector } from "react-redux";

function EmploymentHistory() {
  const { resumeInfo } = useSelector((state) => state?.resume);
  const educationData = resumeInfo?.education || []; // getting the state of education from redux toolkit
  const [headingText, setHeadingText] = useState("Education");
  const dispatch = useDispatch();
  // const [accordions, setAccordions] = useState([
  //   { id: 1, field_title: "(Not Specified)", content: "" },
  // ]);

  // const [accordions, setAccordions] = useState([]);

  const handleTextChange = (e) => {
    setHeadingText(e.target.value);
  };
  // handling new Accordion
  const handleAddAccordian = () => {
    const newId =
      educationData.length > 0
        ? educationData[educationData.length - 1].id + 1
        : 1;
    const newAccordian = {
      id: newId,
      title: "(Not Specified)",
      description: "",
    };
    // setAccordions([...accordions, newAccordian]);
    dispatch(
      editResumeInfo({
        ...resumeInfo,
        education: [...educationData, newAccordian],
      })
    );
  };

  // handling delete Accordion
  const handleDeleteAccordian = (id) => {
    const updatedAccordions = educationData?.filter((item) => item.id !== id);
    dispatch(editResumeInfo({ ...resumeInfo, education: updatedAccordions })); // updating the education state after filtering the object
  };
  // handle change of the text input
  const handleChange = (e, id) => {
    const updatedAccordian = educationData?.map((accordion) =>
      accordion.id === id
        ? { ...accordion, [e.target.id]: e.target.value }
        : accordion
    );
    dispatch(editResumeInfo({ ...resumeInfo, education: updatedAccordian }));
  };
  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10 border-[#ff6666]">
      <div>
        <EditableHeading
          headingText={headingText}
          onTextChange={handleTextChange}
        />
        <p className="text-sm text-gray-500 font-semibold my-3">
          A varied education on your resume sums up the value that your
          learnings and background will bring to job.
        </p>
        {educationData &&
          educationData?.map((accordionItem) => (
            <AccordionItems
              key={accordionItem?.id}
              accordionItem={accordionItem}
              onHandleChange={handleChange}
              onDeleteItem={handleDeleteAccordian}
              labels={{
                title: "College/University",
                organization: "Degree",
                dates: "Start & End Date",
                city: "City",
              }}
              placeholder={{
                TextContent: "e.g.Graduated with High Honors",
              }}
            />
          ))}
        <div
          className="flex items-center gap-2 text-blue-700 text-lg font-semibold hover:bg-blue-100 shadow-sm cursor-pointer px-4 py-2"
          onClick={handleAddAccordian}
        >
          <FaPlus />
          <span>Add one more Education Field</span>
        </div>
      </div>
    </div>
  );
}

export default EmploymentHistory;
