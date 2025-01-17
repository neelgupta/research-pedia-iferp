import React, { useState } from 'react'
import "./AdministratorUser.scss"
import Table from '@/components/layouts/Table';
import Breadcrumb from '@/components/layouts/Breadcrumb';
import { useNavigate } from 'react-router-dom';
import { icons } from '@/utils/constants';
import { Button } from '@/components';
const AdministratorUser = () => {
     const [rowsPerPage, setRowsPerPage] = useState(5);
      const [currentPage, setCurrentPage] = useState(1);
      const navigate = useNavigate();
      const [allStudentList, setAllStudentList] = useState({
     
        sortKeyOrder: 1,
        sortKey: "",
        data: [
          {
          
            name: "Dr.Airi Satou",
            email: "Info@123.com",
            username: "Paid",
            role: "Active",
            departments: "Professional",
          },
          {
          
            name: "Dr.Airi Satou",
            email: "Info@123.com",
            username: "Paid",
            role: "Active",
            departments: "Professional",
          },
          {
          
            name: "Dr.Airi Satou",
            email: "Info@123.com",
            username: "Paid",
            role: "Active",
            departments: "Professional",
          },
          {
          
            name: "Dr.Airi Satou",
            email: "Info@123.com",
            username: "Paid",
            role: "Active",
            departments: "Professional",
          },
          {
          
            name: "Dr.Airi Satou",
            email: "Info@123.com",
            username: "Paid",
            role: "Active",
            departments: "Professional",
          },
          {
          
            name: "Dr.Airi Satou",
            email: "Info@123.com",
            username: "Paid",
            role: "Active",
            departments: "Professional",
          },
          {
          
            name: "Dr.Airi Satou",
            email: "Info@123.com",
            username: "Paid",
            role: "Active",
            departments: "Professional",
          },
          {
          
            name: "Dr.Airi Satou",
            email: "Info@123.com",
            username: "Paid",
            role: "Active",
            departments: "Professional",
          },
          {
          
            name: "Dr.Airi Satou",
            email: "Info@123.com",
            username: "Paid",
            role: "Active",
            departments: "Professional",
          },
          {
          
            name: "Dr.Airi Satou",
            email: "Info@123.com",
            username: "Paid",
            role: "Active",
            departments: "Professional",
          },
          {
          
            name: "Dr.Airi Satou",
            email: "Info@123.com",
            username: "Paid",
            role: "Active",
            departments: "Professional",
          },
          {
          
            name: "Dr.Airi Satou",
            email: "Info@123.com",
            username: "Paid",
            role: "Active",
            departments: "Professional",
          },
          {
          
            name: "Dr.Airi Satou",
            email: "Info@123.com",
            username: "Paid",
            role: "Active",
            departments: "Professional",
          },


        ],
      });
      const header = [
        {
          title: "Name",
          className: "wp-30 justify-content-between h-40",
          isSort: true,
        },
        {
          title: "Email Address",
          className: "wp-30 justify-content-between",
          isSort: true,
        },
        {
          title: "Username",
          className: "wp-20 justify-content-between",
          isSort: true,
        },
        {
          title: "Admin Role",
          className: "wp-20 justify-content-between",
          isSort: true,
        },
        {
          title: "Assigned Departments",
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
        const { name, email, username, role, departments } =
          elem;
        let obj = [
          {
            value: (
              <div
                className="d-flex align-items-center gap-3 pointer"
              >
                <div>
                  <h6 className="mb-2 text-14-600">{name}</h6>
                </div>
              </div>
            ),
            className: "wp-30 justify-content-start pointer h-64",
          },
          {
            value: (
              <p
                className="mb-0"
              >
                {email}
              </p>
            ),
            className: "wp-30 justify-content-start flex-wrap pointer",
          },
          {
            value: (
              <p
                className="mb-0"
              >
                {username}
              </p>
            ),
            className: "wp-20 justify-content-start flex-wrap pointer",
          },
          {
            value: (
              <p
                className="mb-0"
              >
                {role}
              </p>
            ),
            className: "wp-20 justify-content-start flex-wrap pointer",
          },
          {
            value: (
              <p
                className="mb-0"
               
              >
                {departments}
              </p>
            ),
            className: "wp-30 justify-content-start flex-wrap pointer",
          },
          {
            value: (
              <div className="d-flex gap-2 align-items-center justify-content-center">
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
    <div id="administratoruser-container">
      <div className="mb-14">
        <Breadcrumb
          list={[{ title: "Manage Users" }, { title: "List Users" }]}
          className="text-16-400"
          isGreen
        />

        <h1 className="topic-text">Administrator User </h1>
        <p className='text-16-400 color-1D26 pt-8'>This is where you configure the users which you want to allow to access the admin area.</p>
        <div className='maintable-container'>
   <div className="table-header d-flex d-flex justify-content-between align-items-center flex-wrap">
          <div>
            <h1 className='text-16-600 color-1D26'>Administrators</h1>
          </div>
          <div>
            <Button btnText="Add New Administrator" className="ps-24 pe-24 pt-12 pb-12" onClick={()=>navigate("/admin/staff/addadministrator-user")}/>
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

        />
        </div>
      </div>
    </div>
  )
}

export default AdministratorUser
