import React from "react";
import BrandComponent from '../components/BrandComponent';
import HandshakeIcon from '@mui/icons-material/Handshake';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SupportIcon from '@mui/icons-material/Support';
import GroupsIcon from '@mui/icons-material/Groups';
import Footer from "../components/Footer";

function AboutUs() {
    return (
        <div>
            <nav style={{ backgroundColor: '#F0F3FF', borderBottom: '1px solid #dee2e6', padding: '10px 0' }}>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <BrandComponent />
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="/" role="tab" aria-controls="home" aria-selected="false">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="/aboutUs" role="tab" aria-controls="aboutUs" aria-selected="true">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="contact-tab" data-toggle="tab" href="/contactUs" role="tab" aria-controls="contactUs" aria-selected="false">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div id="carouselExample" class="carousel slide mt-3" style={{ maxHeight: "400px" }}>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={require("../images/img1.jpg")} className="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={require("../images/img2.jpg")} className="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={require("../images/img3.jpg")} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>

                <div class="px-4 my-5 text-center">
                    <h1 class="display-5 fw-bold  display-5 fw-bold">Welcome to VJTI Hostel Mate !!</h1>
                    <div class="col-lg-6 mx-auto">
                        <p class="lead mb-4">the premier platform dedicated to facilitating effective resolution of mess and hostel-related issues, ensuring a conducive and harmonious living environment for all residents.</p>
                        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        </div>
                    </div>
                </div>

               

                <section class="py-5">
	<div class="container">
		<div class="row align-items-center gx-4">
			<div class="col-md-5">
				<div class="ms-md-2 ms-lg-5"><img class="img-fluid rounded-3" src="https://i.imgur.com/oJYUGk6.png"/></div>
			</div>
			<div class="col-md-6 offset-md-1">
				<div class="ms-md-2 ms-lg-5">
					<h2 class="display-5 fw-bold">About VJTI</h2>
					<p class="lead">Established in 1887, the Veermata Jijabai Technological Institute (VJTI), formerly known as Victoria Jubilee Technical Institute, is one of the premier engineering colleges in India. Located in Mumbai, Maharashtra, VJTI has a rich history of providing quality technical education and fostering innovation.</p>
					<p class="lead mb-0">With its commitment to excellence and a strong focus on research and development, VJTI has consistently produced skilled professionals who have made significant contributions to various industries.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<hr style={{marginLeft:'80px',marginRight:'80px'}}/>

<section class="py-5">
	<div class="container">
		<div class="text-center">
			<span class="text-muted">Our Story</span>
			<h2 class="display-5 fw-bold mb-3">About VJTI Hostel Mate</h2>
		</div>
		<div class="row gx-5">
			<div class="col-md-6">
				<div class="lead text-center text-md-start">
					<p>VJTI Hostel Mate is a beacon of empowerment for hostel residents, providing a platform where concerns are addressed effectively. Our mission is to offer residents a space to voice their challenges, particularly related to food and accommodation, fostering better communication and resolutions.</p>
				</div>
			</div>
			<div class="col-md-6">
				<div class="lead text-center text-md-start">
					<p>Driven by our experiences as hostel residents, we, two dedicated developers, recognized the urgent need for a solution to enhance interaction between residents and management. With a vision of creating VJTI Hostel Mate, we aim to empower residents by ensuring their concerns are addressed promptly.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<hr style={{marginLeft:'80px',marginRight:'80px'}}/>

<div class="container py-5">
        <h2 class="mb-5">Our Mission</h2>
        <div class="row mb-2">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="icon mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-arms-up" viewBox="0 0 16 16">
  <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
  <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"/>
</svg></div>
            <h5 class="lined mb-4">Empowerment</h5>
            <p class="text-muted text-small">Enable residents to address concerns effectively, fostering a sense of ownership and accountability.</p>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="icon mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></div>
            <h5 class="lined mb-4">Transparency</h5>
            <p class="text-muted text-small"> Promote open communication, ensuring residents are informed and involved in decision-making processes.</p>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="icon mb-4"><HandshakeIcon style={{width:'35px',height:'35px'}}/></div>
            <h5 class="lined mb-4">Collaboration</h5>
            <p class="text-muted text-small">Facilitate cooperation among residents, management, and stakeholders for collective problem-solving and improvement.</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div class="icon mb-4"><TrendingUpIcon style={{width:'35px',height:'35px'}}/></div>
            <h5 class="lined mb-4">Continuous Improvement</h5>
            <p class="text-muted text-small">Actively seek feedback and implement changes to enhance hostel facilities and services.</p>
          </div>
          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div class="icon mb-4"><SupportIcon style={{width:'35px',height:'35px'}}/></div>
            <h5 class="lined mb-4">Supportive Environment</h5>
            <p class="text-muted text-small">Foster a culture of mutual respect and belonging, encouraging residents to express themselves freely.</p>
          </div>
          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div class="icon mb-4"><GroupsIcon style={{width:'35px',height:'35px'}}/></div>
            <h5 class="lined mb-4">Advocacy</h5>
            <p class="text-muted text-small">
Advocating for residents' rights, ensuring their concerns are heard and addressed by management and authorities.</p>
          </div>
        </div>
      </div>

      <hr style={{marginLeft:'80px',marginRight:'80px'}}/>

  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
        <h1 class="mb-5 text-center">Our Development Team</h1>
      </div>
    </div>
  </div>

  <section>
  <div class="container overflow-hidden mb-6">
    <div class="row gy-4 gy-lg-0 gx-xxl-5 justify-content-center align-items-center">
      
      <div class="col-12 col-md-6 col-lg-3"style={{marginRight:'30px'}}>
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0 d-flex justify-content-center align-items-center">
            <figure class="m-0 p-0">
             <a href="https://www.linkedin.com/in/pradnya-khabale-b93bb226a/"> <img class="img-fluid" loading="lazy" src={require("../images/img4.jpg")} alt=""/></a>
              <figcaption class="m-0 p-4">
                <h4 class="mb-1">Pradnya Khabale</h4>
                <p class="text-secondary mb-0"><span>{'< '}</span>Full Stack Developer<span>{' />'}</span></p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3" style={{margiLeft:'15px'}}>
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0 d-flex justify-content-center align-items-center">
            <figure class="m-0 p-0">
              <a href="https://www.linkedin.com/in/aditya-mote-125455229/"><img class="img-fluid" loading="lazy" src={require("../images/img5.jpg")} alt=""/></a>
              <figcaption class="m-0 p-4">
                <h4 class="mb-1">Aditya Mote</h4>
                <p class="text-secondary mb-0"><span>{'< '}</span>Full Stack Developer<span>{' />'}</span></p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>


      
      <Footer/>
      
            </div>
          
        </div>
    );
}

export default AboutUs;
