"use client";
import React, { useState, useEffect } from "react";
import CardStatus from "./components/cardstatus";
import PopupForm from "./components/generatebill";
import { useBillingManagerDropdownQuery, useBillingManagerQuery } from "@/store/query/getapis";

const BillingManager = () => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [userType, setUserType] = useState("client"); // Default to "client"
  const [status, setStatus] = useState(""); // Default to "all" for "All Bills"

  // Fetch data from API using userType and status
  const { data: apidata } = useBillingManagerQuery({ userType, status });

  // Map the API response to the format expected by CardStatus
  const StatusData = apidata?.map((item) => ({
    id: item.id,
    name: "User Name", // Add the actual user name if available from the API
    code: `#${item.id}`, // Use the ID for the code
    duration: `${new Date(item.from).toLocaleDateString()} - ${new Date(item.updatedAt).toLocaleDateString()}`, // Format the date
    amounth: `$${item.amount} USD`, // Format the amount
    status: item.status,
    role: item.role  
})) || []; // Fallback to an empty array if no data

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-[25px] font-bold">Dashboard</h1>
          <p className="my-2 text-sm text-[#666777]">Monday, 29, April, 2024</p>
        </div>
        <div className="mt-3 flex flex-wrap gap-5 md:mt-0 md:flex-nowrap md:justify-end">
          <button
            onClick={() => setFormOpen(true)}
            className="flex items-center gap-2 rounded bg-[#F5F7F9] px-2 py-1 text-[#656676]"
          >
            Generate Bill
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#656676"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_200_24978"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#656676" />
              </mask>
              <g mask="url(#mask0_200_24978)">
                <path
                  d="M11 17H13V13H17V11H13V7H11V11H7V13H11V17ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                  fill="#656676"
                />
              </g>
            </svg>
          </button>

          {/* Status filter */}
          <select
            name="status"
            onChange={(e) => setStatus(e.target.value)}
            className="bg-[#F5F7F9] px-2"
          >
            <option value="">All Bills</option>
            <option value="pending">Pending</option>
            <option value="cleared">Cleared</option>
          </select>

          {/* User type filter */}
          <select
            name="userType"
            onChange={(e) => setUserType(e.target.value)}
            className="bg-[#F5F7F9] px-2"
          >
            <option value="client">Client</option>
            <option value="interpreter">Interpretier</option>
          </select>
        </div>
      </div>

      {/* Display status data from API */}
      <CardStatus StatusData={StatusData} />

      {/* Popup Form */}
      <PopupForm isOpen={isFormOpen} setUserType={setUserType} Roles={userType} onClose={() => setFormOpen(false)} />
    </>
  );
};

export default BillingManager;
