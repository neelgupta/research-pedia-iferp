import React, { useEffect, useState } from 'react'
import "./FeedbackDashboard.scss"
import { useNavigate } from 'react-router-dom';
import Table from '@/components/layouts/Table';
import Breadcrumb from '@/components/layouts/Breadcrumb';
import { icons } from '@/utils/constants';
import { Button } from '@/components';
import Chart from "react-apexcharts";

import { Doughnut, Bar } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement } from "chart.js";
import { useSelector } from 'react-redux';
import DaterangePicker from '@/components/inputs/DaterangePicker';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement);

const FeedbackDashboard = () => {
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
            hate : icons?.hate,
            name: "Dr.Airi Satou",
            csat: "Hate",
            nps: "Passive",
            date: "12/09/2023",
          },
          {
            profile_img: icons?.avatarOneIcons,
            hate : icons?.hate,
            name: "Dr.Airi Satou",
            csat: "Hate",
            nps: "Passive",
            date: "12/09/2023",
          },
          {
            profile_img: icons?.avatarOneIcons,
            hate : icons?.hate,
            name: "Dr.Airi Satou",
            csat: "Hate",
            nps: "Passive",
            date: "12/09/2023",
          },
          {
            profile_img: icons?.avatarOneIcons,
            hate : icons?.hate,
            name: "Dr.Airi Satou",
            csat: "Hate",
            nps: "Passive",
            date: "12/09/2023",
          },
          {
            profile_img: icons?.avatarOneIcons,
            hate : icons?.hate,
            name: "Dr.Airi Satou",
            csat: "Hate",
            nps: "Passive",
            date: "12/09/2023",
          },
          {
            profile_img: icons?.avatarOneIcons,
            hate : icons?.hate,
            name: "Dr.Airi Satou",
            csat: "Hate",
            nps: "Passive",
            date: "12/09/2023",
          },
          {
            profile_img: icons?.avatarOneIcons,
            hate : icons?.hate,
            name: "Dr.Airi Satou",
            csat: "Hate",
            nps: "Passive",
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
          title: "csat",
          className: "wp-40 justify-content-between",
          isSort: true,
        },
        {
          title: "nps",
          className: "wp-30 justify-content-between",
          isSort: true,
        },
        {
          title: "Date",
          className: "wp-30 justify-content-between",
          isSort: true,
        },
        {
          title: "Action",
          className: "wp-20 justify-content-center",
          isSort: false,
        },
      ];
    
      const rowData = [];
      allStudentList?.data?.forEach((elem, index) => {
        const { name, csat, nps, date} =
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
                <div
                className="d-flex align-items-center gap-3 pointer"
                onClick={() =>
                  navigate("/admin/manage-users/list-user/user-details")
                }
              >
                <div className="h-40 w-40 rounded-circle">
                  <img
                    src={elem.hate}
                    alt="profile-img"
                    loading="lazy"
                    className="pointer rounded-circle"
                  />
                </div>
                <div>
                 <p>{csat}</p>
                 
                </div>
              </div>
            ),
            className: "wp-40 justify-content-start flex-wrap pointer",
          },
          {
            value: (
              <p
                className="mb-0"
                onClick={() =>
                  navigate("/admin/manage-users/list-user/user-details")
                }
              >
                {nps}
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
              </div>
            ),
            className: "wp-20 justify-content-center flex-wrap",
          },
        ];
        rowData.push({ data: obj });
      });

      const [activeBarIndex, setActiveBarIndex] = useState(null); // State for active bar index
      const [windowWidth, setWindowWidth] = useState(window.innerWidth);
      const reduxdata = useSelector((state) => state.global.sidebarOpen);
    
      useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
      const handleBarClick = (elements) => {
        if (elements.length > 0) {
          setActiveBarIndex(elements[0].index); // Update active bar index
        }
      };
    
      const doughnutData = {
        labels: ["Love", "Like", "Others"],
        datasets: [
          {
            data: [20, 20, 30, 15, 15],
            backgroundColor: ["#3D8A56", "#56B5734D", "#FF9E004D", "#E944634D", "#B3334C4D"],
            hoverOffset: 10,
            borderWidth: 2,
            borderColor: "#ffffff",
          },
        ],
      };
    
      const centerTextPlugin = {
        id: "centerText",
        beforeDraw(chart) {
          const { width } = chart;
          const { height } = chart;
          const ctx = chart.ctx;
          const centerX = width / 2;
          const centerY = height / 2;
      
          ctx.save();
          // First Line - Large Text
          ctx.font = "bold 32px Inter";
          ctx.fillStyle = "#131920"; // Text color
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText("252", centerX, centerY - 10); // Adjust Y position for first line
      
          // Second Line - Smaller Text
          ctx.font = "16px Inter";
          ctx.fillStyle = "#131920"; // Text color for second line
          ctx.fillText("CSAT", centerX, centerY + 20); // Adjust Y position for second line
      
          ctx.restore();
        },
      };

      const doughnutOptions = {
        responsive: true,
        cutout: "76%",
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
            },
          },
        },
        elements: {
          arc: { borderRadius: 50 },
        },
      };
    
      const barData = {
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        datasets: [
          {
            label: "Data",
            data: [120, 150, 50, 70, 200, 250, 60, 100, 170, 200],
            backgroundColor: (context) => {
              const index = context.dataIndex;
              return index === activeBarIndex ? "#113DCD" : "#E7ECFA"; // Highlight active bar
            },
            borderRadius: 5,
            barPercentage: 0.6,
          },
        ],
      };
    
      const barOptions = {
        responsive: true,
        plugins: {
          legend: { display: false },
          labels: {
            font: {
              family: "Inter",
              size: 14,
              weight: "400",
            },
            textAlign: "center",
            padding: 10,
          },
          tooltip: {
            bodyFont: {
              family: "Inter",
              size: 14,
              weight: "400",
            },
            titleFont: {
              family: "Inter",
              size: 14,
              weight: "400",
            },
          },
        
        },
        scales: {
          x: {
            grid: { display: false },
            title: {
              display: true, 
              text: 'Net promoter scor', 
              font: { size: 14 }, 
              weight: 600,        
              style: 'Inter',
              color: '#5B6B79',
            },
          },
          y: {
            beginAtZero: true,
            grid: { drawBorder: false },
            title: {
              display: true, 
              text: 'Feedback', 
              font: { size: 14 }, 
             
              weight: 600,        
              style: 'Inter',
              color: '#5B6B79',
            },
          },
        },
        onClick: (event, elements) => handleBarClick(elements), 
      };
    
      const cardContainerClass =
        windowWidth >= 992 && windowWidth <= 1300 && reduxdata
          ? "col-6"
          : windowWidth < 576
          ? "col-12"
          : windowWidth < 992
          ? "col-8"
          : "col-4";
    
      const graphContainerClass =
        windowWidth >= 992 && windowWidth <= 1300 && reduxdata
          ? "col-12"
          : windowWidth < 992
          ? "col-12"
          : "col-8";


          const handleDateSelect = (range) => {
            console.log("Selected Range:", range);
          };
        

  return (
    <div id="feedbackdashboard-container">



    <div className="mb-14">
      <Breadcrumb
        list={[{ title: "Feedback" }]}
        className="text-16-400"
        isGreen
      />

      <h1 className="topic-text">Feedback </h1>
  

      <div className="graph-container">
          <div className="row">
            <div className={cardContainerClass}>
              <div className="card-conatiner mt-15" style={{ backgroundColor: "#ffffff" ,height : "450px"}}>
              <div className="d-flex flex-column justify-content-between" style={{ height: "100%" }}>
  <div className="d-flex justify-content-between align-items-center mt-12">
    <div>
      <p className="text-16-600 color-1D26">CSAT</p>
    </div>
    <div>
      <DaterangePicker onDateSelect={handleDateSelect} />
    </div>
  </div>

  {/* Doughnut Chart */}
  <div className="doughnut-container d-flex justify-content-center mt-16 mb-16">
    <Doughnut
      data={doughnutData}
      options={doughnutOptions}
      plugins={[centerTextPlugin]}
      style={{ maxHeight: "200px" }}
    />
  </div>

  <div className="row">
    {[...Array(5)].map((_, index) => (
      <div className="col-6" key={index}>
        <div className="d-flex justify-content-between align-items-center gap-3 mb-12">
          <div className="d-flex align-items-center">
            <img src={icons.hate} alt="hate" className="w-27 h-24" />
            <p className="text-14-400 color-5b6b">Hate</p>
          </div>
          <div>
            <p className="text-14-400 color-1D26">10%</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

              </div>
            </div>
            <div className={graphContainerClass}>
              <div className="bar-container p-10 mt-15">
              
              <div className="d-flex  justify-content-between mt-12 align-items-center ">
                    <div>
                      <p className="text-16-600 color-1D26">NPS</p>
                    </div>
                    <div>
                      <DaterangePicker onDateSelect={handleDateSelect}/>
                    </div>
                  </div>
                <Bar data={barData} options={barOptions} style={{maxHeight : "330px" ,height :"100%"}}/>
                <div className='d-flex flex-wrap justify-content-between mt-12 mb-12 align-items-center'>
                  <div className='mt-5 d-flex gap-2'>
                  <div className='w-18 h-18 ' style={{backgroundColor : "#B3334C" ,borderRadius :"3px"}}></div>
                    <div>
                      <p className='text-14-400 color-5b6b'>01 TO 06 Detractors</p>
                    </div>
                    <div>
                      <p className='text-14-600 color-1D26'>10%</p>
                    </div>
                  </div>
                  <div className='mt-5 d-flex gap-2'>
                    <div className='w-18 h-18 ' style={{backgroundColor : "#FF9E00" ,borderRadius :"3px"}}></div>
                    <div>
                      <p className='text-14-400 color-5b6b'>07 TO 08 Passives </p>
                    </div>
                    <div>
                      <p className='text-14-600 color-1D26'>30%</p>
                    </div>
                  </div>
                  <div className='mt-5 d-flex gap-2'>
                  <div className='w-18 h-18 ' style={{backgroundColor : "#3D8A56" ,borderRadius :"3px"}}></div>
                    <div>
                      <p className='text-14-400 color-5b6b'>07 TO 08 Promoters </p>
                    </div>
                    <div>
                      <p className='text-14-600 color-1D26'>60%</p>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      <div className='maintable-container'>

 

 <div className="table-header d-flex d-flex justify-content-between align-items-center">
        <div>
          <h1 className='text-16-600 color-1D26'>Feedback</h1>
        </div>
        <div>
         <Button btnText="Export" />
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

export default FeedbackDashboard
