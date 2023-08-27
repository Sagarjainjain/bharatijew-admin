import React, { useState } from "react";
import "./loginpage.css";
import logo from "../../assets/images/bharatilogo.jpg";
import CustomInput from "../../widget/inputpage/custominput";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAccount } from "../../actions/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAccount(loginData, navigate, toast));
  };

  return (
    <div className="loginpage-container section__padding flex__center">
      <div className="loginpage-card">
        <div className="loginpage-card_media">
          <div className="loginpage-card_logo">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="loginpage-card_form">
          <form className="form-login" onSubmit={handleSubmit}>
            <CustomInput
              placeholder="Enter Username"
              onchange={(e) =>
                setLoginData({ ...loginData, username: e.target.value })
              }
            />
            <CustomInput
              placeholder="Enter password"
              onchange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      <ToastContainer progressStyle={{ color: "red" }} />
    </div>
  );
};

export default LoginPage;
