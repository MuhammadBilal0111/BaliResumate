import React from "react";
import { FaGithub } from "react-icons/fa";
import { openAuthWithGithub } from "../../../../services/GlobalApi";
import { githubAuth } from "../../../firebase/authServices";
import { ToastSuccess, ToastFailure } from "./Toast";
import { useNavigate } from "react-router-dom";

function OAuthWithGithub() {
  const navigate = useNavigate();
  const handleGithubClick = async () => {
    try {
      const resultFromGithub = await githubAuth(); // reponse from github
      console.log(resultFromGithub);
      const user = await openAuthWithGithub({
        // post request to mongo db
        username: resultFromGithub?.displayName,
        email: resultFromGithub?.email,
        githubPhotoURL: resultFromGithub?.photoURL,
      }); // custom method
      ToastSuccess("Logged in with Github successfully!");
      navigate("/");
    } catch (error) {
      console.log(error);
      ToastFailure("Error during Github authentication");
    }
  };
  return (
    <div
      className="flex items-center justify-center border gap-3 border-gray-400 p-2 rounded-lg transition-all delay-75 cursor-pointer shadow-md hover:bg-gray-300 hover:text-gray-800 text-gray-400"
      onClick={handleGithubClick}
    >
      <button className="flex items-center gap-2">
        <FaGithub />
        <span>Continue with Github!</span>
      </button>
    </div>
  );
}

export default OAuthWithGithub;
