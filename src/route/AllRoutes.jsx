// src/components/AllRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AcPage from "../pages/AcPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ac" element={<AcPage />} />
      <Route path="/*" element={<> You are Lost </>} />
    </Routes>
  );
}

export default AllRoutes;
