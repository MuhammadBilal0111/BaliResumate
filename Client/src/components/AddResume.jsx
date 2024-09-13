import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { Modal, FloatingLabel } from "flowbite-react";
import { v4 as uuidv4 } from "uuid";
function AddResume() {
  const [openModal, setOpenModal] = useState(false);
  const [resumeTitle, setResumeTitle] = useState(null);

  const onCreate = () => {
    const uuid = uuidv4();
    console.log(resumeTitle);
  };
  const changeResumeTitle = (e) => {
    setResumeTitle(e.target.value);
  };
  return (
    <div>
      <div
        className="p-14 py-24 border bottom-3 flex items-center justify-center cursor-pointer  rounded-lg hover:scale-105 bg-secondary h-[280px] transition-all hover:shadow-md border-dashed"
        onClick={() => setOpenModal(true)}
      >
        <FaPlus className="text-3xl" />
      </div>
      {openModal && (
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Create New Resume</Modal.Header>
          <Modal.Body>
            <div className="flex gap-4 flex-col">
              <p>Add title for your new resume</p>
              <FloatingLabel
                variant="standard"
                label="Resume Title"
                onChange={changeResumeTitle}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="text-right">
              <button
                type="button"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                disabled={!resumeTitle}
              >
                Create
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default AddResume;
