import React, { useState } from 'react'
import "./AdministratorRolesTable.scss"
import Table from '@/components/layouts/Table';
import { Button, CheckBox } from '@/components';
import Breadcrumb from '@/components/layouts/Breadcrumb';
import { useNavigate } from 'react-router-dom';
import { icons } from '@/utils/constants';
const AdministratorRolesTable = () => {

    const [rowsPerPage, setRowsPerPage] = useState(5);
          const [currentPage, setCurrentPage] = useState(1);
          const navigate = useNavigate();
          const [allStudentList, setAllStudentList] = useState({
         
            sortKeyOrder: 1,
            sortKey: "",
            data: [
              {
              
                name: "Dr.Airi Satou",
                adminuser: "Info@123.com",
               
              },
              {
              
                name: "Dr.Airi Satou",
                adminuser: "Info@123.com",
               
              },
              {
              
                name: "Dr.Airi Satou",
                adminuser: "Info@123.com",
               
              },
              {
              
                name: "Dr.Airi Satou",
                adminuser: "Info@123.com",
               
              },
              {
              
                name: "Dr.Airi Satou",
                adminuser: "Info@123.com",
               
              },
              {
              
                name: "Dr.Airi Satou",
                adminuser: "Info@123.com",
               
              },
              {
              
                name: "Dr.Airi Satou",
                adminuser: "Info@123.com",
               
              },
              {
              
                name: "Dr.Airi Satou",
                adminuser: "Info@123.com",
               
              },
              {
              
                name: "Dr.Airi Satou",
                adminuser: "Info@123.com",
               
              },
              {
              
                name: "Dr.Airi Satou",
                adminuser: "Info@123.com",
               
              },
              {
              
                name: "Dr.Airi Satou",
                adminuser: "Info@123.com",
               
              },
    
    
            ],
          });
          const header = [
            {
              title: "Department Name",
              className: "wp-35 justify-content-between",
              isSort: true,
            },
            {
              title: "Assigned Admin Users",
              className: "wp-35 justify-content-between",
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
            const { name, adminuser } =
              elem;
            let obj = [
               
              {
                
                value: (
                  <div
                    className="d-flex align-items-center gap-3 pointer"
                  >
                    <div>
                      <h6 className="mb-2 text-14-600"><input
                    type="checkbox"
                    id="rememberMe"
                    className="mt-9 me-10"
                  /> {name}</h6>
                    </div>
                  </div>
                ),
                className: "wp-35 justify-content-start pointer pt-5 h-64",
              },
              {
                value: (
                  <p
                    className="mb-0"
                  >
                    {adminuser}
                  </p>
                ),
                className: "wp-35 justify-content-start flex-wrap pointer h-64",
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
                className: "wp-30 justify-content-center flex-wrap h-64",
              },
            ];
            rowData.push({ data: obj });
          });

  return (
    <div id="administratorrole-container">
      <div className="mb-14">
        <Breadcrumb
          list={[{ title: "Manage Users" }, { title: "List Users" }]}
          className="text-16-400"
          isGreen
        />

        <h1 className="topic-text">Administrator Roles </h1>
        <p className='text-16-400 color-1D26 pt-8'>The administrator roles allow you to fine tune exactly what each of your admin users can do within the Research Pedia admin area.</p>
        <div className='maintable-container'>
   <div className="table-header d-flex d-flex justify-content-between align-items-center flex-wrap">
          <div>
            <h1 className='text-16-600 color-1D26'>Administrator Roles</h1>
          </div>
          <div className='d-flex flex-wrap mt-5 gap-3'>
          <Button btnStyle="LBB" btnText="Add New Department" className="ps-24 pe-24 pt-12 pb-12" onClick={()=>navigate("/admin/staff/addadministrator-roles")}/>
            <Button btnText="Add New Department" className="ps-24 pe-24 pt-12 pb-12" onClick={()=>navigate("/admin/staff/addadministrator-roles")}/>
           
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

export default AdministratorRolesTable
