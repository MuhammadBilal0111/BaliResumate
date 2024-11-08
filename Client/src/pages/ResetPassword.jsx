import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import {
  resetPasswordStart,
  resetPasswordSuccess,
  resetPasswordFailure,
} from "../store/userSlice";
import CircularProgress from "@mui/material/CircularProgress";
import { resetPassword } from "../../services/GlobalApi";
import { useDispatch, useSelector } from "react-redux";

function ResetPassword() {
  const [successMessage, setSuccessMessage] = useState("");
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const passwordElement = useRef();
  const confirmPasswordElement = useRef();

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = passwordElement.current.value;
    const confirmPassword = confirmPasswordElement.current.value;
    console.log(password, confirmPassword);
    try {
      dispatch(resetPasswordStart());
      console.log(resetPassword);
      const response = await resetPassword({ password, confirmPassword });
      dispatch(resetPasswordSuccess("set h "));
    } catch (err) {
      console.log(err);
      dispatch(resetPasswordFailure(err.message));
    }
  };
  return (
    <div className="min-h-screen flex justify-center flex-col gap-5 p-5 w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-6xl font-bold font-sans line-clamp-2">
            <span className="text-blue-600">Reset </span>Password
          </h1>
          <p className="text-gray-400 text-8">
            Create a strong new password to secure your account.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 max-w-2xl">
          <TextField
            id="password"
            variant="outlined"
            type="password"
            className="w-full"
            placeholder="Enter your new password"
            inputRef={passwordElement}
            required
          />
          <div className="flex gap-2 w-full">
            <TextField
              className="w-full"
              variant="outlined"
              type="password"
              placeholder="Confirm your new password"
              id="confirmPassword"
              inputRef={confirmPasswordElement}
              required
            />
            <button
              type="submit"
              className="flex justify-center items-center min-w-28 ring-cyan-700 border border-gray-200 bg-white text-gray-900 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 dark:border-gray-600 dark:bg-transparent dark:text-gray-400 dark:enabled:hover:bg-gray-700 dark:enabled:hover:text-white cursor-pointer rounded-md duration-75 text-lg"
              // disabled={loading}
            >
              {loading ? <CircularProgress size="30px" /> : "Submit"}
            </button>
          </div>
        </div>
      </form>
      {error && <Alert severity="error">{error}</Alert>}{" "}
      {/* setting error message*/}
      {successMessage && <Alert severity="success">{successMessage}</Alert>}
    </div>
  );
}

export default ResetPassword;
