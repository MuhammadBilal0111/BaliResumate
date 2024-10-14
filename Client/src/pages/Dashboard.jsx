import React, { useEffect, useState } from "react";
import AddResume from "../components/AddResume";
import { useSelector } from "react-redux";
import { getUserResumes } from "../../services/GlobalApi";
import ResumeCardItem from "./../components/ResumeCardItem";

function Dashboard() {
  const { currentUser } = useSelector((state) => state.user);
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    // use to get user resume list
    const getResumes = async () => {
      const userResumes = await getUserResumes(currentUser?.userInfo?.email);
      setResumeList(userResumes.data?.userResumes);
    };
    getResumes();
  }, [currentUser]);
  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl">My Resume</h2>
      <p>Start Creating AI resume to your next job role</p>
      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5">
        <AddResume />
        {resumeList.length > 0 &&
          resumeList.map((resume) => (
            <ResumeCardItem resume={resume} key={resume.resumeId} />
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
