import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { TextField, CircularProgress } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { createNewResume } from "../../services/GlobalApi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddResume() {
  const [openModal, setOpenModal] = useState(false);
  const [resumeTitle, setResumeTitle] = useState(null);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user || {});
  const navigate = useNavigate();

  const onCreateResume = () => {
    setLoading(true);
    const uuid = uuidv4();
    const data = {
      title: resumeTitle,
      resumeId: uuid,
      email: currentUser?.userInfo?.email,
      username: currentUser?.userInfo?.username,
    };
    createNewResume(data)
      .then((res) => {
        setLoading(false);
        navigate(`/dashboard/resume/${res.data.userResumeinfo._id}/edit`);
        console.log(res);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  const changeResumeTitle = (e) => {
    setResumeTitle(e.target.value);
  };
  return (
    <div>
      <div
        className="border bottom-3 flex items-center justify-center cursor-pointer  rounded-lg hover:scale-105 bg-secondary h-[280px] transition-all hover:shadow-md border-dashed"
        onClick={() => setOpenModal(true)}
      >
        <FaPlus className="text-3xl" />
      </div>
      {openModal && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8  max-w-xl mx-auto w-full">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left flex flex-col w-full">
                      <h3
                        className="text-base font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Create New Resume
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Add title for your new resume
                        </p>
                      </div>
                      <TextField
                        variant="standard"
                        className="w-full"
                        onChange={changeResumeTitle}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto"
                    onClick={onCreateResume}
                    disabled={!resumeTitle}
                  >
                    {loading ? (
                      <CircularProgress size={"20px"} color="inherit" />
                    ) : (
                      "Create"
                    )}
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpenModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddResume;
