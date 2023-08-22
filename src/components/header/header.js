import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarWithSidebar from "./NavbarWithSidebar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="custom_padding" style={{ backgroundColor: "#0096ff" }}>
        <div className="main_top_header py-1 d-flex align-items-center justify-content-space-between">
          <div className="title_header">WELCOME TO PAKISTAN Chainstaker PORTAL</div>
          <div className="d-flex gap-3 align-items-center header-dropdown">
            <div>
              <select className="select_lang">
                <option>Select Language</option>
                <option>English</option> <option>Urdu</option>{" "}
                <option>Percian</option>
              </select>
            </div>

            <div class="dropdown    ">
              <span style={{ fontSize: "10px" }}>
                USD{" "}
                <span class="arrow-icon">
                  {" "}
                  <i
                    style={{ fontSize: "8px", marginLeft: "3px" }}
                    class=" fas fa-chevron-down"
                  ></i>
                </span>
              </span>
              {/* <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div> */}
            </div>
            <div className="d-lg-block d-none p-0 mt-1">
              <ul className="d-flex align-items-center gap-3 mb-0 p-0 ">
                <li style={{ borderLeft: "1px solid white" }}>
                  <Link to="/abc">
                    <span style={{ paddingLeft: "20px" }}>Wishlist</span>
                  </Link>
                </li>
                <li>
                  <Link to="/abc">
                    <span>Messages</span>
                  </Link>
                </li>
                <Link to="/abc " className="d-flex align-items-center">
                  <button className="header_btn d-flex align-items-center gap-1">
                    <i className="far fa-user white-icon"></i>
                    <p className="m-0">Sign In</p>
                  </button>
                  <span style={{ opacity: ".6" }}>/</span>
                  <button className="header_btn d-flex align-items-center gap-1">
                    <p className="m-0">Register</p>
                  </button>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="custom_padding py-2 main_navbar">
        <NavbarWithSidebar />
      </div>

      <Navbar />
    </>
  );
};

export default Header;
