import React, { useEffect, useState } from "react";
import ComplaintForm from "../components/complaintForm";
import HubTwoToneIcon from '@mui/icons-material/HubTwoTone';
import Complaints from "../components/Complaints";
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import BrandComponent from "../components/BrandComponent";
import Footer from "../components/Footer";
import backendapi from "../apis/backendapi";
import { useAuth } from "../context/AuthContext";

function StudentHostel() {
  const { headers } = useAuth();
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await backendapi.get("/complaint/hostel/student", { headers });
        setComplaints(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching complaints:", err);
        setLoading(false);
      }
    };
    fetchData();
  }, [headers]);

  if (loading) {
    return <div>Loading...</div>; // Render loading indicator while fetching data
  }

    return(
      <div>

<nav style={{ backgroundColor: '#F0F3FF', borderBottom: '1px solid #dee2e6', padding: '10px 0' }}>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <BrandComponent/>
                    <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Grivances</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href= "/hostel/:id/student" >Hostel</a></li>
                    <li><a className="dropdown-item" href="/mess/:id/student" >Mess</a></li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/aboutUs">About Us</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/contactUs">Contact Us</a>
            </li>
        </ul>
                    <ul class="nav ">
  <li class="nav-item">
    <a style={{color:'black'}} class="nav-link " href="/student/:id/profile">
    <svg style={{marginRight:'9px'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>Student Profile</a>
  </li>
  
</ul>
                    
                </div>
            </nav>
       
    <div className="mt-1" style={{paddingleft:"10px", backgroundColor:'white' ,marginBottom:"-10px"}}>
      <h2 className=" pt-5 pr-5"><strong><ErrorOutlineRoundedIcon style={{marginLeft:'80px'}}/> Your Hostel Complaints</strong></h2>
      <hr style={{marginLeft:'80px',marginRight:'80px'}}/>
      <Complaints complaints={complaints} />

      <hr style={{marginLeft:'80px',marginRight:'80px'}}/>
      <div className="container mr-3 ml-3 mt-5" style={{ marginLeft: "200px",marginRight: "-100px"}}>
     <ComplaintForm/>
     </div>
    </div>
     <div style={{backgroundColor:'#F0F3FF',marginTop:'15px'}} >
      <Footer/>
    </div>
     </div>

    );
};
export default StudentHostel;