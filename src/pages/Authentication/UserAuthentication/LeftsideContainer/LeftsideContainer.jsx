import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./LeftsideContainer.scss"
import { icons } from '@/utils/constants';
const LeftsideContainer = () => {

    const cards = [
        {
            avatar: icons.avatar,
            text: "I am extremely satisfied with the professional editing services.",
            name: "Dr. Margaret Moe",
            designation: "Professor, Lee University, United States",
        },
        {
            avatar: icons.avatar,
            text: "I am extremely satisfied with the professional editing services.",
            name: "Dr. John Smith",
            designation: "Researcher, Oxford University, UK",
        },
        {
            avatar: icons.avatar,
            text: "I am extremely satisfied with the professional editing services.",
            name: "Dr. Emily Davis",
            designation: "Scientist, Harvard University, USA",
        },
    ];


  return (
    <div>
        <div className="right-side d-flex flex-column justify-content-between">
                            <div className="img-logo">
                                <img src={icons.iferplogo} alt="iferplogo" className="img-fluid" />
                            </div>
                            <div className="header-part">
                                <div className="header-text">
                                    <h1>Accelerate your publication success with us</h1>
                                    <p>2 Million+ papers enhanced in past 22 yrs. 500,000 happy researchers in 192+ countries.</p>
                                </div>
                                {/* <div className="header-card">
                                    <div className="card">
                                        <div className="img-conatin">
                                            <img src={icons.avatar} alt="iferplogo" className="img-fluid rounded-circle" />
                                            <p>The article was accepted for publication at my first choice of Journal.</p>
                                        </div>
                                        <div className="card-text">
                                            <h1 className="pb-3">Dr. Margaret Moe</h1>
                                            <p> Professor, Lee University, United States</p>
                                        </div>

                                    </div>
                                </div> */}
               <div className="header-card">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                 spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                navigation={false}
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className="card">
                            <div className="img-conatin">
                                <img
                                    src={card.avatar}
                                    alt={card.name}
                                    className="img-fluid rounded-circle"
                                />
                                <p>{card.text}</p>
                            </div>
                            <div className="card-text">
                                <h1 className="pb-3">{card.name}</h1>
                                <p>{card.designation}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
                            </div>
                        </div>
    </div>
  )
}

export default LeftsideContainer
