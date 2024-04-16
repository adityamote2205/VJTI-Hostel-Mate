import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Button from '@mui/material/Button';

function WardenComplaints() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredV, setIsHoveredV] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const[openIcon,setOpenIcon] = useState(false);
  const handleSubmit = (e) => {
    e.stopPropagation();
    console.log("clicked");
    setCompleted(!completed);
  };

  const handleClick = () => {
    // Handle submit logic here
  };

  const handleImageClick = () => {
    setShowImage(!showImage);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3 ml-5 mr-5">
          <div className="card mt-3 shadow" onClick={()=>setOpenIcon(!openIcon)} style={{ backgroundColor: "#FAF9F6" }}>
            <div className="card-body">
              <h5 className="card-title" style={{ color: "black", fontWeight: "bold" }}>Switch is not working</h5>
              <p className="card-text" style={{ fontSize: "15px" }}>Created on April 14, 2024</p>
              <p className="card-text" style={{ color: "#999999" }}>With supporting text below as a natural lead-in to additional content.</p>
              { openIcon &&
              <div>
                  <VisibilityIcon
                    style={{ 
                        fontSize: '30px', 
                        color: isHoveredV ? "#333333" : "#999999",
                        cursor: 'pointer',marginTop:"-20px"
                      }}
                    onClick={handleImageClick}  onMouseEnter={() => setIsHoveredV(true)}
                    onMouseLeave={() => setIsHoveredV(false)}
                  />
                </div>
               }
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <Button variant="contained" color={completed ? "success" : "error"} onClick={(e)=>handleSubmit(e)} sx={{ p: "5px 6px", marginRight: "10px" }}>
                    {completed ? "Completed" : "Not Completed"}
                  </Button>
                </div>
                
              </div>
            </div>
            <div className="position-absolute bottom-0 end-0 m-3" style={{ paddingRight: '7px' }}>
              <DeleteRoundedIcon
                style={{ fontSize: '30px', color: isHovered ? "black" : "#999999", cursor: "pointer" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleClick}
              />
            </div>
          </div>
          {showImage && (
            <img src="your-image-url.jpg" alt="Complaint Image" style={{ width: "100%", marginTop: "10px" }} />
          )}
        </div>
      </div>
    </div>
  );
}

export default WardenComplaints;
