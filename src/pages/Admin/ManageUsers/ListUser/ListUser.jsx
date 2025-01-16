import Breadcrumb from "@/components/layouts/Breadcrumb";
import "./ListUser.scss";
import Table from "@/components/layouts/Table";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { icons } from "@/utils/constants";

const ListUser = () => {
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
        profile_img: icons?.avatarOneIcons,
        account: "Dr.Airi Satou",
        email: "Info@123.com",
        paymentStatus: "Paid",
        activity: "Active",
        joinUs: "Professional",
        plan: "Free",
        credit: "4000/8000",
        number: "+91 9876543210",
        date: "12/09/2023",
      },
      {
        profile_img: icons?.avatarTwoIcons,
        account: "Mr.Ashton Cox",
        email: "Info@123.com",
        paymentStatus: "Paid",
        activity: "Active",
        joinUs: "Student",
        plan: "Paid",
        credit: "4000/8000",
        number: "+91 9876543210",
        date: "12/09/2023",
      },
      {
        profile_img: icons?.avatarThreeIcons,
        account: "Mr.Ashton Cox",
        email: "Info@123.com",
        paymentStatus: "Paid",
        activity: "Active",
        joinUs: "Student",
        plan: "Paid",
        credit: "4000/8000",
        number: "+91 9876543210",
        date: "12/09/2023",
      },
      {
        profile_img: icons?.avatarFourIcons,
        account: "Mr.Ashton Cox",
        email: "Info@123.com",
        paymentStatus: "Paid",
        activity: "Active",
        joinUs: "Student",
        plan: "Paid",
        credit: "4000/8000",
        number: "+91 9876543210",
        date: "12/09/2023",
      },
      {
        profile_img: icons?.avatarFiveIcons,
        account: "Mr.Ashton Cox",
        email: "Info@123.com",
        paymentStatus: "Paid",
        activity: "Active",
        joinUs: "Student",
        plan: "Paid",
        credit: "4000/8000",
        number: "+91 9876543210",
        date: "12/09/2023",
      },
      {
        profile_img: icons?.avatarSixIcons,
        account: "Mr.Ashton Cox",
        email: "Info@123.com",
        paymentStatus: "Paid",
        activity: "Active",
        joinUs: "Student",
        plan: "Paid",
        credit: "4000/8000",
        number: "+91 9876543210",
        date: "12/09/2023",
      },
      {
        profile_img: icons?.avatarSevenIcons,
        account: "Mr.Ashton Cox",
        email: "Info@123.com",
        paymentStatus: "Paid",
        activity: "Active",
        joinUs: "Student",
        plan: "Paid",
        credit: "4000/8000",
        number: "+91 9876543210",
        date: "12/09/2023",
      },
      {
        profile_img: icons?.avatarEightIcons,
        account: "Mr.Ashton Cox",
        email: "Info@123.com",
        paymentStatus: "Paid",
        activity: "Active",
        joinUs: "Student",
        plan: "Paid",
        credit: "4000/8000",
        number: "+91 9876543210",
        date: "12/09/2023",
      },
      {
        profile_img: icons?.avatarNineIcons,
        account: "Mr.Ashton Cox",
        email: "Info@123.com",
        paymentStatus: "Paid",
        activity: "Active",
        joinUs: "Student",
        plan: "Paid",
        credit: "4000/8000",
        number: "+91 9876543210",
        date: "12/09/2023",
      },
      {
        profile_img: icons?.avatarTenIcons,
        account: "Mr.Ashton Cox",
        email: "Info@123.com",
        paymentStatus: "Paid",
        activity: "Active",
        joinUs: "Student",
        plan: "Paid",
        credit: "4000/8000",
        number: "+91 9876543210",
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
      title: "Join As",
      className: "wp-20 justify-content-between",
      isSort: true,
    },
    {
      title: "Plan",
      className: "wp-20 justify-content-between",
      isSort: true,
    },
    {
      title: "AI credit",
      className: "wp-20 justify-content-between",
      isSort: true,
    },
    {
      title: "Mobile Number",
      className: "wp-30 justify-content-between",
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
    const { profile, joinUs, plan, credit, number, date, account, email } =
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
              <h6 className="mb-2 text-14-600">{account}</h6>
              <p className="mb-0 text-12-400">{email}</p>
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
            {number}
          </p>
        ),
        className: "wp-30 justify-content-start flex-wrap pointer",
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
    <div className="list-user-container">
      <div className="mb-14">
        <Breadcrumb
          list={[{ title: "Manage Users" }, { title: "List Users" }]}
          className="text-16-400"
          isGreen
        />

        <h1 className="topic-text">List Users </h1>

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
  );
};

export default ListUser;
