import React, { useState } from "react";
import { acData } from "../data/ac";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Register from "../components/Auth/Register"

const SignIn = () => {
  return (
    <div>
      <Register></Register>
    </div>
  );
};

export default SignIn;
