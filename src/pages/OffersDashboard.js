import React from 'react'
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/quill/quill.snow.css";
import "../assets/vendor/quill/quill.bubble.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/simple-datatables/style.css";
import "../assets/css/styleadmin.css";
const OffersDashboard = () => {
    return (
        <main id="main" className="main">
          <div className="pagetitle">
            <h1>Dashboard</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </nav>
          </div>
          {/* End Page Title */}
    
          <section className="section dashboard">
            <div className="row">
    
              {/* Left side columns */}
              <div className="col-lg-8">
                <div className="row">
    
                  {/* Sales Card */}
                  <div className="col-xxl-4 col-md-6">
                    <div className="card info-card sales-card">
    
                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>
    
                          <li><a className="dropdown-item" href="#">Today</a></li>
                          <li><a className="dropdown-item" href="#">This Month</a></li>
                          <li><a className="dropdown-item" href="#">This Year</a></li>
                        </ul>
                      </div>
    
                      <div className="card-body">
                        <h5 className="card-title">Sales <span>| Today</span></h5>
    
                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-cart"></i>
                          </div>
                          <div className="ps-3">
                            <h6>145</h6>
                            <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>
    
                          </div>
                        </div>
                      </div>
    
                    </div>
                  </div>{/* End Sales Card */}
    
                  {/* Revenue Card */}
                  <div className="col-xxl-4 col-md-6">
                    <div className="card info-card revenue-card">
    
                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>
    
                          <li><a className="dropdown-item" href="#">Today</a></li>
                          <li><a className="dropdown-item" href="#">This Month</a></li>
                          <li><a className="dropdown-item" href="#">This Year</a></li>
                        </ul>
                      </div>
    
                      <div className="card-body">
                        <h5 className="card-title">Revenue <span>| This Month</span></h5>
    
                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-currency-dollar"></i>
                          </div>
                          <div className="ps-3">
                            <h6>$3,264</h6>
                            <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>
    
                          </div>
                        </div>
                      </div>
    
                    </div>
                  </div>{/* End Revenue Card */}
    
                  {/* Customers Card */}
                  <div className="col-xxl-4 col-xl-12">
    
                    <div className="card info-card customers-card">
    
                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>
    
                          <li><a className="dropdown-item" href="#">Today</a></li>
                          <li><a className="dropdown-item" href="#">This Month</a></li>
                          <li><a className="dropdown-item" href="#">This Year</a></li>
                        </ul>
                      </div>
    
                      <div className="card-body">
                        <h5 className="card-title">Customers <span>| This Year</span></h5>
    
                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-people"></i>
                          </div>
                          <div className="ps-3">
                            <h6>1244</h6>
                            <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>
    
                          </div>
                        </div>
    
                      </div>
                    </div>
    
                  </div>{/* End Customers Card */}
    
                  {/* Reports */}
                  <div className="col-12">
                    <div className="card">
    
                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>
    
                          <li><a className="dropdown-item" href="#">Today</a></li>
                          <li><a className="dropdown-item" href="#">This Month</a></li>
                          <li><a className="dropdown-item" href="#">This Year</a></li>
                        </ul>
                      </div>
    
                      <div className="card-body">
                        <h5 className="card-title">Reports <span>/Today</span></h5>
    
                        {/* Line Chart */}
                        <div id="reportsChart"></div>
    
                        {/* <script>
                          document.addEventListener("DOMContentLoaded", () => {
                            new ApexCharts(document.querySelector("#reportsChart"), {
                              series: [{
                                name: 'Sales',
                                data: [31, 40, 28, 51, 42, 82, 56],
                              }, {
                                name: 'Revenue',
                                data: [11, 32, 45, 32, 34, 52, 41]
                              }, {
                                name: 'Customers',
                                data: [15, 11, 32, 18, 9, 24, 11]
                              }],
                              chart: {
                                height: 350,
                                type: 'area',
                                toolbar: {
                                  show: false
                                },
                              },
                              markers: {
                                size: 4
                              },
                              colors: ['#4154f1', '#2eca6a', '#ff771d'],
                              fill: {
                                type: "gradient",
                                gradient: {
                                  type: "vertical",
                                  shadeIntensity: 1,
                                  opacityFrom: 0.4,
                                  opacityTo: 0.1,
                                  stops: [0, 100]
                                }
                              },
                              xaxis: {
                                categories: ['1', '2', '3', '4', '5', '6', '7'],
                              },
                            }).render();
                          });
                        </script> */}
    
                      </div>
                    </div>
                  </div>{/* End Reports */}
    
                </div>
              </div>{/* End Left Side Columns */}
    
              {/* Right Side Columns */}
              <div className="col-lg-4">
    
                {/* Notifications */}
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Notifications</h5>
    
                    <ul className="notifications-list">
                      <li>
                        <a href="#">
                          <div className="user-img"><img src="img/avatars/avatar-1.jpg" alt="user avatar"/></div>
                          <div className="notification-content">
                            <h6>New Order <span className="float-end text-muted font-sm">2 mins ago</span></h6>
                            <p className="text-muted">You have a new order from a customer.</p>
                          </div>
                        </a>
                      </li>
    
                      <li>
                        <a href="#">
                          <div className="user-img"><img src="img/avatars/avatar-2.jpg" alt="user avatar"/></div>
                          <div className="notification-content">
                            <h6>New User Registration <span className="float-end text-muted font-sm">1 day ago</span></h6>
                            <p className="text-muted">A new user has registered on your website.</p>
                          </div>
                        </a>
                      </li>
    
                      <li>
                        <a href="#">
                          <div className="user-img"><img src="img/avatars/avatar-3.jpg" alt="user avatar"/></div>
                          <div className="notification-content">
                            <h6>New Message <span className="float-end text-muted font-sm">3 days ago</span></h6>
                            <p className="text-muted">You have a new message from a customer.</p>
                          </div>
                        </a>
                      </li>
    
                      <li>
                        <a href="#">
                          <div className="user-img"><img src="img/avatars/avatar-4.jpg" alt="user avatar"/></div>
                          <div className="notification-content">
                            <h6>New Comment <span className="float-end text-muted font-sm">1 week ago</span></h6>
                            <p className="text-muted">A new comment has been posted on your blog.</p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>{/* End Notifications */}
    
              </div>{/* End Right Side Columns */}
    
            </div>{/* End Row */}
          </section>
    
        </main>
      );
}

export default OffersDashboard
