import React, { useState } from "react";
import { acData } from "../data/ac";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Login from "../components/Auth/Login"

const SignIn = () => {
  return (
    <div>
      <Login></Login>
    </div>
  );
};

export default SignIn;
