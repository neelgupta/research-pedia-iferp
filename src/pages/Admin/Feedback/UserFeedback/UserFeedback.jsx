import React from 'react'
import "./UserFeedback.scss"
import Breadcrumb from '@/components/layouts/Breadcrumb'
import { icons } from '@/utils/constants'
import { FaPersonBreastfeeding } from "react-icons/fa6";
const UserFeedback = () => {

  const surveyData = [
    {
      category: "General Feedback",
      questions: [
        {
          que :  "How frequently do you use Research Pedia?",
          ans : "Daily"
        },
        {
          que :   "How satisfied are you with your overall experience on Research Pedia?",
          ans : "Very satisfied"
        },
        {
          que :  "How likely are you to recommend Research Pedia to a colleague or friend?",
          ans : "Writing and publishing papers"
        },
        {
          que :   "What is your primary purpose for using Research Pedia? (Select all that apply)",
          ans : "Very likely"
        },
      ],
    },
    {
      category: "Content and Relevance",
      questions: [
        {
          que :  "How relevant are the articles and research papers recommended by Research Pedia?",
          ans : "Extremely relevant"
        },
        {
          que :   "How effective is Research Pedia at helping you discover new and important research?",
          ans : "Very satisfied"
        },
        {
          que :  "What areas of content are most useful to you? (Select all that apply)",
          ans : "Latest research articles"
        },
      ],
    },
    {
      category: "Features and Usability",
      questions: [
        {
          que :  "Which features of Research Pedia do you find most useful? (Select all that apply)",
          ans : "Search and discovery"
        },
        {
          que :   "How would you rate the ease of navigation within Research Pedia?",
          ans : "Very easy"
        },
        {
          que :  "How satisfied are you with the quality of research summaries provided by Research Pedia?",
          ans : "Dissatisfied"
        },
       
      ],
    },
  
  ];

  const carddetais = true

  const details =
carddetais
    ? "col-12"
    : "col-md-6 col-12";

  return (
    <div id="feedbackuser-container">



    <div className="mb-14">
      <Breadcrumb
        list={[{ title: "Feedback" },{ title: "Feedback Detail" }]}
        className="text-16-400"
        isGreen
      />

      <h1 className="topic-text">Feedback </h1>

      <div className='user-details mt-20'>
    <div className='row align-items-center'>
        <div className='col-xxl-7  col-lg-5 d-flex align-items-center'>
            <div className='left-userdetails'>
                <div
                    className="d-flex align-items-center gap-3 pointer"
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
          <div className='right-userdetails'>
          <div className='row d-flex align-items-center '>
                <div className='col-sm-6 col-12  d-flex flex-column justify-content-center details'>
                    <div className='mb-8'><img src={icons.mail} alt="mail" /> <span className='text-14-400 color-1319'>anshan@gmail.com</span></div>
                    <div className='mb-8'><img src={icons.locationicon} alt="location" /> <span className='text-14-400 color-1319'>New York</span></div>
                </div>
                <div className='col-sm-6 col-12  d-flex flex-column justify-content-center details'>
                    <div className='mb-8'><img src={icons.phoneicon} alt="phone" /> <span className='text-14-400 color-1319'>(+91) 86542 39581</span></div>
                    <div className='mb-8'><img src={icons.linkicon} alt="link" /> <span className='text-14-400 color-113D'>https://anshan.dh.url</span></div>
                </div>
            </div>
          </div>
           
        </div>
    </div>
</div>

<div className='user-card'>
  <div className='row'>
    <div className={`${details} mt-10`}>
      <div className='left-card'>
        <div className='card-header'>
          <h1 className='text-16-600 color-1D26'>CSAT</h1>
        </div>
        <div className='card-title'>
          <div><img src={icons.hate} className='w-58 h-52'/> <span className='text-14-400 color-1319'>Indifferent</span></div>

{
  carddetais && (
<div><p className='text-14-400 color-1319 mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div> 
  )
}
     
        </div>
      </div>
    </div>
    <div className={`${details} mt-10`}>
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
  <div className='survey-title'>
    <h1 className='text-22-600 color-1D26'>Survey Details</h1>
  </div>

  <div className="surveydetails-question">
    {surveyData.map((section, index) => {
    

      return ( 
        <div className="survey-card mt-24" key={index}>
          <div className="card-header">
            <h1 className="text-16-600 color-1D26">{section.category}</h1>
          </div>
          <div className="card-title">
            {section.questions.map((question, qIndex) =>
            {
            
              return (
                <>
                <div className="card-question" key={qIndex}>
                <p className="text-14-400 color-2125">{qIndex + 1}. {question.que}</p>
                <p className="text-14-400 color-1319 mb-16">{question.ans}</p>
              </div>
                </>
              )
            }
           )}
          </div>
        </div>
      );
    })}
  </div>
</div>

    </div>
  </div>

  )
}

export default UserFeedback
