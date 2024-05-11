<<<<<<< Updated upstream
import React, { useMemo } from "react";
import Card from "components/card";
import SummaryApi from "../../../../common"
=======
import Card from "components/card";
import SummaryApi from "../../../../common";
>>>>>>> Stashed changes
import { useEffect, useState } from "react";
import { TbMessage } from "react-icons/tb";
import SendEmailMessage from "../../email/components/SendEmailMessage";
import moment from "moment";
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes


const CheckTable = (props) => {
  const [allEmail, setAllEmail] = useState([]);
  const [openSendMessage, setOpenSendMessage] = useState(false);
  const fetchAllEmails = async () => {
    try {
      const response = await fetch(SummaryApi.get_emails.url);
      const dataResponse = await response.json();
      console.log("email data", dataResponse);
      setAllEmail(dataResponse?.data || []);
    } catch (error) {
      console.error("Error fetching all emails:", error);
    }
  };

  useEffect(() => {
    fetchAllEmails();
  }, []);

  return (
<<<<<<< Updated upstream
        <div className="">
          <Card  extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
            {/* Top Creator Header */}
            <div className="relative flex items-center justify-between pt-4">
=======
    <div className="">
       
        {/* NFt Header */}
          <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
            {/* Top Creator Header */}
            <div className="flex h-fit w-full items-center justify-between rounded-t-2xl bg-white px-4 pt-4 pb-[20px] shadow-2xl shadow-gray-100 dark:!bg-navy-700 dark:shadow-none">
>>>>>>> Stashed changes
              <h4 className="text-lg font-bold text-navy-700 dark:text-white">
                Send Email
              </h4>
              <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
                See all
              </button>
            </div>
            {/* Top Creator Heading */}
            <div className="w-full overflow-x-scroll px-4 md:overflow-x-hidden">
              <table
<<<<<<< Updated upstream

                className="w-full min-w-[500px] overflow-x-scroll"
              >
                <thead>

                  <tr>
                    <th>
                      <div className="flex items-center justify-between pt-4 pb-2 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                        Name
                      </div>
                    </th>
                    <th>
                      <div className="flex items-center justify-between pt-4 pb-2 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                        Email
                      </div>
                    </th>
                    <th>
                      <div className="flex items-center justify-between pt-4 pb-2 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                        Phone
                      </div>
                    </th>
                    <th>
                      <div className="flex items-center justify-between pt-4 pb-2 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                        Send Date
                      </div>
                    </th>
                  </tr>

                </thead>

                <tbody className="px-4">
                  {allEmail.map((data, index) => (
                    <tr>
                      <td>
                        <p className="text-md font-medium text-navy-600 dark:text-white">
                          {data?.firstName}
                        </p>
                      </td>
                      <td>
                        <p className="text-md font-medium text-navy-600  dark:text-white">
                          {data?.email}
                        </p>
                      </td>
                      <td>
                        <p className="text-md font-medium text-navy-600  dark:text-white">
                          {data?.phone}
                        </p>
                      </td>
                      <td>
                        <p className="text-md font-medium text-navy-600  dark:text-white">
                          {moment(data?.createdAt).format('LL')}
                        </p>
                      </td>
                      <td>
                        <p className="text-2xl font-bold   text-navy-400 hover:scale-105 hover:text-cyan-500 dark:text-white" onClick={() => setOpenSendMessage(data)}>
                          <TbMessage />
                        </p>
                      </td>
                    </tr>
                  ))}
                  {openSendMessage && (
                    <SendEmailMessage
                      onClose={() => setOpenSendMessage(null)}
                      emailData={openSendMessage}
                      fetchData={fetchAllEmails}
                    />
                  )}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

=======

                className="w-full min-w-[500px] overflow-x-scroll"
              >
                <thead>

                  <tr>
                    <th>
                      <div className="flex items-center justify-between pt-4 pb-2 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                        Name
                      </div>
                    </th>
                    <th>
                      <div className="flex items-center justify-between pt-4 pb-2 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                        Email
                      </div>
                    </th>
                    <th>
                      <div className="flex items-center justify-between pt-4 pb-2 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                        Phone
                      </div>
                    </th>
                    <th>
                      <div className="flex items-center justify-between pt-4 pb-2 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                        Send Date
                      </div>
                    </th>
                  </tr>

                </thead>

                <tbody className="px-4">
                {allEmail.map((data, index) => (
                      <tr>                          
                            <td>
                              <p className="text-md font-medium text-navy-600 dark:text-white">
                                {data?.firstName}
                              </p>  
                            </td>
                            <td>
                              <p className="text-md font-medium text-navy-600  dark:text-white">
                                {data?.email}
                              </p>  
                            </td>
                            <td>
                              <p className="text-md font-medium text-navy-600  dark:text-white">
                                {data?.phone}
                              </p>  
                            </td>
                            <td>
                              <p className="text-md font-medium text-navy-600  dark:text-white">
                                {moment(data?.createdAt).format('LL')}
                              </p>  
                            </td>
                            <td>
                              <p className="text-2xl font-bold   text-navy-400 hover:scale-105 hover:text-cyan-500 dark:text-white" onClick={() => setOpenSendMessage(data)}>
                              <TbMessage />
                              </p>  
                            </td>                                             
                      </tr>
                      ))} 
                                                   {openSendMessage && (
                            <SendEmailMessage
                              onClose={() => setOpenSendMessage(null)}
                              emailData={openSendMessage}
                              fetchData={fetchAllEmails}
                            />
                          )} 
                </tbody>
              </table>
            </div>
          </Card>


    </div>
>>>>>>> Stashed changes
  );
};

export default CheckTable;
