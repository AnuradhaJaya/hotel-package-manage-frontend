import React, { useState } from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome.min.css";
import "../assets/plugins/owl-carousel/owl.carousel.min.css";
import "../assets/plugins/Magnific-Popup/magnific-popup.css";
import "../assets/plugins/animate-css/animate.min.css";
import "../assets/plugins/swiper/swiper.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/custom.css";
import logo2 from "../assets/img/logo2.png";
import { BsSearch } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import summaryApi from "../common";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/usersSlice";
import ROLE from "../common/role";

const Header = () => {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  //console.log("user header", user);
  const [menuDisplay, setMenuDisplay] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const fetchData = await fetch(summaryApi.logout_user.url, {
      method: summaryApi.logout_user.method,
      credentials: "include",
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    }
    if (data.error) {
      toast.error(data.message);
    }
  };

  return (
    // <header className='h-16 shadow-md bg-white fixed w-full z-40'>
    //     <div className='container mx-auto h-full flex items-center px-4 justify-between'>
    //         <div className='w={90} h={50}'>
    //             <Link to={"/"}>
    //                 <img className='default-logo' src={logo2} data-rjs="2" alt="ecommerce" />
    //             </Link>
    //         </div>
    //          <div className="col-6 col-sm-6 col-md-6 col-lg-7 col-xl-6">
    //             <div className="menu-container">
    //                 <div className="menu-wraper">
    //                     <nav>
    //                         <div className="header-menu dosis">
    //                             <div id="menu-button"><i className="fa fa-bars"></i></div>
    //                             <ul>
    //                                 <li><a href=" ">Home</a></li>
    //                                 <li><a href=" ">Room</a></li>
    //                                 <li><a href=" ">Event</a></li>
    //                                 <li class="active"><a href=" ">Offers</a></li>
    //                                 <li><a href="">Contact</a></li>
    //                             </ul>
    //                         </div>
    //                     </nav>
    //                 </div>
    //             </div>
    //         </div>
    //         {/* <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2" title="search">
    //             <input type='text' className='w-full outline-none ' placeholder='Search item here...' />
    //             <div className='text-lg min-w-[50px] h-8 bg-black flex items-center justify-center rounded-r-full text-white'>
    //             <BsSearch />
    //             </div>
    //         </div> */}
    //         <div className="col-12 col-sm-12 col-md-3 top-order">
    //             <div className="modal-menu-container">
    //                 <ul className="list-unstyled mb-0">
    //                     <li>

    //                         <div className='relative flex justify-center'>
    //                         {
    //                             user?._id && (
    //                             <div className='text-4xl cursor-pointer relative flex justify-center' onClick={()=>setMenuDisplay(preve => !preve)}>
    //                                 {
    //                                     user?.profilepic ? (
    //                                         <img src={user?.profilepic} className='w-10 h-10 rounded-full' alt={user?.name}/>

    //                                     ) : (
    //                                         <FaRegCircleUser />
    //                                     )
    //                                 }
    //                             </div>
    //                             )
    //                         }
    //                         </div>
    //                         {menuDisplay && (
    //                             <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded '>
    //                                 <nav>
    //                                     {
    //                                         user?.role === ROLE.ADMIN && (
    //                                             <Link to={"admin-panel/all-packages"} className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2' onClick={() => setMenuDisplay(prev => !prev)}>Admin</Link>
    //                                         )
    //                                     }
    //                                 </nav>
    //                             </div>
    //                         )}
    //                     </li>
    //                     <li>
    //                         <div className="text-3xl relative" title="Cart list">
    //                             <span className='text-black cursor-pointer'>
    //                                 <MdShoppingCart />
    //                             </span>
    //                             <div className='bg-red-700 text-yellow-50 w-5  h-5 rounded-full p-0 flex  justify-center absolute -top-2 -right-1'>
    //                                 <p className='text-sm '>0</p>
    //                             </div>
    //                         </div>
    //                     </li>
    //                     <li>
    //                         <div>
    //                             {user?._id ? (
    //                                 <button onClick={handleLogout} className="px-4 py-2 bg-black text-white rounded-sm hover:bg-neutral-800 scale-110 ">Logout</button>
    //                             ) : (
    //                                 <Link to={"/login"} className="px-4 py-3.5 bg-black text-white rounded-sm hover:bg-neutral-800 scale-110 " title="Login">Login</Link>
    //                             )}
    //                         </div>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>
    // </header>
    <header className="header">
      <div className="main-header-wraper main-header inner-page-header shadow-lg">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-6 col-sm-6 col-md-3 col-lg-2 col-xl-3">
              <div className="logo-container">
                <div className="w={90} h={50}">
                  <Link to={"/"}>
                    <img
                      className="default-logo"
                      src={logo2}
                      data-rjs="2"
                      alt="ecommerce"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-7 col-xl-6">
              <div className="menu-container">
                <div className="menu-wraper">
                  <nav>
                    <div className="header-menu dosis">
                      <div id="menu-button">
                        <i className="fa fa-bars"></i>
                      </div>
                      <ul>
                        <li>
                          <a href=" ">Home</a>
                        </li>
                        <li>
                          <a href=" ">Room</a>
                        </li>
                        <li>
                          <a href=" ">Event</a>
                        </li>
                        <li class="active">
                          <a href=" ">Offers</a>
                        </li>
                        <li>
                          <a href="">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-3 top-order">
              <div className="modal-menu-container">
                <ul className="list-unstyled mb-0">
                  <li>
                    <div className="relative flex justify-center">
                      {user?._id && (
                        <div
                          className="text-4xl cursor-pointer relative flex justify-center"
                          onClick={() => setMenuDisplay((preve) => !preve)}
                        >
                          {user?.profilepic ? (
                            <img
                              src={user?.profilepic}
                              className="w-10 h-10 rounded-full"
                              alt={user?.name}
                            />
                          ) : (
                            <FaRegCircleUser />
                          )}
                        </div>
                      )}
                    </div>
                    {menuDisplay && (
                      <div className="absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg opacity-50 rounded ">
                        <nav>
                          {user?.role === ROLE.ADMIN && (
                            <Link
                              to={"admin-panel/all-packages"}
                              className="whitespace-nowrap hidden md:block p-3 text-black"
                              onClick={() => setMenuDisplay((prev) => !prev)}
                            >
                              Admin 
                            </Link>
                          )}
                        </nav>
                      </div>
                    )}
                  </li>
                  <li>
                    <div className="text-3xl relative" title="Cart list">
                      <span className="text-black cursor-pointer">
                        <MdShoppingCart />
                      </span>
                      <div className="bg-red-700 text-yellow-50 w-5  h-5 rounded-full p-0 flex  justify-center absolute -top-2 -right-1">
                        <p className="text-sm ">0</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      {user?._id ? (
                        <button
                          onClick={handleLogout}
                          className="px-4 py-2 bg-black text-white rounded-sm hover:bg-neutral-800 scale-110 "
                        >
                          Logout
                        </button>
                      ) : (
                        <Link
                          to={"/login"}
                          className="px-4 py-3.5 bg-black text-white rounded-sm hover:bg-neutral-800 scale-110 "
                          title="Login"
                        >
                          Login
                        </Link>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
