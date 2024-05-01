import React from "react";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/quill/quill.snow.css";
import "../assets/vendor/quill/quill.bubble.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/simple-datatables/style.css";
import "../assets/css/styleadmin.css";
import { Link } from "react-router-dom";

function AdminSideBar() {
  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item ">
            <Link to={""} className="nav-link h-20">
              <i className="bi bi-grid"></i>
              <span>Alone</span>
            </Link>
          </li>
          {/* End Dashboard Nav */}

          <div className="pt-12 bg-red-500  ">
            <li className="nav-item gap-3">
              <Link to={"dashboard-packages"} className="nav-link collapsed">
                <i className="bi bi-grid-1x2-fil"></i>
                <span className="text-neutral-500">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link collapsed" href="users-profile.html">
                <i className="bi bi-person-fill"></i>
                <span className="text-neutral-500">User</span>
              </a>
            </li>
            <li className="nav-item">
              <Link to={"all-packages"} className="nav-link collapsed">
                <i className="bi bi-handbag-fill"></i>
                <span className="text-neutral-500">Offers</span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link collapsed" href="users-profile.html">
                <i className="bi bi-box-arrow-left"></i>
                <span className="text-neutral-500">Logout</span>
              </a>
            </li>
            <li className="nav-item">
              <Link to={"/404"} className="nav-link collapsed">
                <i className="bi bi-file-earmark-excel-fill"></i>
                <span className="text-neutral-500">Not Found</span>
              </Link>
            </li>
          </div>
        </ul>
      </aside>
    </>
  );
}

export default AdminSideBar;
