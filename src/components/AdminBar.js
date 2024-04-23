import React from "react";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/quill/quill.snow.css";
import "../assets/vendor/quill/quill.bubble.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/simple-datatables/style.css";
import "../assets/css/styleadmin.css";
import { BsHouse } from "react-icons/bs";
const AdminBar = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link collapsed" href="index.html">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>
        

        <li className="nav-heading">Pages</li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="users-pr">
            <span>Profile</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="">
            <span>Room</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="">
            <span>Event</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="">
            <span>Offers</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="">
            <i className="bi bi-question-circle"></i>
            <span>F.A.Q</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="">
            <i className="bi bi-envelope"></i>
            <span>Contact</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="">
            <i className="bi bi-card-list"></i>
            <span>Register</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="">
            <i className="bi bi-box-arrow-in-right"></i>
            <span>Login</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default AdminBar;
