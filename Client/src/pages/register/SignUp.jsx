import React, { useRef, useState } from "react";
import { Alert, TextField, Button, CircularProgress } from "@mui/material";
import { MdEmail } from "react-icons/md";
import { GoEyeClosed, GoEye } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../../services/GlobalApi";
import { ToastSuccess } from "./components/Toast";
import OAuthWithGoogle from "./components/OAuthWithGoogle";
import OAuthWithGithub from "./components/OAuthWithGithub";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({});
  const showPasswordElement = useRef();
  const showConfirmPasswordElement = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await signUp(inputData);
      setLoading(false);
      navigate("/sign-in");
      ToastSuccess("Sign up completed successfully!"); // use to generate a successful toast when sign in
    } catch (err) {
      setLoading(false);
      setErrorMessage(err.response.data.message);
    }
  };
  const handleChange = (e) => {
    setErrorMessage(false);
    setInputData({ ...inputData, [e.target.id]: e.target.value });
  };
  return (
    <div className="flex items-center justify-center min-h-screen max-w-lg mx-auto p-7">
      <div className="flex flex-col gap-3 border border-1 rounded-2xl w-full py-7 px-7 shadow-xl border-gray-400">
        <h1 className="text-center text-3xl font-bold">Sign Up</h1>
        <p className="text-md text-gray-400">
          Create your professional resume in minutes - fast, easy, and
          ATS-friendly!
        </p>
        <form className="flex flex-col gap-2 my-2" onSubmit={handleSubmit}>
          <div className="relative dark:text-white">
            <TextField
              type="text"
              variant="standard"
              label="Your name"
              id="username"
              onChange={handleChange}
              className="w-full text-white"
            />
            <FaUser className="absolute top-1/2 -translate-y-1/2 right-4 z-0 text-xl" />
          </div>
          <div className="relative">
            <TextField
              type="email"
              variant="standard"
              label="Your Email"
              id="email"
              onChange={handleChange}
              className="w-full text-white"
            />
            <MdEmail className="absolute top-1/2 -translate-y-1/2 right-4 z-0 text-xl" />
          </div>
          <div className="relative">
            <TextField
              type="password"
              variant="standard"
              label="Your Password"
              id="password"
              ref={showPasswordElement}
              onChange={handleChange}
              className="w-full text-white"
            />
            {showPassword ? (
              <GoEye
                className="absolute top-1/2 -translate-y-1/2 right-4 z-0 text-xl cursor-pointer"
                onClick={() => {
                  setShowPassword(false);
                  showPasswordElement.current.type = "password";
                }}
              />
            ) : (
              <GoEyeClosed
                className="absolute top-1/2 -translate-y-1/2 right-4 z-0 text-xl cursor-pointer"
                onClick={() => {
                  setShowPassword(true);
                  showPasswordElement.current.type = "text";
                }}
              />
            )}
          </div>
          <div className="relative">
            <TextField
              type="password"
              variant="standard"
              label="Confirm Password"
              id="confirmPassword"
              ref={showConfirmPasswordElement}
              onChange={handleChange}
              className="w-full text-white"
            />
            {showConfirmPassword ? (
              <GoEye
                className="absolute top-1/2 -translate-y-1/2 right-4 z-0 text-xl cursor-pointer"
                onClick={() => {
                  setShowConfirmPassword(false);
                  showConfirmPasswordElement.current.type = "password";
                }}
              />
            ) : (
              <GoEyeClosed
                className="absolute top-1/2 -translate-y-1/2 right-4 z-0 text-xl cursor-pointer"
                onClick={() => {
                  setShowConfirmPassword(true);
                  showConfirmPasswordElement.current.type = "text";
                }}
              />
            )}
          </div>
          <Button type="submit" color="blue" className="w-full">
            {loading ? <CircularProgress size={"30px"} /> : "Create Account"}
          </Button>
          {errorMessage && (
            <Alert className="mt-3" size="30px" severity="error">
              {errorMessage}
            </Alert>
          )}
        </form>
        <div className="grid grid-cols-3 items-center text-gray-900">
          <hr className="border-gray-500" />
          <p className="text-center dark:text-gray-500">OR</p>
          <hr className="border-gray-500" />
        </div>
        <OAuthWithGoogle />
        <OAuthWithGithub />
        <div>
          <span className="text-gray-400">Already have an account?</span>
          <Link to={"/sign-in"}>
            <span className="text-blue-500 hover:underline ml-2 font-semibold">
              Sign In
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
