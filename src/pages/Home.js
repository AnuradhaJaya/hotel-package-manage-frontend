import React from "react";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/quill/quill.snow.css";
import "../assets/vendor/quill/quill.bubble.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/simple-datatables/style.css";
import "../assets/css/styleadmin.css";

import bg from "../assets/img/pattern2.png";
import CategoryList from "../components/CategoryList";
import AllPackageCategory from "../components/AllPackageCategory";
import PackageSidebar from "../components/PackageSidebar";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header/>
      <section className="page-title-inner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* page title inner */}
              <div className="page-title-wrap">
                <div className="page-title-heading">
                  <h1 className="h2">
                    Limited<span>Offers</span>
                  </h1>
                </div>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href=" ">home</a>
                  </li>
                  <li className="active">
                    <a href=" ">Offers</a>
                  </li>
                </ul>
              </div>
              {/* End of page title inner */}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-12">
                  <AllPackageCategory />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  {/* blog pagination */}
                  {/* <div className="blog-pagination-wrap">
                    <ul className="pagination blog-pagination list-unstyled">
                      <li className="disabled">
                        <a href=" ">
                          <i className="fa fa-angle-left"></i>
                        </a>
                      </li>
                      <li>
                        <a href=" ">01</a>
                      </li>
                      <li className="active">
                        <a href=" ">02</a>
                      </li>
                      <li>
                        <a href=" ">03</a>
                      </li>
                      <li>
                        <a href=" ">04</a>
                      </li>
                      <li>
                        <a href=" ">
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div> */}
                  {/* End of blog pagination */}
                </div>
              </div>
            </div>
            <PackageSidebar/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
