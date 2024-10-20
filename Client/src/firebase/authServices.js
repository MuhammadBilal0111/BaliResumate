import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "./config";

const auth = getAuth(app);
const githubProvider = new GithubAuthProvider(); // github Authentication
const googleProvider = new GoogleAuthProvider(); // google Authentication
githubProvider.setCustomParameters({ prompt: "select_account" });
googleProvider.setCustomParameters({ prompt: "select_account" });

// function for github Authentication
export const githubAuth = async () => {
  try {
    const userAuth = await signInWithPopup(auth, githubProvider);
    const userInfo = userAuth?.user; // The signed-in user info.
    return userInfo;
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Error ${errorCode}: ${errorMessage}`); // Log error for debugging
    return errorMessage;
  }
};

// function for google Authentication
export const googleAuth = async () => {
  try {
    const userAuth = await signInWithPopup(auth, googleProvider);
    const user = userAuth?.user;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Error ${errorCode}: ${errorMessage}`); // Log error for debugging
    return errorMessage;
  }
};
