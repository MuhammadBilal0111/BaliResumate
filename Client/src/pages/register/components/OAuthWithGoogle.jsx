import React, { useState } from "react";
import { googleAuth } from "../../../firebase/authServices";
import { openAuthWithGoogle } from "../../../../services/GlobalApi";
import { FcGoogle } from "react-icons/fc";
import { ToastSuccess, ToastFailure } from "./Toast";
import { useNavigate } from "react-router-dom";

function OAuthWithGoogle() {
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const resultFromGoogle = await googleAuth(); // response from Google
      const user = await openAuthWithGoogle({
        username: resultFromGoogle?.displayName,
        email: resultFromGoogle?.email,
        googlePhotoURL: resultFromGoogle?.photoURL,
      });
      console.log(resultFromGoogle);
      navigate("/");
      ToastSuccess("Logged in with Google successfully!");
    } catch (error) {
      console.error("Error during Google authentication:", error);
      ToastFailure("Error during Google authentication");
    }
  };

  return (
    <div
      className="flex items-center justify-center border gap-3 border-gray-400 p-2 rounded-lg hover:bg-gray-300 hover:text-gray-800 transition-all delay-75 cursor-pointer shadow-md text-gray-400"
      onClick={handleGoogleClick}
    >
      <button className="flex items-center gap-2">
        <FcGoogle />
        <span>Continue with Google!</span>
      </button>
    </div>
  );
}

export default OAuthWithGoogle;
