import React from 'react';
import "./Home.scss";
import { Button } from '@/components';
import { icons } from '@/utils/constants/icon';
import { Row, Col, Container } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
const Home = () => {
   const navigate = useNavigate();
    const carddata = [
        {
            cardTitle: 'Engineering',
            followers: [
                { follow: "2.33M", followText: "View" },
                { follow: "2.33M", followText: "Post" },
                { follow: "2.33M", followText: "Authors" }
            ],
            cardText: [
                { text: "Engineering", value: "90.0 K Posts" },
                { text: "Engineering", value: "90.0 K Posts" },
                { text: "Engineering", value: "90.0 K Posts" },
                { text: "Engineering", value: "90.0 K Posts" },
                { text: "Engineering", value: "90.0 K Posts" }
            ]
        },
        {
            cardTitle: 'Science',
            followers: [
                { follow: "1.8M", followText: "View" },
                { follow: "1.5M", followText: "Post" },
                { follow: "1.2M", followText: "Authors" }
            ],
            cardText: [
                { text: "Science", value: "80.0 K Posts" },
                { text: "Science", value: "70.0 K Posts" },
                { text: "Science", value: "60.0 K Posts" },
                { text: "Science", value: "50.0 K Posts" },
                { text: "Science", value: "40.0 K Posts" }
            ]
        },
        {
            cardTitle: 'Science',
            followers: [
                { follow: "1.8M", followText: "View" },
                { follow: "1.5M", followText: "Post" },
                { follow: "1.2M", followText: "Authors" }
            ],
            cardText: [
                { text: "Science", value: "80.0 K Posts" },
                { text: "Science", value: "70.0 K Posts" },
                { text: "Science", value: "60.0 K Posts" },
                { text: "Science", value: "50.0 K Posts" },
                { text: "Science", value: "40.0 K Posts" }
            ]
        },
        {
            cardTitle: 'Science',
            followers: [
                { follow: "1.8M", followText: "View" },
                { follow: "1.5M", followText: "Post" },
                { follow: "1.2M", followText: "Authors" }
            ],
            cardText: [
                { text: "Science", value: "80.0 K Posts" },
                { text: "Science", value: "70.0 K Posts" },
                { text: "Science", value: "60.0 K Posts" },
                { text: "Science", value: "50.0 K Posts" },
                { text: "Science", value: "40.0 K Posts" }
            ]
        },
        {
            cardTitle: 'Science',
            followers: [
                { follow: "1.8M", followText: "View" },
                { follow: "1.5M", followText: "Post" },
                { follow: "1.2M", followText: "Authors" }
            ],
            cardText: [
                { text: "Science", value: "80.0 K Posts" },
                { text: "Science", value: "70.0 K Posts" },
                { text: "Science", value: "60.0 K Posts" },
                { text: "Science", value: "50.0 K Posts" },
                { text: "Science", value: "40.0 K Posts" }
            ]
        },
        {
            cardTitle: 'Science',
            followers: [
                { follow: "1.8M", followText: "View" },
                { follow: "1.5M", followText: "Post" },
                { follow: "1.2M", followText: "Authors" }
            ],
            cardText: [
                { text: "Science", value: "80.0 K Posts" },
                { text: "Science", value: "70.0 K Posts" },
                { text: "Science", value: "60.0 K Posts" },
                { text: "Science", value: "50.0 K Posts" },
                { text: "Science", value: "40.0 K Posts" }
            ]
        }
    ];

    const images = [
        {person : icons.person1},
        {person : icons.person2},
        {person : icons.person3},
        {person : icons.person4},
        {person : icons.person5},
        {person : icons.person6},
        {person : icons.person7}
      ];
      const extraCount = "+4k";
      
    return (
        <div id='userhome-container' className='rearchPedia-scroll'>
           
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
                onClick={()=>{
                    navigate("/login")
                }}
              />
              <Button
                btnText="Sign Up"
                btnStyle="user-signup"
                onClick={()=>{
                    navigate("/sign-up")
                }}
              />
            </div>
          </div>
        </div>
      </Container> 
      <div className="head-line d-flex justify-content-center align-items-center text-center">
    <span className="text-14-400 color-ffff">
        You’re a Prime Member for 7-days! Enjoy FREE Audio papers & more. 
        <span className="text-14-400 color-FFD1 ms-12">Request Unflagging <FaChevronRight/></span>
    </span>
</div>

            <div className='userhome-section rearchPedia-scroll'>
            <div className="hero-section d-flex align-items-center">
                <Container className=''>
                    <Row className="align-items-center">
                        <Col lg={6} xs={12} className="order-lg-2 order-1 d-flex justify-content-lg-end justify-content-center mt-20">
                            <img src={icons.homesectionimg} alt='img' className="img-fluid" />
                        </Col>
                        <Col lg={6} xs={12} className="order-lg-1 order-2 d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start">
                            <div className='header-text pb-19  mt-20'>
                                <h1 className='text-38-600 color-0303'>Search over 200+ million <br/> research papers</h1>
                            </div>
                            <div className='w-100 d-flex justify-content-center justify-content-lg-start mb-10'>
                                <Button btnText="Login" btnStyle="user-login" 
                                  onClick={()=>{
                                    navigate("/login")
                                }}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='card-section'>
                <Container>
                    <div className='card-header d-flex justify-content-between align-items-center mb-18'>
                        <div className='card-text'>
                        <span>Explore our top research interests</span>
                        </div>
                       <div className='card-link'>
                        <span>Browse All Topics <FaChevronRight/></span>
                        </div>
                    </div>
                    <Row className="align-items-center">
                        {carddata.map((card, index) => (
                            <Col key={index} lg={4} md={6} xs={12}>
                                <div className='card  mt-10'>
                                    <div className='card-title'>
                                        <h1>{card.cardTitle}</h1>
                                    </div>
                                    <div className="views-container d-flex gap-4 mt-16 mb-10">
                                        {card.followers.map((follower, i) => (
                                            <div key={i} className="view-text d-flex flex-column align-items-center">
                                                <h1>{follower.follow}</h1>
                                                <span>{follower.followText}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="image-carousel d-flex align-items-center">
      {images.map((img, index) => (
        <div key={index} className="carousel-image">
          <img src={img.person} alt={`User ${index + 1}`} />
        </div>
      ))}
    
    </div>
                                    <div>
                                        {card.cardText.map((item, i) => (
                                            <div key={i} className='d-flex justify-content-between card-text mt-8'>
                                                <div>
                                                    <span>{item.text}</span>
                                                </div>
                                                <div>
                                                    <span>{item.value}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <div className='d-flex justify-content-center align-items-center mb-82 mt-18'>
    <Button btnText="Show More" btnStyle="user-login" />
</div>
                </Container>
            </div>
            </div>

        </div>
    );
}

export default Home;