import React, { useEffect, useState } from "react";
import UploadPackage from "../components/uploadPackage";
import SummaryApi from "../common";
import AdminPackageCard from "../components/AdminPackageCard";

const AllPackages = () => {
  const [openUploadPackage, setOpenUploadPackage] = useState(false);
  const [allPackage, setAllPackage] = useState([]);

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
    <div className="pt-12">
      <div className="bg-black px-5 py-2 flex justify-between items-center">
        <h2 className="font-bold text-lg text-white">All Packages</h2>
        <button
          className="border-2 py-2 px-4 text-sm text-white"
          onClick={() => setOpenUploadPackage(true)}
        >
          Add Package
        </button>
      </div>

      {/* all package show*/}
      {/* overflow-y-scroll [calc(100vh-0px)]*/}
      <div className="">
        <section className="pt-20 pb-10 h-full overflow-y-scroll">
          <div className="container">
            <div className="">
              <div className="col">
                <div className="woocommerce">
                  <div className="cart-product-wrap">
                    <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents">
                      <tbody>
                        <tr>
                          <td className="">Package Name</td>
                          <td className="">Category</td>
                          <td className="">Price/Rs:</td>
                          <td className="">Discount</td>
                          <td className="">Status</td>
                        </tr>
                      </tbody>
                    </table>
                    <div>
                      {allPackage.map((product, index) => {
                        return (
                          <AdminPackageCard
                            data={product}
                            key={index + "allPackage"}
                            fetchdata={fetchAllPackage}
                          />
                        );
                      })}
                    </div>
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
    </div>
  );
};
export default AllPackages;
