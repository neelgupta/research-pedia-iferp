import React, { useEffect, useState } from 'react'
import "./UserNavbar.scss"
import { icons } from '@/utils/constants'
import { Button, SearchInput } from '@/components'
import { Container } from 'react-bootstrap'
const UserNavbar = () => {

  const token = true;
  const [time, setTime] = useState({
    hours: 2,
    minutes: 51,
    seconds: 21,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { hours, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) => String(value).padStart(2, "0");

  const { hours, minutes, seconds } = time;
  return (
    <>
      {/*     
      <Container>
        <div id="UserNavbar-container" className="">
          <div className="d-flex justify-content-between align-items-center mt-20">
            <div className="d-flex">
              <div className="click-icon d-flex align-items-center">
                <img src={icons.loginicon} alt="clickicon" className="img-fluid" />
              </div>

            </div>
            <div className="d-flex align-items-center gap-2">
              <Button
                btnText="Login"
                btnStyle="user-login"
              />
              <Button
                btnText="Sign Up"
                btnStyle="user-signup"
              />
            </div>
          </div>
        </div>
      </Container> */}

      <div id='user-navbar'>
      
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex gap-5 '>
              <div className='img'>
                <img src={icons.loginicon} alt='img' className='img-fluid' />
              </div>
              <div className='search-tex'>
                <SearchInput
                  placeholder="Search over 200+ million research papers"
                />
              </div>
            </div>

            <div className='d-flex align-items-center gap-4'>
              <div>
                <img src={icons.postimg} alt='postimg' className='img-fluid'/>
              </div>
          
              <div className="countdown">
      <h4 className="countdown-header">Upgrade & get 6 months free!</h4>
      <div className="time d-flex gap-2">
        {["hours", "minutes", "seconds"].map((unit, index) => {
          const formattedTime = formatTime(time[unit]);
          return (
            <div className="time-box" key={index}>
              <div className="d-flex gap-1">
                <div className="first-latter d-flex justify-content-center align-items-center">
                  <h1>{formattedTime[0]}</h1>
                </div>
                <div className="sec-latter d-flex justify-content-center align-items-center">
                  <h1>{formattedTime[1]}</h1>
                </div>
                {unit !== "seconds" && (
                  <div className="colon d-flex justify-content-center align-items-center">
                    <h1>:</h1>
                  </div>
                )}
              </div>
              <div className="time-text">
                <h1>{unit.charAt(0).toUpperCase() + unit.slice(1)}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
              <div className="profile-card d-flex align-items-center p-3 gap-4 ">
                <div className='d-flex align-items-center'>
                <div>
                  <img
                    src={icons.profileimg}
                    alt="Profile"
                    className="profile-image h-full"
                  />
                </div>
                <div>
                  <div className="profile-text ms-3">
                    <h5 className="mb-1 d-flex align-items-center">
                      Mary Jane
                    </h5>
                    <p className="mb-0 text-muted">ID - 18346441</p>
                    <p className="mb-0 text-muted">Plan - Professional Premium</p>
                  </div>
                </div>
                </div>
                <div>

                <div className="ms-auto dropdown-icon">
                  <img
                    src={icons.downarrow}
                    alt="Profile"
                    className=""
                  />
                </div>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </>
  )
}

export default UserNavbar
