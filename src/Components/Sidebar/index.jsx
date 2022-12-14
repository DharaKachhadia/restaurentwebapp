import React from "react";
import "./sidebar.scss";
import Logo from "../../assets/footerlogo.svg";
import Order from "../../assets/ordertimer.svg";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { CgLoadbarDoc } from "react-icons/cg";
import { MdMailOutline } from "react-icons/md";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import { HiArrowSmRight } from "react-icons/hi";

function SideBar() {
  let location = useLocation();
  const CURRENT_WB_NAME = location.pathname.split("/")[1];
  return (
    <div className="sidebar-wrapper">
      <div className="logo-container">
        <img src={Logo} alt="logo" className="logo" />
        <p>Pomo & co</p>
      </div>
      <ul>
        <li className={CURRENT_WB_NAME === "home" && "active"}>
          <Link to={"./home"} className="list-item">
            <AiOutlineHome className="sidler-icon" size={22} />
            Home
          </Link>
        </li>
        <li className={CURRENT_WB_NAME === "orders" && "active"}>
          <Link to={"./orders"} className="list-item">
            <CgLoadbarDoc className="sidler-icon" size={25} />
            Orders
          </Link>
        </li>
        <li className={CURRENT_WB_NAME === "notifications" && "active"}>
          <Link to={"./notifications"} className="list-item">
            <MdMailOutline className="sidler-icon" size={22} />
            Notifications
          </Link>
        </li>
        <li className={CURRENT_WB_NAME === "helpsupport" && "active"}>
          <Link to={"./helpsupport"} className="list-item">
            <AiOutlineQuestionCircle className="sidler-icon" size={22} />
            HelpSupport
          </Link>
        </li>
        <li className={CURRENT_WB_NAME === "settings" && "active"}>
          <Link to={"./settings"} className="list-item">
            <AiOutlineSetting className="sidler-icon" size={22} />
            Settings
          </Link>
        </li>
      </ul>
      <div className="order-card">
        <div className="order-icon">
          <img src={Order} alt="logo" className="order-card-icon" />
        </div>
        <p className="order-ready">Your Order is now Ready </p>
        <div className="Splint-Doumo">
          <p>Splint Doumo</p>
          <p>Order Id: #ED564F</p>
        </div>
        <div className="order-Details">
          <p className="Details">Details</p>
          <HiArrowSmRight size={25} className="right-arrow" />
        </div>
      </div>
      <div className="email-container">
        <div>
          <p className="name">Mark Clarke</p>
          <p className="name-email">markclarke@gmail.com</p>
        </div>
        <div className="down-up">
          <HiOutlineChevronUpDown size={35} />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
