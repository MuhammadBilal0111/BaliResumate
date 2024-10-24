import React, { useRef, useState } from "react";
import { Alert, TextField, Button, CircularProgress } from "@mui/material";
import { MdEmail } from "react-icons/md";
import { GoEyeClosed, GoEye } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../services/GlobalApi";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "./../store/userSlice";
import { useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";

function SignIn() {
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [inputData, setInputData] = useState({});
  const showPasswordElement = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const user = await signIn(inputData);
      console.log(user.data);
      dispatch(signInSuccess(user.data));
      navigate("/");
      toast.success("Login Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "An unexpected error occurred.";
      dispatch(signInFailure(errorMessage));
    }
  };
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.id]: e.target.value });
  };
  return (
    <div className="flex items-center justify-center min-h-screen max-w-lg mx-auto p-7">
      <div className="flex flex-col gap-3 border border-1 rounded-2xl w-full py-7 px-7 shadow-xl border-gray-400">
        <h1 className="text-center text-3xl font-bold">Login</h1>
        <p className="text-md text-gray-400">
          Welcome back! Lets start creatingy your professional resume in minutes
        </p>
        <form className="flex flex-col gap-2 my-2" onSubmit={handleSubmit}>
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
          <h1 className="text-blue-500 font-lg hover:underline text-right font-semibold">
            <Link to="/forget-password">Forget password</Link>
          </h1>
          <Button variant="text" type="submit" color="blue" className="w-full">
            {loading ? <CircularProgress size="30px" /> : "Login"}
          </Button>
          {error && <Alert severity="error">{error}</Alert>}
        </form>
        <div className="grid grid-cols-3 items-center text-gray-900">
          <hr className="border-gray-500" />
          <p className="text-center dark:text-gray-500">OR</p>
          <hr className="border-gray-500" />
        </div>
        <div className="flex items-center justify-center border gap-3 border-gray-400 p-2 rounded-lg hover:bg-gray-300 hover:text-gray-800 transition-all delay-75 cursor-pointer shadow-md text-gray-400">
          <button className="flex items-center gap-2 ">
            <FcGoogle />
            <span>Login with Google!</span>
          </button>
        </div>
        <div className="flex items-center justify-center border gap-3 border-gray-400 p-2 rounded-lg transition-all delay-75 cursor-pointer shadow-md hover:bg-gray-300 hover:text-gray-800 text-gray-400">
          <button className="flex items-center gap-2">
            <FaGithub />
            <span>Login with Github!</span>
          </button>
        </div>
        <div>
          <span className="text-gray-400">Don't have an account?</span>
          <Link to={"/sign-up"}>
            <span className="text-blue-500 hover:underline ml-2 font-semibold">
              Create new Account
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
