import React, { useState } from "react";
import { googleAuth } from "../../../firebase/authServices";
import { openAuthWithGoogle } from "../../../../services/GlobalApi";
import { FcGoogle } from "react-icons/fc";

function OAuth() {
  // google event handler
  const handleGoogleClick = async () => {
    try {
      const resultFromGoogle = await googleAuth(); // reponse from google
      const user = await openAuthWithGoogle({
        // post request to mongo db
        username: resultFromGoogle?.displayName,
        email: resultFromGoogle?.email,
        googlePhotoURL: resultFromGoogle?.photoURL,
      }); // custom method
      console.log(user);
    } catch (error) {
      console.log(error);
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

export default OAuth;
