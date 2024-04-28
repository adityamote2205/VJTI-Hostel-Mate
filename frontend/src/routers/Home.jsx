import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./styleshome.css";
import { useAuth } from '../context/AuthContext'; 

function Home() {
    // Assuming isLoggedIn state is managed in the parent component
    // const [isLoggedIn, setIsLoggedIn] = useState(true);
    const { authToken,isStudentTokenValid,isRectorTokenValid } = useAuth();


    return (
        <div>
            {/* <Header isLoggedIn={isLoggedIn} /> */}
            <Header />
            <div className="jumbotron p-3 p-md-5 text-white rounded mb-3 slow-animation" style={{ backgroundColor: "#8062D6", marginLeft: '10px', marginRight: '10px', marginTop: '15px' }}>
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-italic">Empowering Hostel Residents: Your Concerns, Our Action!</h1>
                    <p className="lead my-3">Welcome to VJTI Hostel Mate, your platform for addressing mess and hostel-related issues effectively. We understand the challenges that come with hostel living, especially when it comes to matters concerning food and accommodation.</p>
                    <p className="lead mb-0"><a href="/aboutUs" className="text-white font-weight-bold">Continue reading...</a></p>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-md-6">
                    <div className="card flex-md-row mb-4 box-shadow h-md-250" style={{ backgroundColor: "#F0F3FF", marginLeft: "10px", marginRight: "5px" }}>
                        <div className="card-body d-flex flex-column align-items-start">
                            <strong className="d-inline-block mb-2 text-primary">Grievance 1</strong>
                            <h3 className="mb-0">
                                <a className="text-dark" href={isStudentTokenValid ? "/hostel/:id/student" : "/signIn/student"}>Hostel</a>
                            </h3>
                            <div className="mb-1 text-muted">Raise your concerns related to hostel facilities and management.</div>
                            <p className="card-text mb-auto">This platform provides a space for hostel residents to voice their grievances regarding various hostel-related issues such as maintenance, cleanliness, and amenities.</p>
                            <a href={isStudentTokenValid? "/hostel/:id/student" : '/signIn/student'}>{isStudentTokenValid ? "Register Hostel related grievances here !!" : "Login to register grievances..."}</a>
                        </div>
                        <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="https://t4.ftcdn.net/jpg/02/19/66/93/240_F_219669327_v12pBKc7TB62E3uCJrgRRkDhfVENK3z5.jpg" data-holder-rendered="true" style={{ width: 200, height: 250 }} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card flex-md-row mb-4 box-shadow h-md-250" style={{ backgroundColor: "#F0F3FF", marginLeft: "5px", marginRight: "10px" }}>
                        <div className="card-body d-flex flex-column align-items-start">
                            <strong className="d-inline-block mb-2 text-success">Grievance 2</strong>
                            <h3 className="mb-0">
                                <a className="text-dark" href={isStudentTokenValid ? "/mess/:id/student" : "/signIn/student"}>Mess</a>
                            </h3>
                            <div className="mb-1 text-muted">Raise your concerns related to mess food and services.</div>
                            <p className="card-text mb-auto">This platform provides a space for hostel residents to voice their grievances regarding various mess-related issues such as food quality, hygiene, and service.</p>
                            <a href={isStudentTokenValid ? "/mess/:id/student" : "/signIn/student"}>{isStudentTokenValid ? "Register Mess related grievances here !!" : "Login to register grievances..."}</a>
                        </div>
                        <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="https://tnau.ac.in/site/aecri-cbe/wp-content/uploads/sites/71/2020/04/9.jpg" data-holder-rendered="true" style={{ width: 200, height: 250 }} />
                    </div>
                </div>
            </div>


            {/* <div className="row mb-4">
                <div className="col-md-6">
                    <div className="card flex-md-row mb-4 box-shadow h-md-250" style={{ backgroundColor: "#F0F3FF", marginLeft: "10px", marginRight: "5px" }}>
                        <div className="card-body d-flex flex-column align-items-start">
                            <strong className="d-inline-block mb-2 text-primary">Grievance 1</strong>
                            <h3 className="mb-0">
                                <a className="text-dark" href={authToken ? "/hostel/:id/student" : "/signIn/student"}>Hostel</a>
                            </h3>
                            <div className="mb-1 text-muted">Raise your concerns related to hostel facilities and management.</div>
                            <p className="card-text mb-auto">This platform provides a space for hostel residents to voice their grievances regarding various hostel-related issues such as maintenance, cleanliness, and amenities.</p>
                            <a href={authToken ? "/hostel/:id/student" : '/signIn/student'}>{authToken ? "Register Hostel related grievances here !!" : "Login to register grievances..."}</a>
                        </div>
                        <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="https://t4.ftcdn.net/jpg/02/19/66/93/240_F_219669327_v12pBKc7TB62E3uCJrgRRkDhfVENK3z5.jpg" data-holder-rendered="true" style={{ width: 200, height: 250 }} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card flex-md-row mb-4 box-shadow h-md-250" style={{ backgroundColor: "#F0F3FF", marginLeft: "5px", marginRight: "10px" }}>
                        <div className="card-body d-flex flex-column align-items-start">
                            <strong className="d-inline-block mb-2 text-success">Grievance 2</strong>
                            <h3 className="mb-0">
                                <a className="text-dark" href={authToken ? "/mess/:id/student" : "/signIn/student"}>Mess</a>
                            </h3>
                            <div className="mb-1 text-muted">Raise your concerns related to mess food and services.</div>
                            <p className="card-text mb-auto">This platform provides a space for hostel residents to voice their grievances regarding various mess-related issues such as food quality, hygiene, and service.</p>
                            <a href={authToken ? "/mess/:id/student" : "/signIn/student"}>{authToken ? "Register Mess related grievances here !!" : "Login to register grievances..."}</a>
                        </div>
                        <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="https://tnau.ac.in/site/aecri-cbe/wp-content/uploads/sites/71/2020/04/9.jpg" data-holder-rendered="true" style={{ width: 200, height: 250 }} />
                    </div>
                </div>
            </div> */}

            {/* <div className="row mb-4">
                <div className="col-md-6">
                    <div className="card flex-md-row mb-4 box-shadow h-md-250" style={{ backgroundColor: "#F0F3FF", marginLeft: "10px", marginRight: "5px" }}>
                        <div className="card-body d-flex flex-column align-items-start">
                            <strong className="d-inline-block mb-2 text-primary">Grievance 1</strong>
                            <h3 className="mb-0">
                                <a className="text-dark" href={isLoggedIn ? "/hostel/:id/student" : "/signIn/student"}>Hostel</a>
                            </h3>
                            <div className="mb-1 text-muted">Raise your concerns related to hostel facilities and management.</div>
                            <p className="card-text mb-auto">This platform provides a space for hostel residents to voice their grievances regarding various hostel-related issues such as maintenance, cleanliness, and amenities.</p>
                            <a href={isLoggedIn ? "/hostel/:id/student" : '/signIn/student'}>{isLoggedIn ? "Register Hostel related grievances here !!" : "Login to register grievances..."}</a>
                        </div>
                        <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="https://t4.ftcdn.net/jpg/02/19/66/93/240_F_219669327_v12pBKc7TB62E3uCJrgRRkDhfVENK3z5.jpg" data-holder-rendered="true" style={{ width: 200, height: 250 }} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card flex-md-row mb-4 box-shadow h-md-250" style={{ backgroundColor: "#F0F3FF", marginLeft: "5px", marginRight: "10px" }}>
                        <div className="card-body d-flex flex-column align-items-start">
                            <strong className="d-inline-block mb-2 text-success">Grievance 2</strong>
                            <h3 className="mb-0">
                                <a className="text-dark" href={isLoggedIn ? "/mess/:id/student" : "/signIn/student"}>Mess</a>
                            </h3>
                            <div className="mb-1 text-muted">Raise your concerns related to mess food and services.</div>
                            <p className="card-text mb-auto">This platform provides a space for hostel residents to voice their grievances regarding various mess-related issues such as food quality, hygiene, and service.</p>
                            <a href={isLoggedIn ? "/mess/:id/student" : "/signIn/student"}>{isLoggedIn ? "Register Mess related grievances here !!" : "Login to register grievances..."}</a>
                        </div>
                        <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="https://tnau.ac.in/site/aecri-cbe/wp-content/uploads/sites/71/2020/04/9.jpg" data-holder-rendered="true" style={{ width: 200, height: 250 }} />
                    </div>
                </div>
            </div> */}

            <hr style={{marginRight:'18px', marginLeft:"15px"}}/>


           

<div>
        <h1 className=" font-italic"  style={{fontFamily:'sans-serif', marginLeft:'20px', marginBottom:'30px',fontSize:'35px'}}>How It Works ?</h1>
        <div className="row justify-content-center mb-4">
    <div className="col-lg-4 text-center mb-3" style={{ borderRadius: '15px', padding: '20px'}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg>
        <h2 style={{fontSize:'25px',marginTop:'12px'}}>Submit Grievance</h2>
        <p>Submit hostel or mess-related grievances with details for prompt resolution.</p>
    </div>
    <div className="col-lg-4 text-center mb-3" style={{borderRadius: '15px', padding: '20px'}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-emoji-neutral" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4 10.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5m3-4C7 5.672 6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8s1-.672 1-1.5m4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5S9.448 8 10 8s1-.672 1-1.5"/>
</svg>
        <h2 style={{fontSize:'25px',marginTop:'12px'}}>Review and Resolution</h2>
        <p>Dedicated Rectors team reviews and resolves student grievances promptly.</p>
    </div>
    <div className="col-lg-4 text-center mb-3" style={{ borderRadius: '15px', padding: '20px'}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg>
        <h2 style={{fontSize:'25px',marginTop:'12px'}}>Track Resolution Status</h2>
        <p>Track grievances in real-time; rectors resolve issues, notify students, ensuring transparency.</p>
    </div>
</div>


            </div>

            <hr style={{marginRight:'18px', marginLeft:"15px"}}/>

           

            <div>

                <h1 className=" font-italic"  style={{ fontFamily:'sans-serif',marginLeft:'20px',fontSize:'35px',marginBottom:'20px'}}>Frequently Asked Questions </h1>

                <div class="accordion" id="accordionExample" style={{marginLeft:'10px', marginRight:'10px'}}>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                How can I submit a grievance?
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={{backgroundColor: "#F0F3FF"}}>
                                <strong>To submit a grievance,</strong> you need to create an account on our website and log in. Once logged in, navigate to the "Submit Grievance" section and fill out the grievance form with details such as the type of issue, room no, and description. Then, submit the form, and your grievance will be registered in our system.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                What types of grievances can I submit?
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={{backgroundColor: "#F0F3FF"}}>
                                You can submit grievances related to various issues in the hostel and mess, including plumbing, carpentry, housekeeping, cleaning, electrical problems, food quality concerns, hygiene and cleanliness, portion sizes and satisfactory serving, allergen awareness and accommodations. Our platform aims to address a wide range of issues faced by students in their hostel and mess facilities.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How can I track the status of my grievance?
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={{backgroundColor: "#F0F3FF"}} >
                                You can track the status of your grievance by logging into your account on our website and navigating to respective section. Here, you'll find a list of all grievances you've submitted along with their current status. We provide regular updates as we work to resolve your grievance.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Can I submit multiple grievances at once?
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={{backgroundColor: "#F0F3FF"}}>
                                Yes, you can submit multiple grievances at once if you have more than one issue to report. Simply fill out the grievance form for each separate issue and submit them individually. Our system is designed to handle multiple grievances from the same user efficiently.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFive">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                What steps are taken to resolve a grievance once it is submitted?
                            </button>
                        </h2>
                        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={{backgroundColor: "#F0F3FF"}}>
                                Once a grievance is submitted, it is reviewed by hostel rectors, and appropriate action is taken based on the nature of the issue. This may involve dispatching maintenance personnel to address the problem, coordinating with relevant departments, or contacting external service providers if necessary.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default Home;
