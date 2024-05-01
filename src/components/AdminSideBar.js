import React from "react";
import { Link } from "react-router-dom";
import avt from "../assets/img/avatar/avatar-illustrated-02.png";
import mainavt from "../assets/img/avatar/avatar-illustrated-01.png";
function AdminSideBar() {
  return (
    <>
      <aside className="sidebar shadow-none -mt-3">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item ">
            <Link to={""} className="nav-link h-20 space-x-3">
              <img src={avt} alt="User" className="w-8 h-8 rounded-full" />
              <span className="space-x-5">Alan & Alone</span>
            </Link>
          </li>
          {/* End Dashboard Nav */}

          <div className="pt-12 ">
            <li className="nav-item ">
              <Link to={"dashboard-packages"} className="nav-link collapsed">
                <i className="bi bi-grid-fill"></i>
                <span className="text-neutral-500">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/404"} className="nav-link collapsed">
                {" "}
                <i className="bi bi-person-fill"></i>
                <span className="text-neutral-500">User</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"all-packages"} className="nav-link collapsed">
                <i className="bi bi-handbag-fill"></i>
                <span className="text-neutral-500">Offers</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/404"} className="nav-link collapsed">
                {" "}
                <i className="bi bi-box-arrow-left"></i>
                <span className="text-neutral-500">Logout</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/404"} className="nav-link collapsed">
                <i className="bi bi-file-earmark-excel-fill"></i>
                <span className="text-neutral-500">Not Found</span>
              </Link>
            </li>
          </div>
        </ul>
        <div className="flex  items-center mt-64 space-x-3 pl-5">
          <img src={mainavt} alt="User" className="w-14 h-14 rounded-full" />
          <div>
            <p className="font-semibold text-sm">Nafisa Sh.</p>
            <p className="text-xs text-gray-500  -mt-5">Support manager</p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default AdminSideBar;
