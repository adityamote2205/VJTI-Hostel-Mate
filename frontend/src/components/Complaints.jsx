import React, { useState } from 'react';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

function formatDate(dateString) {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
}

function Complaints({ complaints }) {
  const [isHovered, setIsHovered] = useState(false);

  function handleClick() {
    console.log("clicked");
  }

  return (
    <div className="container">
      <div className="row" style={{ display: "flex", alignItems: "stretch" }}>
        {complaints.map((complaint, index) => (
          <div key={index} className="col-sm-4 ml-5 mr-5">
            <div className="card mt-3 mb-3 pb-1 shadow d-flex flex-column" style={{ backgroundColor: "#FAF9F6" }}>
              <div className="card-body">
                <h5 className="card-title" style={{ color: "black", fontWeight: "bold" }}>{complaint.topic}</h5>
                <p className="card-text" style={{ fontSize: "15px" }}>Created on {formatDate(complaint.created_on)}</p>
                <p className="card-text" style={{ color: "#999999" }}>{complaint.complaint}</p>
              </div>
              <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }} className="mb-2">
                <a href="#" className="btn btn-danger">Not Completed</a>
                <div className="position-relative">
                  <DeleteRoundedIcon style={{ fontSize: '30px', color: isHovered ? "black" : "#999999", cursor: "pointer" }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleClick} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Complaints;
