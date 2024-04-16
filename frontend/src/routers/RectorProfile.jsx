import React from "react";
import "../profile.css";
import PersonIcon from '@mui/icons-material/Person';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { PieChart } from '@mui/x-charts/PieChart';

function RectorProfile(){
    return(
        <div className="container" style={{ paddingTop: "40px" }}>
      <div className="container bootstrap snippets bootdey">
        <div className="row">
          <div className="profile-nav col-md-3" >
            <div className="panel" >
              <div className="user-heading round"style={{backgroundColor:"#836FFF"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
               <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
              </svg>
                <h1 style={{marginTop:"20px"}}>Pradnya Khabale</h1>
                <p>pjkhabale_b21@et.vjti.ac.in</p>
              </div>

              <ul className="nav nav-pills flex-column">
                      <li className="nav-item"><a className="nav-link active" style={{backgroundColor:"#F0F3FF",color:"#89817f"}} href="#"><PersonIcon/>{" "}Profile </a></li>
                      <li className="nav-item"> <a className="nav-link" href="/rector/:id/profile/edit"><EditNoteIcon/> Edit profile </a></li>
                      <li className="nav-item"> <a className="nav-link" href="#" style={{color:"red"}}><ExitToAppRoundedIcon/> Sign Out </a></li>
             </ul>

            </div>
          </div>
          <div className="profile-info col-md-9">
            <div className="panel ">
              <div className="bio-graph-heading" style={{backgroundColor:"#836FFF"}}>
              Guiding our community through challenges, fostering transparency, and ensuring every voice is heard. Together, let's build a campus where grievances are resolved promptly, fairly, and with empathy.
              </div>
              <div className="panel-body bio-graph-info p-3 pb-4" style={{backgroundColor:"#F0F3FF"}}>
                <h1 className="pt-3">User Details</h1>
                <div className="row mt-3 pt-3">
                  <div className="bio-row">
                    <p><span>Full Name </span>: Pradnya Khabale</p>
                  </div>
                  <div className="bio-row">
                    <p><span>Block </span>: E</p>
                  </div>
                  <div className="bio-row">
                    <p><span>Gender </span>: female</p>
                  </div>
                  <div className="bio-row">
                    <p><span>Email </span>: pjkhabale_b21@et.vjti.ac.in</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="row mt-4">
                <div className="col-md-5 pt-5 pb-5 mb-5 pl-5 pr-5 "style={{backgroundColor:"#F0F3FF",marginRight:"30px",marginLeft:"40px" }}>
                  <div className="panel ">
                    <div className="panel-body text-center" >
                      
                      <div className="text-center" >
                        <h4 className="mb-3"style={{color:"#836FFF"}}>Hostel Grievance Overview</h4>
                        <p className="mb-0">Grievance Count:20</p>
                        <p className="mb-0">Resolved Grievance :12</p>
                        <p className="mb-3"style={{color:"red"}}>Unresolved Grievance :8</p>
                      </div>
                      <PieChart
                         series={[
                                    {
                                        data: [
                                         { id: 0, value: 10, label: 'Completed' },
                                         { id: 1, value: 15, label: 'Pending' },
                                        
                                              ],
                                    },
                                ]}
                       width={400}
                       height={200}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-5 pt-5 pb-5 mb-5 pl-2 pr-5 "style={{backgroundColor:"#F0F3FF",marginRight:"30px",marginLeft:"40px"}}>
                  <div className="panel">
                    <div className="panel-body" >
                      
                    <div className="text-center" >
                        <h4 className="mb-3"style={{color:"#836FFF"}}>Mess Grievance Overview</h4>
                        <p className="mb-0">Grievance Count :20</p>
                        <p className="mb-0">Resolved Grievance :12</p>
                        <p className="mb-3"style={{color:"red"}}>Unresolved Grievance :8</p>
                      </div>
                      <PieChart
                         series={[
                                    {
                                        data: [
                                         { id: 0, value: 10, label: 'Completed' },
                                         { id: 1, value: 15, label: 'Pending' },
                                        
                                              ],
                                    },
                                ]}
                       width={400}
                       height={200}
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
    };
export default RectorProfile;