import React from 'react'
import "./UserFeedback.scss"
import Breadcrumb from '@/components/layouts/Breadcrumb'
import { icons } from '@/utils/constants'
const UserFeedback = () => {
  return (
    <div id="feedbackuser-container">



    <div className="mb-14">
      <Breadcrumb
        list={[{ title: "Feedback" },{ title: "Feedback Detail" }]}
        className="text-16-400"
        isGreen
      />

      <h1 className="topic-text">Feedback </h1>

      <div className='user-details mt-10'>
    <div className='row align-items-center'>
        <div className='col-xxl-7  col-lg-5 d-flex align-items-center'>
            <div className='left-userdetails'>
                <div
                    className="d-flex align-items-center gap-3 pointer"
                    onClick={() =>
                        navigate("/admin/manage-users/list-user/user-details")
                    }
                >
                    <div className="h-70 w-70 rounded-circle">
                        <img
                            src={icons.avatarOneIcons}
                            alt="profile-img"
                            loading="lazy"
                            className="pointer rounded-circle h-70 w-70"
                        />
                    </div>
                    <div>
                        <h6 className="text-14-600 color-1319">Mr.Anshan H.</h6>
                        <span className='text-12-400 color-2125'>Professional Member</span>
                    </div>
                </div>
            </div>
        </div>

        <div className='col-xxl-5 col-lg-7'>
            <div className='row d-flex align-items-center '>
                <div className='col-6  d-flex flex-column justify-content-center'>
                    <div className='mb-8'><img src={icons.mail} alt="mail" /> <span className='text-14-400 color-1319'>anshan@gmail.com</span></div>
                    <div className='mb-8'><img src={icons.locationicon} alt="location" /> <span className='text-14-400 color-1319'>New York</span></div>
                </div>
                <div className='col-6  d-flex flex-column justify-content-center'>
                    <div className='mb-8'><img src={icons.phoneicon} alt="phone" /> <span className='text-14-400 color-1319'>(+91) 86542 39581</span></div>
                    <div className='mb-8'><img src={icons.linkicon} alt="link" /> <span className='text-14-400 color-113D'>https://anshan.dh.url</span></div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className='user-card'>
  <div className='row'>
    <div className='col-6'>
      <div className='left-card'>
        <div className='card-header'>
          <h1 className='text-16-600 color-1D26'>CSAT</h1>
        </div>
        <div className='card-title'>
          <div><img src={icons.hate} className='w-58 h-52'/> <span className='text-14-400 color-1319'>Indifferent</span></div>
        </div>
      </div>
    </div>
    <div className='col-6'>
    <div className='right-card'>
        <div className='card-header'>
          <h1 className='text-16-600 color-1D26'>NPS</h1>
        </div>
        <div className='card-title'>
          <div><img src={icons.Npscardimg} className=''/> <span className='text-14-400 color-1319'>Detractor</span></div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className='surveydetails'>
  <div><h1>Survey Details</h1></div>

  <div>
  <div className='survey-card'>
        <div className='card-header'>
          <h1 className='text-16-600 color-1D26'>General Feedback</h1>
        </div>
        <div className='card-title'>
          <div className='card-question'>
           <p className='text-14-400 color-2125'>1. How frequently do you use Research Pedia?</p>
           <p className='text-14-400 color-2125'>Daily</p>
          </div>
        </div>
      </div>
  </div>
</div>
    </div>
  </div>
  )
}

export default UserFeedback
