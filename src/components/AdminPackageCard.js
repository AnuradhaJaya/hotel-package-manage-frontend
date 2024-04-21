import React, { useState } from "react";
import { GrStatusGood } from "react-icons/gr";
import { TiDelete } from "react-icons/ti";
import STATUS from "../common/status";
import AdminEditPackage from "../components/AdminEditPackage";
import displayLKRCurrency from "../helpers/displayCurrency";
import AdminDeletePackage from "./AdminDeletePackage";
const AdminPackageCard = ({ data, fetchdata }) => {
  const [editPackage, setEditPackage] = useState(false);
  const [deletePackage, setDeletePackage] = useState(false);
  return (
    <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents">
      <tbody>
        <tr className="woocommerce-cart-form__cart-item cart_item">
          <td>
            <div className="w-[200px] h-auto">
              {/* mx-auto object-fill h-[full] */}
              <img src={data.packImage[0]} alt="package" />
            </div>
          </td>
          <td className="product-name w-80">
            <div className="text-ellipsis line-clamp-2 w-48 text-left">
              {data.packtName}
            </div>
          </td>
          <td className="product-name w-5 text-left">
            <div className="">{data.category}</div>
          </td>
          <td className="product-name w-7 text-left">
            {displayLKRCurrency(data.price)}
          </td>
          <td className="product-name w-5 text-left">
            <span className="product-quantity">{data.discount}%</span>
          </td>
          <td className="product-name w-5 text-left">
            <div
              className="text-3xl pl-5 hover:scale-110"
              title={
                data?.status === STATUS.Deactivate ? "Deactivated" : "Active"
              }
            >
              {data?.status === STATUS.Deactivate && (
                <div
                  className="text-red-500"
                  onClick={() => setEditPackage(true)}
                >
                  <GrStatusGood />
                </div>
              )}
              {data?.status !== STATUS.Deactivate && (
                <div
                  className="text-green-500"
                  onClick={() => setEditPackage(true)}
                >
                  <GrStatusGood />
                </div>
              )}
            </div>
            {/* <div className="text-3xl pl-5 hover:scale-110 text-sky-500" onClick={()=>setEditPackage(true)}>
                                <GrStatusGood/>
                    </div> */}
          </td>
          {editPackage && (
            <AdminEditPackage
              onClose={() => setEditPackage(false)}
              packageData={data}
              fetchData={fetchdata}
            />
          )}
          <td className="pr-5"></td>
          <td>
            <div
              className="text-3xl  hover:text-red-700  hover:scale-110 cursor-pointer"
              title="delete"
              onClick={() => setDeletePackage(true)}
            >
              <TiDelete />
            </div>
          </td>
          {deletePackage && (
            <AdminDeletePackage
              onClose={() => setDeletePackage(false)}
              packageData={data}
              fetchData={fetchdata}
            />
          )}
        </tr>
      </tbody>
    </table>
  );
};

export default AdminPackageCard;