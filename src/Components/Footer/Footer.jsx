import './footer.css';
import Call from '../../materials/Call.svg';
import Mail from '../../materials/Mail.svg';
import logo from '../../materials/Logo.svg';
import Dribble from '../../materials/Dribble.svg';
import FB from '../../materials/FB.svg';
import Figma from '../../materials/Figma.svg';
import YT from '../../materials/YT.svg';
import Whatsapp from '../../materials/Whatsapp.svg';
import SMS from '../../materials/sms.svg';

function Footer(){
    return(
        <>
           <div className='Footer'>
                 <div className='Footer-top'>
                       <div className='Logo'>
                             <div>
                                  <img src={logo} alt="logo"></img>
                             </div>
                             <span className='Logo-content'>We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</span>
                             <div style={{width:"100%",display:"flex"}}>
                                  <div style={{height:"48px",width:"50%",display:"flex",marginTop:"10px"}}>
                                       <div>
                                           <img style={{height:"48px",width:"48px"}} src={Call} alt='call'></img>
                                       </div>
                                       <div style={{marginLeft:"10px"}}>
                                            <span>Have a question?</span><br/>
                                            <span>310-437-2766</span>
                                       </div>
                                  </div>
                                  <div style={{height:"48px",width:"50%",display:"flex",marginTop:"10px"}}>
                                       <div>
                                            <img style={{height:"48px",width:"48px"}} src={Mail} alt='mail'></img>
                                       </div>
                                       <div style={{marginLeft:"10px"}}>
                                            <span>Contact us at</span><br/>
                                            <span>unreal@outlook.com</span>
                                       </div>
                                  </div>
                             </div>
                       </div>
                       <div className='Vertical-line'></div>
                       <div className='Newsletter'>
                             <div>
                                  <span style={{fontSize:"18px",fontWeight:"700",lineHeight:"24px"}}>Newssletter</span>
                             </div>
                             <div>
                                <span style={{fontSize:"14px",fontWeight:"400",lineHeight:"24px"}}>Be the first one to know  about discounts, offers and events weekly in your mailbox. Unsubscribe whenever you like with one click.</span>
                             </div>
                             <div className='mail-newsletter'>
                                    <div className='enter-mail'>
                                         <img src={SMS} alt="SMS"></img>
                                         <input placeholder='Enter your email'/>
                                    </div>
                                    <div className='mail-submit'>
                                         <button style={{border:"none",cursor:"pointer"}}>Submit</button>
                                    </div>
                             </div>
                       </div>
                 </div>
                 <div className='Horz-line'></div>
                 <div className='Footer-bottom'>
                        <div className='Footer-bottom-content'>
                            <span style={{color:"#8C8C8C",fontSize:"14px",fontWeight:"400",lineHeight:"18.12px",margin:"auto",cursor:"pointer"}}>About US</span>
                            <span style={{color:"#8C8C8C",fontSize:"14px",fontWeight:"400",lineHeight:"18.12px",margin:"auto",cursor:"pointer"}}>Jobs</span>
                            <span style={{color:"#8C8C8C",fontSize:"14px",fontWeight:"400",lineHeight:"18.12px",margin:"auto",cursor:"pointer"}}>Blog</span>
                            <span style={{color:"#8C8C8C",fontSize:"14px",fontWeight:"400",lineHeight:"18.12px",margin:"auto",cursor:"pointer"}}>Press</span>
                            <span style={{color:"#8C8C8C",fontSize:"14px",fontWeight:"400",lineHeight:"18.12px",margin:"auto",cursor:"pointer"}}>FAQ</span>
                            <span style={{color:"#8C8C8C",fontSize:"14px",fontWeight:"400",lineHeight:"18.12px",margin:"auto",cursor:"pointer"}}>Careers</span>
                            <span style={{color:"#8C8C8C",fontSize:"14px",fontWeight:"400",lineHeight:"18.12px",margin:"auto",cursor:"pointer"}}>Contact</span>
                            <span style={{color:"#8C8C8C",fontSize:"14px",fontWeight:"400",lineHeight:"18.12px",margin:"auto",cursor:"pointer"}}>Privacy policy</span>
                            <span style={{color:"#8C8C8C",fontSize:"14px",fontWeight:"400",lineHeight:"18.12px",margin:"auto",cursor:"pointer"}}>Sitemap</span>
                            <span style={{color:"#8C8C8C",fontSize:"14px",fontWeight:"400",lineHeight:"18.12px",margin:"auto",cursor:"pointer"}}>Terms of Use</span>
                        </div>
                        <div style={{display:"flex",width:"100%"}}>
                             <div style={{width:"50%"}}>
                                  <img style={{margin:"10px",marginLeft:"25%",cursor:"pointer"}} src={FB} alt='FB'></img>
                                  <img style={{margin:"10px",cursor:"pointer"}} src={YT} alt='YT'></img>
                                  <img style={{margin:"10px",cursor:"pointer"}} src={Dribble} alt='Dribble'></img>
                                  <img style={{margin:"10px",cursor:"pointer"}} src={Figma} alt='Figma'></img>
                                  <img style={{margin:"10px",cursor:"pointer"}} src={Whatsapp} alt='Whatsapp'></img>
                             </div>
                             <div style={{width:"50%",display:"flex"}}>
                              <span style={{color:"#8C8C8C",fontSize:"14px",fontWeight:"400",lineHeight:"18.12px",margin:"auto"}}>© 2000-2021, All Rights Reserved</span>
                             </div>
                        </div>
                 </div>
           </div>
        </>
    );
}

export default Footer;