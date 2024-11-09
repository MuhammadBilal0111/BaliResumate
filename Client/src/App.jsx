import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/register/SignIn";
import SignUp from "./pages/register/SignUp";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import PageNotFound from "./pages/PageNotFound";
import EditResume from "./pages/resume/EditResume";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route
          path="/dashboard/resume/:resumeId/edit"
          element={<EditResume />}
        ></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
