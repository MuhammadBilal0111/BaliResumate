import axios from "axios";
const api = axios.create({
  baseURL: "/api",
});
// sign up route when the data come from server it will return that data
export const signUp = (data) => {
  return api.post("/auth/signUp", data);
};
export const signIn = (data) => {
  return api.post("/auth/signIn", data);
};
export const openAuthWithGoogle = (data) => {
  return api.post("/auth/google", data);
};
export const createNewResume = (data) => {
  return api.post("/user-resume/create-resume", data);
};
export const getUserResumes = (userEmail) => {
  return api.get(`/user-resume/${userEmail}`);
};
export const resetPassword = (resetData) => {
  return api.post("/auth/rese-password", resetData);
};
