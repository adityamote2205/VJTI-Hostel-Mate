import React, { useState } from 'react';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import backendapi from '../apis/backendapi';
import { useAuth } from '../context/AuthContext';
import { useNavigate,useLocation } from 'react-router-dom';

function formatDate(dateString) {
  const options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
  const date = new Date(dateString);
  return date.toLocaleString('en-US', options);
}


function formatDateOnly(dateString) {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
}

function ComplaintMessCard({ complaints }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
    const {headers} = useAuth();
    let navigate=useNavigate();
    let location=useLocation();
   console.log(complaints.length);
  const handleClick = async (complaint_id) => {
    // Function body
    try{
     const response= await backendapi.delete(`/complaint/mess/student/${complaint_id}`,{headers});
     console.log(response);
     navigate("/");
     setTimeout(() => {
         navigate(location.pathname);
       }, 0); 
    }
    catch(err){
      console.error("Error fetching complaints:", err);
    }
  };
  if(complaints.length===0){
    return(
        <div className="container mb-7 mt-3 ml-7 pl-5" style={{marginRight:"90px",paddingLeft:"20px"}}>No complaints registered yet.</div>
    )
  }

  return (
    <div className="container mb-5">
      <div className="row" style={{ display: "flex", alignItems: "stretch" }}>
        {complaints.map((complaint, index) => (
          <div key={index} className="col-sm-4 ml-5 mr-5">
            <div className="card mt-3 mb-3 pb-1 shadow d-flex flex-column" style={{ backgroundColor: "#FAF9F6" }}>
              <div className="card-body">
                <h5 className="card-title" style={{ color: "black", fontWeight: "bold" }}>{complaint.topic}</h5>
                <p className="card-text mb-3" style={{ fontSize: "15px" }}>Created on {formatDateOnly(complaint.created_on)}</p>
                {complaint.is_completed === 'yes' && (
                  <p className="card-text" style={{ fontSize: "15px", marginTop: "-15px" }}>Completed on {formatDate(complaint.completed_on)}</p>
                )}
                <p className="card-text" style={{ color: "#999999" }}>{complaint.complaint}</p>
              </div>
              <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }} className="mb-2">
                {complaint.is_completed === 'no' ? (
                  <a href="#" className="btn btn-danger">Not Completed</a>
                ) : (
                  <a href="#" className="btn btn-success">Completed</a>
                )}
                <div className="position-relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <DeleteRoundedIcon style={{ fontSize: '30px', color: hoveredIndex === index ? "black" : "#999999", cursor: "pointer" }}
                    onClick={(e)=>handleClick(complaint.complaint_id)} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplaintMessCard;
