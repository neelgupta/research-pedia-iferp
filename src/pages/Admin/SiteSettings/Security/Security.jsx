import React, { useState } from 'react'
import "./Security.scss"
import Breadcrumb from '@/components/layouts/Breadcrumb'
import { Button } from '@/components'
import { icons } from '@/utils/constants'
const Security = () => {
const [openQr , setopenQr] = useState(false)
    const openQrcode =() =>{
        console.log("hello")
        setopenQr(true)
    }

  return (
    <div>
         <div id="Security-container">
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
          <h1>Security</h1>
        </div>
        <div className='add-rearches'>
          <div className='rearch-form border'>
            <div className='rearch-title'>
              <h1>Add Research Category & Topics</h1>
            </div>
          <div className='text-add'>
            <h1>Google Authenticator</h1>
          </div>
          {
            openQr ? (<>
                <img src={icons.QRcode} alt='QRcode' className='img-fluid ps-26'/>
                {/* <div className=''>
                    <Button 
                        btnText="VUVSFHVXCACXZCXDFS" btnStyle="GGB"
                    />
                </div> */}
                <div className='Qr-genrate d-flex mt-16 ms-26 mb-26'>
                    <Button btnText="Continue" className="BWP"/>
                    <span className='ps-12 d-flex align-items-center'>Generate Code</span>
                </div>
            </>) : (
                 <div className="save-button d-flex justify-content-start align-items-end">
                 <Button btnText="Save" onClick={openQrcode}  className="BWP" />
               </div>
            )
          }
           
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Security
