import React from "react";
import "./routes.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  Home,
  Orders,
  Notifications,
  HelpSupport,
  Settings,
  ErrorPage,
} from "./Pages/index";
import Sidebar from "./Components/Sidebar";

function RoutesScreen() {
  return (
    <div className="routes-wrapper">
      <BrowserRouter>
        <div className="routes-container">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="main-content">
            <Routes>
              <Route expect path="/home" element={<Home />} />
              <Route expect path="/orders" element={<Orders />} />
              <Route expect path="/notifications" element={<Notifications />} />
              <Route expect path="/helpsupport" element={<HelpSupport />} />
              <Route expect path="/settings" element={<Settings />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default RoutesScreen;
