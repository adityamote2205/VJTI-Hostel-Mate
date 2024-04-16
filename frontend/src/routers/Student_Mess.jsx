import React from "react";
import ComplaintMess from "../components/ComplaintMess";
import HubTwoToneIcon from '@mui/icons-material/HubTwoTone';
import Complaints from "../components/Complaints";
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
function StudentMess(){
    return(
      <div>
        <div>
             <nav style={{ backgroundColor: '#F0F3FF', borderBottom: '1px solid #dee2e6', padding: '10px 0' }}>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                <a href="/aboutUs" className="navbar-brand">
            <HubTwoToneIcon style={{ marginRight: '8px', color: '#836FFF' }} />
            <span style={{ color: '#211951', fontWeight: 'bold', fontSize: '1.5rem' }}>
                VJTI
            </span>{" "}
            <span style={{ color: '#836FFF', fontWeight: 'bold', fontSize: '1.5rem', marginLeft: '10px' }}>
                Hostel-Mate
            </span>
        </a>
           </div>
            </nav>
        </div>
      <div className="mt-1 mb-5" style={{paddingleft:"10px", backgroundColor:'white' ,marginBottom:"-10px"}}>
      <h2 className=" pt-5 pr-5"><strong><ErrorOutlineRoundedIcon style={{marginLeft:'80px'}}/> Complaints</strong></h2>
      <Complaints/>
      <div className="container mr-3 ml-3 mt-5" style={{ marginLeft: "150px",marginRight: "100px"}}>
     <ComplaintMess/>
     </div>
     </div>
     <div style={{backgroundColor:'#F0F3FF',marginTop:'15px'}} >
       <footer className="footer" style={{backgroundColor:'#F0F3FF'}}>{/* Added slow-animation class */}
        <section className="bg py-4 py-md-5 py-xl-8 border-top border-light">
          <div className="container overflow-hidden">
            <div className="row gy-4 gy-lg-0 justify-content-xl-between">
              <div className="col-12 col-md-4 col-lg-3 col-xl-2">
                <div className="widget">
                  <a href="/aboutUs" className="navbar-brand">
                    <HubTwoToneIcon style={{ marginRight: '8px', color: '#836FFF' }} />
                    <span style={{ color: '#211951', fontWeight: 'bold', fontSize: '1.5rem' }}>
                      VJTI
                    </span>{" "}
                    <span style={{ color: '#836FFF', fontWeight: 'bold', fontSize: '1.5rem', marginLeft: '10px' }}>
                      Hostel-Mate
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3 col-xl-2">
                <div className="widget">
                  <h4 className="widget-title mb-4">Get in Touch</h4>
                  <address className="mb-4">VJTI Hostels D Block, Mumbai</address>
                  <p className="mb-1">
                    <a className="link-secondary text-decoration-none" href="tel:+15057922430">(+91) 7057041764</a>
                  </p>
                  <p className="mb-0">
                    <a className="link-secondary text-decoration-none" href="mailto:demo@yourdomain.com">asmote_b21@et.vjti.ac.in</a>
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3 col-xl-2">
                <div className="widget">
                  <h4 className="widget-title mb-4">Learn More</h4>
                  <ul className="list-unstyled">
                  <li className="mb-2">
                      <a href="/" className="link-secondary text-decoration-none">Home</a>
                    </li>
                    <li className="mb-2">
                      <a href="/hostel/:id/student" className="link-secondary text-decoration-none">Grievance</a>
                    </li>
                    <li className="mb-2">
                      <a href="/aboutUs" className="link-secondary text-decoration-none">About</a>
                    </li>
                    <li className="mb-2">
                      <a href="ContactUs" className="link-secondary text-decoration-none">Contact</a>
                    </li>
                    <li className="mb-0">
                      <a href="https://cdn.websitepolicies.com/wp-content/uploads/2017/06/terms-and-conditions-template.png" className="link-secondary text-decoration-none">Terms and Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3 col-xl-2">
                <div className="widget">
                  <h4 className="widget-title mb-4">Company</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <a href="#!" className="link-secondary text-decoration-none">Developers</a>
                    </li>
                    <li className="mb-2">
                      <a href="#!" className="link-secondary text-decoration-none">Goal</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg py-4 py-md-5 py-xl-8 border-top border-light-subtle"  style={{backgroundColor:'#F0F3FF'}}>
          <div className="container overflow-hidden">
            <div className="row gy-4 gy-md-0">
              <div className="col-xs-12 col-md-7 order-1 order-md-0">
                <div className="copyright text-center text-md-start">
                  &copy; 2024. All Rights Reserved.
                </div>
                <div className="credits text-secondary text-center text-md-start mt-2 fs-7">
                  Built by <a href="/" className="link-secondary text-decoration-none">VJTI Hostel-Mate Team</a> with <span className="text-primary">&#9829;</span>
                </div>
              </div>
              <div className="col-xs-12 col-md-5 order-0 order-md-1">
                <ul className="nav justify-content-center justify-content-md-end">
                  <li className="nav-item">
                    <a className="nav-link link-dark" href="https://www.facebook.com/aditya.mote.56">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#0081fb" d="M47,29.36l-2.193,1.663L42.62,29.5c0-0.16,0-0.33-0.01-0.5c0-0.16,0-0.33-0.01-0.5	c-0.14-3.94-1.14-8.16-3.14-11.25c-1.54-2.37-3.51-3.5-5.71-3.5c-2.31,0-4.19,1.38-6.27,4.38c-0.06,0.09-0.13,0.18-0.19,0.28	c-0.04,0.05-0.07,0.1-0.11,0.16c-0.1,0.15-0.2,0.3-0.3,0.46c-0.9,1.4-1.84,3.03-2.86,4.83c-0.09,0.17-0.19,0.34-0.28,0.51	c-0.03,0.04-0.06,0.09-0.08,0.13l-0.21,0.37l-1.24,2.19c-2.91,5.15-3.65,6.33-5.1,8.26C14.56,38.71,12.38,40,9.51,40	c-3.4,0-5.56-1.47-6.89-3.69C1.53,34.51,1,32.14,1,29.44l4.97,0.17c0,1.76,0.38,3.1,0.89,3.92C7.52,34.59,8.49,35,9.5,35	c1.29,0,2.49-0.27,4.77-3.43c1.83-2.53,3.99-6.07,5.44-8.3l1.37-2.09l0.29-0.46l0.3-0.45l0.5-0.77c0.76-1.16,1.58-2.39,2.46-3.57	c0.1-0.14,0.2-0.28,0.31-0.42c0.1-0.14,0.21-0.28,0.31-0.41c0.9-1.15,1.85-2.22,2.87-3.1c1.85-1.61,3.84-2.5,5.85-2.5	c3.37,0,6.58,1.95,9.04,5.61c2.51,3.74,3.82,8.4,3.97,13.25c0.01,0.16,0.01,0.33,0.01,0.5C47,29.03,47,29.19,47,29.36z"></path><linearGradient id="wSMw7pqi7WIWHewz2_TZXa_PvvcWRWxRKSR_gr1" x1="42.304" x2="13.533" y1="24.75" y2="24.75" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0081fb"></stop><stop offset=".995" stop-color="#0064e1"></stop></linearGradient><path fill="url(#wSMw7pqi7WIWHewz2_TZXa_PvvcWRWxRKSR_gr1)" d="M4.918,15.456	C7.195,11.951,10.483,9.5,14.253,9.5c2.184,0,4.354,0.645,6.621,2.493c2.479,2.02,5.122,5.346,8.419,10.828l1.182,1.967	c2.854,4.746,4.477,7.187,5.428,8.339C37.125,34.606,37.888,35,39,35c2.82,0,3.617-2.54,3.617-5.501L47,29.362	c0,3.095-0.611,5.369-1.651,7.165C44.345,38.264,42.387,40,39.093,40c-2.048,0-3.862-0.444-5.868-2.333	c-1.542-1.45-3.345-4.026-4.732-6.341l-4.126-6.879c-2.07-3.452-3.969-6.027-5.068-7.192c-1.182-1.254-2.642-2.754-5.067-2.754	c-1.963,0-3.689,1.362-5.084,3.465L4.918,15.456z"></path><linearGradient id="wSMw7pqi7WIWHewz2_TZXb_PvvcWRWxRKSR_gr2" x1="7.635" x2="7.635" y1="32.87" y2="13.012" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0081fb"></stop><stop offset=".995" stop-color="#0064e1"></stop></linearGradient><path fill="url(#wSMw7pqi7WIWHewz2_TZXb_PvvcWRWxRKSR_gr2)" d="M14.25,14.5	c-1.959,0-3.683,1.362-5.075,3.465C7.206,20.937,6,25.363,6,29.614c0,1.753-0.003,3.072,0.5,3.886l-3.84,2.813	C1.574,34.507,1,32.2,1,29.5c0-4.91,1.355-10.091,3.918-14.044C7.192,11.951,10.507,9.5,14.27,9.5L14.25,14.5z"></path><path d="M21.67,20.27l-0.3,0.45l-0.29,0.46c0.71,1.03,1.52,2.27,2.37,3.69l0.21-0.37c0.02-0.04,0.05-0.09,0.08-0.13 c0.09-0.17,0.19-0.34,0.28-0.51C23.19,22.5,22.39,21.29,21.67,20.27z M24.94,15.51c-0.11,0.14-0.21,0.28-0.31,0.42 c0.73,0.91,1.47,1.94,2.25,3.1c0.1-0.16,0.2-0.31,0.3-0.46c0.04-0.06,0.07-0.11,0.11-0.16c0.06-0.1,0.13-0.19,0.19-0.28 c-0.76-1.12-1.5-2.13-2.23-3.03C25.15,15.23,25.04,15.37,24.94,15.51z" opacity=".05"></path><path d="M21.67,20.27l-0.3,0.45c0.71,1.02,1.51,2.24,2.37,3.65c0.09-0.17,0.19-0.34,0.28-0.51C23.19,22.5,22.39,21.29,21.67,20.27 z M24.63,15.93c0.73,0.91,1.47,1.94,2.25,3.1c0.1-0.16,0.2-0.31,0.3-0.46c-0.77-1.14-1.52-2.16-2.24-3.06 C24.83,15.65,24.73,15.79,24.63,15.93z" opacity=".07"></path>
</svg>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link link-dark" href="https://youtube.com">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
</svg>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link link-dark" href="https://twitter.com/AdityaMote22">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
<path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
</svg>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link link-dark" href="https://instagram.com/_aditya_mote">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
</svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
     </div>

    );
};
export default StudentMess;