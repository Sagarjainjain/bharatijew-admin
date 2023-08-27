import React from "react";
import "./adminpanel.css";
import Header from "../../components/header/header";
import ProductList from "../../components/productlist/productlist";
import ExtraInput from "../../components/extrainput/extrainput";
import InputFooter from "../../components/inputfooter/inputfooter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {LOGOUT} from "../../constants/actiontypes"
import {useDispatch}from "react-redux"
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleLogout = (e) => {
    e.preventDefault()
    dispatch({ type: LOGOUT });
    navigate("/");
    window.location.reload()
  };
  return (
    <>
      <div className="adminpanel-navbar section__padding">
        <div className="adminpanel-title">
          <h1>Bharati Jewellers</h1>
          <p>Admin Panel</p>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <Header />
      <ExtraInput />
      <InputFooter />
      <ProductList />
      <ToastContainer />
    </>
  );
};

export default AdminPanel;
