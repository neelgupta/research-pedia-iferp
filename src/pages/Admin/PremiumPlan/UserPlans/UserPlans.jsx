import React from 'react'
import "./UserPlans.scss"
import Breadcrumb from "@/components/layouts/Breadcrumb";

import Table from "@/components/layouts/Table";
import { useState } from "react";
import { icons } from "@/utils/constants";
import { useNavigate } from "react-router-dom";
const UserPlans = () => {
    
     const [rowsPerPage, setRowsPerPage] = useState(5);
      const [currentPage, setCurrentPage] = useState(1);
      const navigate = useNavigate();
      const [allStudentList, setAllStudentList] = useState({
        total: 0,
        offset: 0,
        limit: 10,
        search: "",
        sortKeyOrder: 1,
        sortKey: "",
        data: [
          {
            profile_img: icons?.avatarTenIcons,
            name: "Mr.Ashton Cox",
            joinUs: "Student",
            plan: "Paid",
            date: "12/09/2023",
          },
          {
            profile_img: icons?.avatarTenIcons,
            name: "Mr.Ashton Cox",
            joinUs: "Student",
            plan: "Paid",
            date: "12/09/2023",
          },
          {
            profile_img: icons?.avatarTenIcons,
            name: "Mr.Ashton Cox",
            joinUs: "Student",
            plan: "Paid",
            date: "12/09/2023",
          },
          {
            profile_img: icons?.avatarTenIcons,
            name: "Mr.Ashton Cox",
            joinUs: "Student",
            plan: "Paid",
            date: "12/09/2023",
          },
          {
            profile_img: icons?.avatarTenIcons,
            name: "Mr.Ashton Cox",
            joinUs: "Student",
            plan: "Paid",
            date: "12/09/2023",
          },
          {
            profile_img: icons?.avatarTenIcons,
            name: "Mr.Ashton Cox",
            joinUs: "Student",
            plan: "Paid",
            date: "12/09/2023",
          },
          {
            profile_img: icons?.avatarTenIcons,
            name: "Mr.Ashton Cox",
            joinUs: "Student",
            plan: "Paid",
            date: "12/09/2023",
          },
          
        ],
      });
      const header = [
        {
          title: "Name",
          className: "wp-40 justify-content-between",
          isSort: true,
        },
        {
            title: "Plan",
            className: "wp-20 justify-content-between",
            isSort: true,
          },

        {
          title: "Join As",
          className: "wp-20 justify-content-between",
          isSort: true,
        },
       
       
        {
          title: "Registered Date",
          className: "wp-30 justify-content-between",
          isSort: true,
        },
        {
          title: "Action",
          className: "wp-30 justify-content-center",
          isSort: false,
        },
      ];
    
      const rowData = [];
      allStudentList?.data?.forEach((elem, index) => {
        const {profile_img, name, joinUs, plan, date } =
          elem;
        let obj = [
          {
            value: (
              <div
                className="d-flex align-items-center gap-3 pointer"
                onClick={() =>
                  navigate("/admin/manage-users/list-user/user-details")
                }
              >
                <div className="h-40 w-40 rounded-circle">
                  <img
                    src={elem.profile_img}
                    alt="profile-img"
                    loading="lazy"
                    className="pointer rounded-circle"
                  />
                </div>
                <div>
                  <h6 className="mb-2 text-14-600">{name}</h6>
                
                </div>
              </div>
            ),
            className: "wp-40 justify-content-start pointer",
          },
          {
            value: (
              <p
                className="mb-0"
                onClick={() =>
                  navigate("/admin/manage-users/list-user/user-details")
                }
              >
                {plan}
              </p>
            ),
            className: "wp-20 justify-content-start flex-wrap pointer",
          },
          {
            value: (
              <p
                className="mb-0"
                onClick={() =>
                  navigate("/admin/manage-users/list-user/user-details")
                }
              >
                {joinUs}
              </p>
            ),
            className: "wp-20 justify-content-start flex-wrap pointer",
          },
         
          {
            value: (
              <p
                className="mb-0"
                onClick={() =>
                  navigate("/admin/manage-users/list-user/user-details")
                }
              >
                {date}
              </p>
            ),
            className: "wp-30 justify-content-start flex-wrap pointer",
          },
          {
            value: (
              <div className="d-flex gap-2 align-items-center justify-content-center">
                <img
                  src={icons?.viewIcons}
                  alt="view-icons"
                  loading="lazy"
                  className="pointer"
                />
                <img
                  src={icons?.editIcons}
                  alt="edit-icons"
                  loading="lazy"
                  className="pointer"
                />
                <img
                  src={icons?.deleteIcons}
                  alt="delete-icons"
                  loading="lazy"
                  className="pointer"
                />
              </div>
            ),
            className: "wp-30 justify-content-center flex-wrap",
          },
        ];
        rowData.push({ data: obj });
      });
    

  return (
    <div id="plan-user-container">
    <div className="mb-14">
      <Breadcrumb
        list={[{ title: "Premium Plan" }, { title: "User Plans" }]}
        className="text-16-400"
        isGreen
      />

      <h1 className="topic-text">User Plans</h1>
  

      <div className='maintable-container'>
 <div className="table-header d-flex d-flex justify-content-between align-items-center">
        <div>
          <h1 className='text-16-600 color-1D26'>User Plans</h1>
        </div>

    </div>
      <Table
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        header={header}
        row={rowData}
        totalRows={allStudentList?.data?.length}
        min="1000px"
        isSearch
        ispaginationcontrols
        istableaction
        ispagination

      />
      </div>

    </div>
  </div>
  )
}

export default UserPlans
