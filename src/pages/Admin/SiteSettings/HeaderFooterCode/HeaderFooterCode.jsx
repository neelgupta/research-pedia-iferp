import Breadcrumb from '@/components/layouts/Breadcrumb'
import React from 'react'
import "./HeaderFooterCode.scss"
import { Button } from '@/components'
const HeaderFooterCode = () => {
  return (
   
         <div id="headerfootercode-container">
      <div>
        <div className='mb-14'>
          <Breadcrumb
            list={[
              { title: "Site Settings" },
              { title: "Category & Topics" }
            ]}
            className="text-16-400"
            isGreen
          />
        </div>
        <div className='categorytopics-title'>
          <h1>Header/Footer Code</h1>
        </div>
        <div className='add-rearches'>
          <div className='rearch-form border'>
            <div className='rearch-title'>
              <h1>Place HTML/JavaScript Snippet</h1>
            </div>
          <div className='text-add'>
            <h1>Header Code</h1>
            <div className='heade-part ms-26 me-26'></div>
          </div>
          <div className='text-add mt-28'>
            <h1>Header Code</h1>
            <div className='heade-part ms-26 me-26'></div>
          </div>
          <div className="save-button d-flex justify-content-end align-items-end">
                 <Button btnText="Save"   className="BWP" />
               </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default HeaderFooterCode
