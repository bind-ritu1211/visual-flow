// src/components/AllRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/SignUp.jsx";
import TestUserAPI from "../pages/TestUserAPI.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test/login" element={<SignIn />} />
      <Route path="/test/register" element={<SignUp />} />
      <Route path="/test/api" element={<TestUserAPI />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default AllRoutes;
