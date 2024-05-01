import React, { useEffect, useState } from "react";
import UploadPackage from "../components/uploadPackage";
import SummaryApi from "../common";
import AdminPackageCard from "../components/AdminPackageCard";
import { GrStatusGood } from "react-icons/gr";
import { TiDelete } from "react-icons/ti";
import { FiPlus } from "react-icons/fi";
import STATUS from "../common/status";
import AdminEditPackage from "../components/AdminEditPackage";
import displayLKRCurrency from "../helpers/displayCurrency";
import AdminDeletePackage from "../components/AdminDeletePackage";
import moment from "moment";
const AllPackages = () => {
  const [openUploadPackage, setOpenUploadPackage] = useState(false);
  const [allPackage, setAllPackage] = useState([]);

  const [editPackage, setEditPackage] = useState(null);
  const [deletePackage, setDeletePackage] = useState(null);

  const fetchAllPackage = async () => {
    try {
      const response = await fetch(SummaryApi.allPackage.url);
      const dataResponse = await response.json();
      console.log("package data", dataResponse);
      setAllPackage(dataResponse?.data || []);
    } catch (error) {
      console.error("Error fetching all packages:", error);
    }
  };

  useEffect(() => {
    fetchAllPackage();
  }, []);

  return (
    <main id="main" class="main">
      <div className="pagetitle -mt-12">
        <h1>Offers</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Offers</li>
          </ol>
        </nav>
      </div>
      <div className="">
        <section className="pt-0 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col">
                <div className="woocommerce">
                  <div className="cart-product-wrap">
                    <div className=" -px-7 pb-60 flex justify-between items-center">
                      <h2 className="font-bold text-3xl text-black"> </h2>
                      <button
                        className="border-2 py-2 px-3 text-sm   bg-black text-white"
                        onClick={() => setOpenUploadPackage(true)}
                      >
                        <div className="flex justify-between items-center text-right gap-2">
                          <div className="text-lg">
                            <FiPlus />
                          </div>
                          New Offer
                        </div>
                      </button>
                    </div>
                    <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents text-lg">
                      <tbody>
                        <tr>
                          <td className="product-name">Image</td>
                          <td className="product-name pl-0">Name</td>
                          <td className="">Category</td>
                          <td className="product-quantity">Price/Rs:</td>
                          <td className="">Discount</td>
                          <td className="product-name">Exp-Date</td>
                          <td className="">Status</td>
                          <td>&nbsp;</td>
                        </tr>

                        <>
                          {allPackage.map((data, index) => (
                            <tr
                              className="woocommerce-cart-form__cart-item cart_item"
                              key={index}
                            >
                              <td className="product-thumbnail">
                                <div className="product-details">
                                  <img src={data?.packImage[0]} alt="" />
                                </div>
                              </td>
                              <td>
                                <div className="w-24 font-black text-left">
                                  {data?.packtName}
                                </div>
                              </td>
                              <td>
                                <div className="pl-4 text-left product-details">
                                  {data?.category}
                                </div>
                              </td>
                              <td>
                                <span className="totalprice">
                                  {displayLKRCurrency(data?.price)}
                                </span>
                              </td>
                              <td>
                                <div className="product-quantity">
                                  <span className="minus">
                                    {data?.discount}
                                  </span>
                                </div>
                              </td>
                              <td>
                                <div className="product-details">
                                  {moment(data?.endDate).format("LL")}
                                </div>
                              </td>
                              <td className="product-remove">
                                <div
                                  className="text-3xl pl-5 hover:scale-110"
                                  title={
                                    data?.status === STATUS.Deactivate
                                      ? "Deactivated"
                                      : "Active"
                                  }
                                  onClick={() => setEditPackage(data)}
                                >
                                  <div
                                    className={
                                      data?.status === STATUS.Deactivate
                                        ? "text-red-500"
                                        : "text-green-500"
                                    }
                                  >
                                    <GrStatusGood />
                                  </div>
                                </div>
                              </td>
                              <td className="product-remove">
                                <div className="remover-field">
                                  <div
                                    className="text-3xl  hover:text-red-700  hover:scale-110 cursor-pointer"
                                    title="delete"
                                    onClick={() => setDeletePackage(data)}
                                  >
                                    <TiDelete />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))}
                          {editPackage && (
                            <AdminEditPackage
                              onClose={() => setEditPackage(null)}
                              packageData={editPackage}
                              fetchData={fetchAllPackage}
                            />
                          )}
                          {deletePackage && (
                            <AdminDeletePackage
                              onClose={() => setDeletePackage(null)}
                              packageData={deletePackage}
                              fetchData={fetchAllPackage}
                            />
                          )}
                        </>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* create Package */}
      {openUploadPackage && (
        <UploadPackage
          onClose={() => setOpenUploadPackage(false)}
          fetchdata={fetchAllPackage}
        />
      )}
    </main>
  );
};
export default AllPackages;
