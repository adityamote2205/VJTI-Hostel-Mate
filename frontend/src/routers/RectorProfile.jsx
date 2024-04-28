import React ,{useState,useEffect}from "react";
import "../profile.css";
import PersonIcon from '@mui/icons-material/Person';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { PieChart } from '@mui/x-charts/PieChart';
import BrandComponent from "../components/BrandComponent";
import {NavLink, useNavigate} from "react-router-dom";
import Footer from "../components/Footer";
import backendapi from "../apis/backendapi";
import {useAuth} from "../context/AuthContext"
function RectorProfile(){
  const { headers,logout } = useAuth();
  const [profile, setProfile] = useState({});
  const [hostelData,setHostelData] = useState({});
  const [messData,setMessData]=useState({});
  const [loading, setLoading] = useState(true);
  const navigate=useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await backendapi.get("/profile/rector", { headers });
        console.log(response.data);
        setProfile({name:response.data.profileData.name,
                    email:response.data.profileData.email,
                    gender:response.data.profileData.gender,
                    block:response.data.profileData.block});        
        setHostelData({total_count:response.data.hostelData.total_count,
                       completed_count:response.data.hostelData.completed_count,
                        pending_count:response.data.hostelData.pending_count});
        setMessData({total_count:response.data.messData.total_count,
                      completed_count:response.data.messData.completed_count,
                      pending_count:response.data.messData.pending_count});
        setLoading(false);
      } catch (err) {
        console.error("Error fetching profile Data:", err);
        setLoading(false);
      }
    };
    fetchData();
  }, [headers]);
  async function handleLogOut(){
      await logout();
      navigate("/signIn/rector");
  }
  if (loading) {
    return <div>Loading...</div>; // Render loading indicator while fetching data
  }
    return(
      <>
      <nav style={{ backgroundColor: '#F0F3FF', borderBottom: '1px solid #dee2e6', padding: '10px 0' }}>
              <div className="container-fluid d-flex justify-content-between align-items-center">
                  <BrandComponent/>
                  <ul className="nav nav-tabs">
          <li className="nav-item">
              <a className="nav-link " aria-current="page" href="/rector/home">Home</a>
          </li>
          <li className="nav-item dropdown">
              <a className="nav-link  dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Grivances</a>
              <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href= "/hostel/:id/rector" >Hostel</a></li>
                  <li><a className="dropdown-item" href="/mess/:id/rector" >Mess</a></li>
              </ul>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="/aboutUs">About Us</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="/contactUs">Contact Us</a>
          </li>
      </ul>
                  <ul className="nav ">
<li className="nav-item" >
<NavLink to="/rector/:id/profile" className="nav-link"  aria-current="page" activeClassName="active" style={{color:"black"}}>
  <svg style={{marginRight:'9px'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
<path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>Rector Profile</NavLink>
</li>

</ul>
                  
              </div>
          </nav>
        <div  className="ml-3 mr-3 p-5 pt-2" style={{ paddingTop: "40px" , marginTop: "-15px" }}  >
      <div className=" bootstrap snippets bootdey">
        <div className="row">
          <div className="profile-nav col-md-3" >
            <div className="panel" >
              <div className="user-heading round"style={{backgroundColor:"#836FFF"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
               <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
              </svg>
                <h1 style={{marginTop:"20px",fontSize:"35px"}}>{profile.name}</h1>
                <p style={{fontSize:"15px"}}>{profile.email}</p>
              </div>

              <ul className="nav nav-pills flex-column mt-2">
                      <li className="nav-item"><a className="nav-link active mt-0" style={{backgroundColor:"#F0F3FF",color:"#89817f"}} href="#"><PersonIcon/>{" "}Profile </a></li>
                      <li className="nav-item"> <a className="nav-link" href="/rector/:id/profile/edit"style={{marginTop:"-10px",backgroundColor:"white"}} ><EditNoteIcon/> Edit profile </a></li>
                      <li className="nav-item"> <a className="nav-link" onClick={handleLogOut} style={{marginTop:"-10px",backgroundColor:"white",color:"Red"}}><ExitToAppRoundedIcon/> Sign Out </a></li>
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
                    <p><span>Full Name </span>: {profile.name}</p>
                  </div>
                  <div className="bio-row">
                    <p><span>Block </span>: {profile.block}</p>
                  </div>
                  <div className="bio-row">
                    <p><span>Gender </span>: {profile.gender}</p>
                  </div>
                  <div className="bio-row">
                    <p><span>Email </span>: {profile.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <hr/>
            <div>
              <div className="row mt-4">
                <div className="col-md-5 pt-5 pb-5 mb-2 pl-5 pr-5 "style={{backgroundColor:"#F0F3FF",marginRight:"50px",marginLeft:"16px" ,width:'500px' }}>
                  <div className="panel ">
                    <div className="panel-body text-center" >
                      
                      <div className="text-center" >
                        <h4 className="mb-3"style={{color:"#836FFF"}}>Hostel Grievance Overview</h4>
                        <p className="mb-0">Grievance Count:{hostelData.total_count}</p>
                        <p className="mb-0">Resolved Grievance :{hostelData.completed_count}</p>
                        <p className="mb-3"style={{color:"red"}}>Unresolved Grievance :{hostelData.pending_count}</p>
                      </div>
                      <PieChart
                         series={[
                                    {
                                        data: [
                                         { id: 0, value: hostelData.completed_count, label: 'Completed' },
                                         { id: 1, value: hostelData.pending_count, label: 'Pending' },
                                        
                                              ],
                                    },
                                ]}
                       width={400}
                       height={200}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-5 pt-5 pb-5 mb-2 pl-2 pr-5 "style={{backgroundColor:"#F0F3FF",marginRight:"16px",width:"500px"}}>
                  <div className="panel">
                    <div className="panel-body" >
                      
                    <div className="text-center" >
                        <h4 className="mb-3"style={{color:"#836FFF"}}>Mess Grievance Overview</h4>
                        <p className="mb-0">Grievance Count :{messData.total_count}</p>
                        <p className="mb-0">Resolved Grievance :{messData.completed_count}</p>
                        <p className="mb-3"style={{color:"red"}}>Unresolved Grievance :{messData.pending_count}</p>
                      </div>
                      <PieChart
                         series={[
                                    {
                                        data: [
                                         { id: 0, value: messData.completed_count, label: 'Completed' },
                                         { id: 1, value: messData.pending_count, label: 'Pending' },
                                        
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
    <Footer/>
    </>
    );
    };
export default RectorProfile;