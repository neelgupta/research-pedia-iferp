import React, { useState } from 'react'
import "./PlansTable.scss"
import Table from '@/components/layouts/Table'
import { Button } from '@/components'
import Breadcrumb from '@/components/layouts/Breadcrumb'
import { icons } from '@/utils/constants'
import { useNavigate } from 'react-router-dom'
const PlansTable = () => {
    const navigate = useNavigate();
       const [rowsPerPage, setRowsPerPage] = useState(5);
              const [currentPage, setCurrentPage] = useState(1);
                const [allKeyList, setAllKeyList] = useState({
                    total: 0,
                    offset: 0,
                    limit: 10,
                    search: "",
                    sortKeyOrder: 1,
                    sortKey: "",
                    data: [
                  
                      {
                      
                        duration : "Annually",
                        amount : "$8/month", 
                        discountamount : "$5/month", 
                        aiCredits : "18000" , 
                        
                      },
                      {
                      
                        duration : "Annually",
                        amount : "$8/month", 
                        discountamount : "$5/month", 
                        aiCredits : "18000" , 
                        
                      },
                      {
                      
                        duration : "Annually",
                        amount : "$8/month", 
                        discountamount : "$5/month", 
                        aiCredits : "18000" , 
                        
                      },
                      {
                      
                        duration : "Annually",
                        amount : "$8/month", 
                        discountamount : "$5/month", 
                        aiCredits : "18000" , 
                        
                      },
                      {
                      
                        duration : "Annually",
                        amount : "$8/month", 
                        discountamount : "$5/month", 
                        aiCredits : "18000" , 
                        
                      },
                    ],
                  });
                  const header = [
                    {
                      title: "Duration",
                      className: "wp-25 justify-content-between",
                      isSort: false,
                    },
                    {
                      title: "Amount",
                      className: "wp-25 justify-content-between",
                      isSort: false,
                    },
                    {
                      title: "Discount Amount",
                      className: "wp-25 justify-content-between",
                      isSort:false,
                    },
                    {
                      title: "AI Credits",
                      className: "wp-25 justify-content-between",
                      isSort: false,
                    },
                    {
                        title: "Action",
                        className: "wp-10 justify-content-center",
                        isSort: false,
                      },
                  
                  ];
                
                  const rowData = [];
                  allKeyList?.data?.forEach((elem, index) => {
                    const { duration, amount, discountamount, aiCredits} =
                      elem;
                    let obj = [
                      {
                        value: (
                         
                           
                              <h6 className="mb-2 text-14-600">{duration}</h6>
            
                          
                     
                        ),
                        className: "h-64 wp-25 justify-content-start pointer",
                      },
                      {
                        value: (
                         
                             <p>{amount}</p>
                             
                           
                        ),
                        className: "wp-25 justify-content-start flex-wrap pointer",
                      },
                      {
                        value: (
                          <p
                            className="mb-0"
                           
                          >
                            {discountamount}
                          </p>
                        ),
                        className: "wp-25 justify-content-start flex-wrap pointer",
                      },
                      {
                        value: (
                          <p
                            className="mb-0"
                          
                          >
                            {aiCredits}
                          </p>
                        ),
                        className: "wp-25 justify-content-start flex-wrap pointer",
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
                              className: "wp-10 justify-content-center flex-wrap",
                            },
                     
                    ];
                    rowData.push({ data: obj });
                  });

  return (
    <div id="planstable-conatiner">
    <div>
      <div className="mb-14">
        <Breadcrumb
          list={[{ title: "Premium Plan"},{ title: "Plans"}]}
          className="text-16-400"
          isGreen
        />
      </div>
      <div className="categorytopics-title">
        <h1>Plans</h1>
      </div>

      <div className='maintable-container'>

 

<div className="table-header d-flex flex-wrap justify-content-between align-items-center">
       <div>
         <h1 className='text-16-600 color-1D26'>Plans</h1>
       </div>
       <div className="d-flex flex-wrap gap-2 mt-5">
        
     

                      <Button
                        btnText="Add New Plan"
                        className="w-150 h-45 br-12 text-18-500"
                        onClick={()=>navigate("/admin/add-plan")}
                       
                      />
       </div>
      
   </div>
     <Table
       setCurrentPage={setCurrentPage}
       currentPage={currentPage}
       rowsPerPage={rowsPerPage}
       setRowsPerPage={setRowsPerPage}
       header={header}
       row={rowData}
       totalRows={allKeyList?.data?.length}
       min="1000px"
       istableaction
       ispaginationcontrols
       isSearch
     />
     </div>

    </div>
  </div>
  )
}

export default PlansTable
