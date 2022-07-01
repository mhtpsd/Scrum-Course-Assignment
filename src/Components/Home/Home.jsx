import './home.css';
import Carouselimage from '../../materials/Carousel-image.svg';
import Bookmark from '../../materials/bookmark.svg';
 import React, {useEffect, useRef, useState} from 'react'

function Home(){
      const [timerHours, setTimerHours] = useState('00');
      const [timerMinutes, setTimerMinutes] = useState('00');
      const [timerSeconds, setTimerSeconds] = useState('00');

      let interval = useRef();

      const startTimer = () => {
            const countdownTime = new Date('July 10, 2022 17:00:00').getTime();

            interval = setInterval(() => {
                  const currentTime = new Date().getTime();
                  const diff = countdownTime - currentTime;

                  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)/(1000*60*60)));
                  const minutes = Math.floor((diff % (1000 * 60 *60))/(1000*60));
                  const seconds = Math.floor((diff % (1000*60))/1000);

                  if(diff<0) {
                        //stop timer
                        clearInterval(interval.current);
                  } else {
                        //update Timer
                        setTimerHours(hours);
                        setTimerMinutes(minutes);
                        setTimerSeconds(seconds);
                  }
            }, 1000);
               
      };

      useEffect(() => {
            startTimer();
            const cl = clearInterval(interval.current);
            return () => {
                  <>
                  {cl}
                  </>
            };
      });

    return(
        <>
           <div className='homepage-section-01'>
                <div className='homepage-section-01-left'>
                    <div className='tagline-div'>
                          <span className='tagline'>#MOST TRUSTED CERTIFICATIONS BY THE INDUSTRY</span>
                    </div>
                    <div className='tagline-2-div'>
                          <span className='tagline-2'>Unleash Your SCRUM Skills, Grab More Attention To Résumé</span>
                    </div>
                    <div className='enroll-div'>
                          <span className='enroll'>ENROLL NOW</span>
                    </div>
                    <div>
                          <span className='offer'>10% OFF on all courses* | Offer Valid For</span>
                          <div className='line'></div>
                          <div className='countdown'>
                               <div className='timer'>
                                    <div className="time"><span style={{fontSize:"54px",fontWeight:"700",lineHeight:"65.5px"}}>{timerHours}</span></div>
                                    <div className="time"><small style={{fontSize:"14px",fontWeight:"700",lineHeight:"16.98px",color:"#FFFFFF"}}>hrs.</small></div>
                               </div>
                               <div className='timer'>
                                    <div className="time"><span style={{fontSize:"54px",fontWeight:"700",lineHeight:"65.5px"}}>{timerMinutes}</span></div>
                                    <div className="time"><small style={{fontSize:"14px",fontWeight:"700",lineHeight:"16.98px",color:"#FFFFFF"}}>mins.</small></div>
                               </div>
                               <div className='timer'>
                                    <div className="time"><span style={{fontSize:"54px",fontWeight:"700",lineHeight:"65.5px"}}>{timerSeconds}</span></div>
                                    <div className="time"><small style={{fontSize:"14px",fontWeight:"700",lineHeight:"16.98px",color:"#FFFFFF"}}>sec.</small></div>
                               </div>
                          </div>
                    </div>
               </div>
               <div className='homepage-section-01-right'>

               </div>
           </div>
           <div className='homepage-section-02'>
                <span className='course-intro'>A broad range of courses<br/></span>
                <span style={{marginLeft: "120px",color: "#0D0D0D"}}>Choose from 100+ online video courses with new additions published every month</span>
                
                {/* Carousel */}
                <div className='Carousel-01'>
                      <div className="container">
                        <div className="card">
                              <div className="image">
                                    <img
                                         src={Carouselimage}
                                         alt=""
                                    />
                              </div>
                              <div className="content">
                                    <div className="course-desc">
                                          <div style={{width:"228px",height:"38px",marginLeft:"25px"}}>
                                               <span style={{color:"#0D0D0D",fontSize:"16px",fontWeight:"700",lineHeight:"19.41px",}}>Learn SCRUM: The Complete Beginner Course</span>
                                          </div>
                                          <div>
                                                <img src={Bookmark} alt=''/>
                                          </div>
                                    </div>
                                    <div className="name">
                                          <p style={{color: "#0D0D0D",fontWeight: "400",fontSize: "14px",lineHeight: "16.98px"}}>Samay Jain, Ex-KPMG</p>
                                          </div>
                                    <div className="rating"><p>4.5</p></div>
                                    <div style={{width:"fit-content",marginLeft:"25px"}}>
                                          <button className='enroll-03-button'>ENROLL NOW</button>
                                    </div>
                              </div>
                        </div>
                        <div className="card">
                              <div className="image">
                                    <img
                                         src={Carouselimage}
                                         alt=""
                                    />
                              </div>
                              <div className="content">
                                    <div className="course-desc">
                                          <div style={{width:"228px",height:"38px",marginLeft:"25px"}}>
                                               <span style={{color:"#0D0D0D",fontSize:"16px",fontWeight:"700",lineHeight:"19.41px",}}>Learn SCRUM: The Complete Beginner Course</span>
                                          </div>
                                          <div>
                                                <img src={Bookmark} alt=''/>
                                          </div>
                                    </div>
                                    <div className="name">
                                          <p style={{color: "#0D0D0D",fontWeight: "400",fontSize: "14px",lineHeight: "16.98px"}}>Samay Jain, Ex-KPMG</p>
                                          </div>
                                    <div className="rating"><p>4.5</p></div>
                                    <div style={{width:"fit-content",marginLeft:"25px"}}>
                                          <button className='enroll-03-button'>ENROLL NOW</button>
                                    </div>
                              </div>
                        </div>
                        <div className="card">
                              <div className="image">
                                    <img
                                         src={Carouselimage}
                                         alt=""
                                    />
                              </div>
                              <div className="content">
                                    <div className="course-desc">
                                          <div style={{width:"228px",height:"38px",marginLeft:"25px"}}>
                                               <span style={{color:"#0D0D0D",fontSize:"16px",fontWeight:"700",lineHeight:"19.41px",}}>Learn SCRUM: The Complete Beginner Course</span>
                                          </div>
                                          <div>
                                                <img src={Bookmark} alt=''/>
                                          </div>
                                    </div>
                                    <div className="name">
                                          <p style={{color: "#0D0D0D",fontWeight: "400",fontSize: "14px",lineHeight: "16.98px"}}>Samay Jain, Ex-KPMG</p>
                                          </div>
                                    <div className="rating"><p>4.5</p></div>
                                    <div style={{width:"fit-content",marginLeft:"25px"}}>
                                          <button className='enroll-03-button'>ENROLL NOW</button>
                                    </div>
                              </div>
                        </div>
                        <div className="card">
                              <div className="image">
                                    <img
                                         src={Carouselimage}
                                         alt=""
                                    />
                              </div>
                              <div className="content">
                                    <div className="course-desc">
                                          <div style={{width:"228px",height:"38px",marginLeft:"25px"}}>
                                               <span style={{color:"#0D0D0D",fontSize:"16px",fontWeight:"700",lineHeight:"19.41px",}}>Learn SCRUM: The Complete Beginner Course</span>
                                          </div>
                                          <div>
                                                <img src={Bookmark} alt=''/>
                                          </div>
                                    </div>
                                    <div className="name">
                                          <p style={{color: "#0D0D0D",fontWeight: "400",fontSize: "14px",lineHeight: "16.98px"}}>Samay Jain, Ex-KPMG</p>
                                          </div>
                                    <div className="rating"><p>4.5</p></div>
                                    <div style={{width:"fit-content",marginLeft:"25px"}}>
                                          <button className='enroll-03-button'>ENROLL NOW</button>
                                    </div>
                              </div>
                        </div>
                      </div>
                </div>
           </div>
           <div className='homepage-section-03'>
               <div className='Section-03-left'>
                  <div style={{width:"302px",height:"78px"}}>
                       <span style={{color:"#9921E8",fontWeight:"700",fontSize:"32px",lineHeight:"38.82px"}}>Start learning with us right now!</span>
                  </div>
                  <div style={{width:"290px",height:"44px",margin:"20px 0px"}}>
                       <span style={{color:"#0D0D0D",fontWeight:"400",fontSize:"18px",lineHeight:"21.83px"}}>Choose from 100+ online video courses with new updates.</span>
                  </div>
                  <div style={{width:"128px",height:"32px"}}>
                        <button className='enroll-02'>ENROLL NOW</button>
                  </div>
               </div>
               <div className='Section-03-right'>
                     
               </div>
           </div>
           <div className='homepage-section-04'>
                  <div style={{display:"flex",alignItems:"center"}}>
                        <div>
                              <span style={{color:"#5F72BE",fontSize:"16px",fontWeight:"700",lineHeight:"19.41px",marginLeft:"100px"}}>OUR TESTIMONIALS</span>
                        </div>
                        <div style={{backgroundColor:"#5F72BE",width:"435px",height:"2px",marginLeft:"200px"}}></div>
                  </div>


                  {/* Carousel */}

                  <div className='Carousel-02'>
                      <div className="container">
                        <div className="card">
                              <div className="image">
                                    <img
                                         src={Carouselimage}
                                         alt=""
                                    />
                              </div>
                              <div className="content">
                                    <div className="course-desc">
                                          <div style={{width:"228px",height:"38px",marginLeft:"25px"}}>
                                               <span style={{color:"#0D0D0D",fontSize:"16px",fontWeight:"700",lineHeight:"19.41px",}}>Learn SCRUM: The Complete Beginner Course</span>
                                          </div>
                                          <div>
                                                <img src={Bookmark} alt=''/>
                                          </div>
                                    </div>
                                    <div className="name">
                                          <p style={{color: "#0D0D0D",fontWeight: "400",fontSize: "14px",lineHeight: "16.98px"}}>Samay Jain, Ex-KPMG</p>
                                          </div>
                                    <div className="rating"><p>4.5</p></div>
                                    <div style={{width:"fit-content",marginLeft:"25px"}}>
                                          <button className='enroll-03-button'>ENROLL NOW</button>
                                    </div>
                              </div>
                        </div>
                      </div>
                  </div>
           </div>
           <div className='homepage-section-05'>
                 <div className='email'>
                       <div className='email-left'>
                             <span>Email Us<br/>Connect with us in case of any queries, complaints or feedbacks...</span>
                       </div>
                       <div className='email-right'>
                             <button className='contact-us'>CONTACT US</button>
                       </div>
                 </div>
           </div>
           
        </>
    );
}

export default Home;