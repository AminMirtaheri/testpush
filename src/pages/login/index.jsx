import { Input } from "@material-tailwind/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASEURL } from "../../constants";
import Logo from "../../image/Logo.png";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, sePassword] = useState("");
  const navigate = useNavigate();

  const signInHandler = () => {
    const data = {
      email,
      password,
    };
    axios
      .post(`${BASEURL}/auth/signin`, data)
      .then((res) => {
        localStorage.setItem("token", res.data.data.accessToken);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      style={{ height: "100vh" }}
      className="flex justify-center items-center w-full py-4"
    >
      <div className="flex flex-col w-11/12 lg:w-4/12 shadow-md rounded-2xl py-5 px-3">
        <div className="flex justify-center items-center">
          <img src={Logo} width={150} alt="" />
        </div>
        <p className="text-xl text-black text-center font-normal mt-4">
          Sign in / Log in
        </p>
        <div className="mt-4 ">
          <Input
            size="lg"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-4 ">
          <Input
            size="lg"
            label="Password"
            value={password}
            onChange={(e) => sePassword(e.target.value)}
          />
        </div>
        <button
          onClick={signInHandler}
          style={{ backgroundColor: "#4fd6f7" }}
          className="px-2 py-1 mt-4 text-white rounded-md"
        >
          Sign In
        </button>
        <p className="text-black mt-2 w-full text-center">
          Don't Have Account?
        </p>
        <Link className="text-blue-500 w-full text-center" to={"/signup"}>
          Sign Up Here
        </Link>
      </div>
    </div>
  );
};
