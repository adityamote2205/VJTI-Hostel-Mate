import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import backendapi from '../apis/backendapi';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function formatDateOnly(dateString) {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

function formatDate(dateString) {
  const options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
  return new Date(dateString).toLocaleString('en-US', options);
}



function WardenComplaints({ complaints }) {
  let location=useLocation();
  const {headers} = useAuth();
  const [openImageIndex, setOpenImageIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isEyeHovered, setIsEyeHovered] = useState(false);
  const navigate = useNavigate();
  const handleOpenImage = (index) => {
    setOpenImageIndex(openImageIndex === index ? null : index);
  };
  const handleEyeIconHover = (index, isHovered) => {
    setHoveredIndex(isHovered ? index : null);
    setIsEyeHovered(isHovered); // Update isEyeHovered state
  };

  const handleClick = async (complaint_id) => {
      try{

        const result = await backendapi.put(`/complaint/hostel/rector/${complaint_id}`,{},{headers});
        console.log(result);
        navigate("/");
        setTimeout(() => {
         navigate(location.pathname);
       }, 0); 
      }
       catch(err){

        console.error("Error fetching complaints:", err);

      }


  }
  if(complaints.length==0){
    return(
      <div className="container mb-7 mt-3 ml-7 pl-5" style={{marginRight:"90px",paddingLeft:"20px"}}>No complaints registered yet.</div>
  )
  }
  
  return (
    <div className="container">
      <div className="row">
        {complaints.map((complaint, index) => (
          <div key={index} className="col-sm-4 ml-5 mr-5">
            <div className="card mt-3 shadow" style={{ backgroundColor: "#FAF9F6" }}>
              <div className="card-body">
                <h5 className="card-title" style={{ color: "black", fontWeight: "bold" }}>{complaint.topic} (Room No: {complaint.room_no})</h5>
                <p className="card-text" style={{ fontSize: "15px" }}>Created on {formatDateOnly(complaint.created_on)} by {complaint.name}.</p>
                {complaint.is_completed === 'yes' && complaint.completed_on && (
                  <p className="card-text" style={{ fontSize: "15px", marginTop: "-15px" }}>Completed on {formatDate(complaint.completed_on)}</p>
                )}
                <p className="card-text" style={{ color: "#999999" }}>{complaint.complaint}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>

                    {complaint.is_completed==='yes' ? (<Button  variant="contained" color="success" sx={{ p: "5px 6px", marginRight: "10px" }}>
                      Completed
                    </Button>) : <Button  variant="contained" color="error" onClick={(e) => handleClick(complaint.complaint_id)} sx={{ p: "5px 6px", marginRight: "10px" }}>
                      Not Completed
                    </Button>}
                    
                  </div>
                  {complaint.imageBase64 && (
                    <VisibilityIcon
                      style={{
                        fontSize: '30px',
                        color: openImageIndex === index ? "#333333" : (isEyeHovered && hoveredIndex === index ? "#666666" : "#999999"),
                        cursor: 'pointer'
                      }}
                      onClick={() => handleOpenImage(index)}
                      onMouseEnter={() => handleEyeIconHover(index, true)}
                      onMouseLeave={() => handleEyeIconHover(index, false)}
                    />
                  )}
                </div>
              </div>
            </div>
            {openImageIndex === index && complaint.imageBase64 && (
              <img src={`data:image/jpeg;base64,${complaint.imageBase64}`} alt="Complaint Image" style={{ width: "100%", marginTop: "10px" }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WardenComplaints;
