import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// import { fetchUserDetails, getAllTopicsList } from 'store/slices';
import { icons } from 'utils/constants';

// import { getUserType, titleCaseString } from 'utils/helpers';
// import './PopupRegister.scss';

import { PersonalDetails } from './PersonalDetails/PersonalDetails';
import { EducationDetails } from './EducationDetails/EducationDetails';
import { MembershipDetails } from './MembershipDetails/MembershipDetails';
import { Modal } from '@/components';

const PopupRegistration = ({show}) => {
 
 
  const [type, setType] = useState('');

  const subTitle = {
    'personal-details': 'Crafting Your Unique Identity',
    'education-details': 'Shaping Your Academic Journey',
    'membership-details': 'Choose Your Path to Success',
  };
  const arrayOption = [
    {
      id: 1,
      title: 'Personal Details',
      type: 'personal-details',
     
    },
    {
      id: 2,
      title: 'Education Details',
      type: 'education-details',
     
    },
    {
      id: 3,
      title: 'Membership Details',
      type: 'membership-details',
    
    },
  ];

  // useEffect(() => {
  //   if (
  //     localStorage.paymentIntent ||
  //     userDetails?.registration_status === '2'
  //   ) {
  //     setType('membership-details');
  //   } else if (userDetails?.registration_status === '0') {
  //     setType('personal-details');
  //   } else if (userDetails?.registration_status === '1') {
  //     setType('education-details');
  //   } else {
  //     setType('personal-details');
  //   }
  // }, [userDetails]);

  // useEffect(() => {
  //   fetchUserData();
  //   fetchTopicList();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  if (!show) return null;
  return (
    <>
    
      <div id="maindiv">
        <div className="div-1">
          <div className="chol-1-div"></div>
          <div>
            <div></div>
          </div>
        </div>
        <div className="div-2"></div>
        <div className="div-3"></div>
      </div>
      {type && (
        <Modal size="lg" width="1000px" className="register-popup" hideClose>
          <div id="popup-register-container">
            <div className="text-24-600 color-raisin-black text-center mb-3">
              Member Registration
            </div>
            {/* <div
              className="d-flex justify-content-end"
              style={{ width: '150px' }}
            >
              <Button
                isRounded
                text="Cvform"
                btnStyle="primary-dark"
                className="cps-40 cpe-40"
                onClick={() => {
                  const url = `/cvform`;

                  window.open(url, '_blank');
                }}
                disabled={
                  userDetails?.registration_status === '0' ? true : false
                }
              />
            </div> */}

            <div className="text-16-500 color-subtitle-navy text-center mb-4">
              {subTitle[type]}
            </div>
            <div className="details-list cmb-30">
              {arrayOption.map((elem, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className="details-block">
                      {elem.isActive ? (
                        <img
                          src={icons.activeDetails}
                          alt="active"
                          className="active-selection"
                        />
                      ) : (
                        <div className="number-block">{elem.id}</div>
                      )}
                      <div
                        className={`text-18-400 ${
                          elem.isActive ? 'color-new-car' : 'color-black-olive'
                        }`}
                      >
                        {elem.title}
                      </div>
                    </div>
                    {arrayOption.length - 1 !== index && (
                      <div
                        className={`border-saprator ${
                          elem.isActive ? 'active-border' : ''
                        }`}
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
            <div
              id="register-popup-body-block"
              className="cps-40 cpe-40 cpb-10"
            >
              {type === 'personal-details' && (
                <PersonalDetails
                  setType={setType}
               
                />
              )}
              {type === 'education-details' && (
                <EducationDetails
                  setType={setType}
                 
                />
              )}
              {type === 'membership-details' && (
                <MembershipDetails
                 
                />
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default PopupRegistration;
