import Breadcrumb from "@/components/layouts/Breadcrumb";
import "./ListUser.scss";
import Table from "@/components/layouts/Table";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { icons } from "@/utils/constants";

const ListUser = () => {
  const [allStudentList, setAllStudentList] = useState({
    total: 0,
    offset: 0,
    limit: 10,
    search: "",
    sortKeyOrder: 1,
    sortKey: "",
    data: [
      {
        profile: "John Doe",
        account: "johndoe@example.com",
        email: "johndoe@example.com",
        age: 25,
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
    const { profile, joinUs, plan, credit, number, date } = elem;
    let obj = [
      {
        value: `${profile}`,
        className: "wp-40 justify-content-start",
      },
      {
        value: joinUs,
        className: "wp-20 justify-content-start flex-wrap",
      },
      {
        value: plan,
        className: "wp-20 justify-content-start flex-wrap",
      },
      {
        value: credit,
        className: "wp-20 justify-content-start flex-wrap",
      },
      {
        value: number,
        className: "wp-30 justify-content-start flex-wrap",
      },
      {
        value: date,
        className: "wp-30 justify-content-start flex-wrap",
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
          header={header}
          row={rowData}
          totalRows={10}
          currentPage={1}
          min="1000px"
        />
      </div>
    </div>
  );
};

export default ListUser;
