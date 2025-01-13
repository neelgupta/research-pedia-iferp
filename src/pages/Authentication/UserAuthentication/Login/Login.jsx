import { icons } from "@/utils/constants";
import "./Login.scss"
import { Formik } from "formik";
import { Button, PasswordInput, TextInput } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LeftsideContainer from "../LeftsideContainer";

const UserLogin = () => {
    const initialValues = {
        email: "",
        password: ""
    };

   

    const handleSubmit = () => {

    }
    return (
        <>
            <div id="usersignin-container">
                <div className="row">
                    <div className="col-6  d-none d-lg-block ">
                        {/* <div className="right-side d-flex flex-column justify-content-between">
                            <div className="img-logo">
                                <img src={icons.iferplogo} alt="iferplogo" className="img-fluid" />
                            </div>
                            <div className="header-part">
                                <div className="header-text">
                                    <h1>Accelerate your publication success with us</h1>
                                    <p>2 Million+ papers enhanced in past 22 yrs. 500,000 happy researchers in 192+ countries.</p>
                                </div>
                             
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
                        </div> */}

                        <LeftsideContainer/>
                    </div>
                    <div className="col-lg-6 col-12 ">
                        <div className="d-flex justify-content-center align-items-center vh-100 me-10">
                            <div className="usersignin-container ">
                                <div className="form-header mb-32">
                                    <h1>Login</h1>
                                    <p>Stay updated on your professional world</p>
                                </div>
                                <div className="form">
                                    <Formik
                                        enableReinitialize
                                        initialValues={initialValues}
                                        onSubmit={handleSubmit}

                                    >
                                        {(props) => {
                                            const {
                                                values,
                                                handleChange,
                                                handleSubmit,
                                                errors,
                                                touched,
                                                isSubmitting,
                                            } = props;

                                            return (
                                                <form
                                                    onSubmit={handleSubmit}
                                                    onKeyDown={(e) => {
                                                        if (e.key === "Enter") {
                                                            handleSubmit();
                                                        }
                                                    }}
                                                >

                                                    <div className="mb-24">
                                                        <TextInput
                                                            id="email"
                                                            name="email"
                                                            label="Email"
                                                            labelClass="pb-10"
                                                            value={values.email}
                                                            onChange={handleChange}
                                                            error={touched.email && errors.email}
                                                            placeholder="Email"
                                                            type="text"
                                                        />
                                                    </div>
                                                    <div>
                                                        <PasswordInput
                                                            id="password"
                                                            name="password"
                                                            label="Password"
                                                            labelClass="pb-9"
                                                            value={values.password}
                                                            onChange={handleChange}
                                                            error={touched.password && errors.password}
                                                            placeholder="Password"
                                                        />
                                                    </div>
                                                    <div className="form-text">
                                                        <p className="mb-8 text-end text-14-500 color-113D">Forgot Password?</p>
                                                    </div>
                                                    <div className="login-btn mt-20">
                                                        <Button
                                                            btnText="Login"
                                                            className=" h-45  br-12 text-18-500"
                                                            onClick={handleSubmit}
                                                            disabled={isSubmitting}
                                                        />
                                                    </div>
                                                    <div className="mt-18">
                                                        <p className="text-center mt-8 text-16-400 color-3333">New to IFERP? <span className="color-113D">Sign Up</span></p>
                                                    </div>

                                                    <div className=" mt-20">
                                                        <Button
                                                            btnText="Continue with Google"
                                                            className="wp-100 h-45  br-12 text-18-500"
                                                            onClick={handleSubmit}
                                                            disabled={isSubmitting}
                                                            btnStyle="WBB"
                                                            leftIcon={icons.Google}
                                                        />
                                                    </div>
                                                </form>
                                            );
                                        }}
                                    </Formik>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default UserLogin;