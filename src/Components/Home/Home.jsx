import './home.css';

function Home(){
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
                          <div className='timer'>
                               <div className='hrs'></div>
                               <div className='mins'></div>
                               <div className='sec'></div>
                          </div>
                    </div>
               </div>
               <div className='homepage-section-01-right'>

               </div>
           </div>
           <div className='homepage-section-02'>
                <span className='course-intro'>A broad range of courses<br/></span>
                <span style={{marginLeft: "120px",color: "#0D0D0D"}}>Choose from 100+ online video courses with new additions published every month</span>
                <div className='carousel'></div>
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
                  <div></div>
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