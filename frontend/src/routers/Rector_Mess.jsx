// frontend/router/rectormess.jsx

import React, { useState, useEffect } from "react";
import HubTwoToneIcon from '@mui/icons-material/HubTwoTone';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import Dropdown from 'react-bootstrap/Dropdown';
import BrandComponent from "../components/BrandComponent";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import backendapi from "../apis/backendapi";
import MessCard from "../components/MessCard";

function RectorMess() {
    const { headers } = useAuth();
    const [complaints, setComplaints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await backendapi.get("/complaint/mess/rector", { headers });
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

    const filterComplaints = (complaint) => {
        if (!selectedCategory || selectedCategory === 'All') {
            return true; // Show all complaints if no category selected or 'All' is selected
        } else {
            return complaint.complaint_type === selectedCategory; // Show complaints matching the selected category
        }
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category); 
        console.log("Selected Category:", category); // Update selected category
    };

    if (loading) {
        return <div>Loading...</div>; // Render loading indicator while fetching data
    }

    return (
        <div>
            <nav style={{ backgroundColor: '#F0F3FF', borderBottom: '1px solid #dee2e6', padding: '10px 0' }}>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <BrandComponent/>
                    <ul className="nav nav-tabs">
                        <li className="nav-item" style={{marginLeft:"60px"}}>
                            <a className="nav-link " aria-current="page" href="/rector/home">Rector's Dashboard</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Grivances</a>
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
                        <li className="nav-item">
                            <a style={{color:'black'}} className="nav-link " href="/rector/:id/profile">
                                <svg style={{marginRight:'9px'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                </svg>
                                Rector Profile
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="mt-1 pb-5" style={{paddingLeft:"10px", backgroundColor:'white' ,marginBottom:"-10px" ,paddingBottom:"100px"}}>
                <div style={{ paddingBottom: "800px" }}>
                    <div className="d-flex align-items-center justify-content-between">
                        <h2 className="pt-5 pr-5"><strong><ErrorOutlineRoundedIcon style={{marginLeft:'80px'}}/> Mess Complaints </strong></h2>
                        <Dropdown show={isOpen} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} drop="down"  >
                            <Dropdown.Toggle style={isOpen ? { backgroundColor: '#836FFF', borderColor: '#836FFF', color: 'white',marginTop:"40px",marginRight:"80px",height:"35px"  } : { backgroundColor: '#F0F3FF', borderColor: '#836FFF', color: 'black',marginTop:"40px",marginRight:"80px",height:"35px"  }} id="dropdown-basic">
                                Complaint Types
                            </Dropdown.Toggle>
                            <Dropdown.Menu >
                                <Dropdown.Item onClick={() => handleCategorySelect(null)} style={{ color: "#333333" }}>All</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleCategorySelect("FoodQuality")} style={{color:"#333333"}}>Food Quality</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleCategorySelect("FoodVariety")} style={{color:"#333333"}}>Food Variety</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleCategorySelect("Safety")} style={{color:"#333333"}}>Food Safety</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleCategorySelect("Cleanliness")} style={{color:"#333333"}}>Cleanliness</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleCategorySelect("ServingSize")}  style={{color:"#333333"}}>Serving Size</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleCategorySelect("BillingErrors")}  style={{color:"#333333"}}>Billing Errors</Dropdown.Item>  
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <hr style={{marginLeft:'80px',marginRight:'80px'}}/>
                    <MessCard className="pb-5" complaints={complaints.filter(filterComplaints)}/>
                </div>
            </div>
            <div style={{backgroundColor:'#F0F3FF',marginTop:'15px'}} >
                <Footer/>
            </div>
        </div>
    );
};

export default RectorMess;
