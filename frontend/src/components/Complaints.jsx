import React,{useState} from 'react';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
function Complaints() {
    const [isHovered, setIsHovered] = useState(false);
    function handleClick(){
        console.log("clicked");
    }
  return (
    <div className="container" >
    <div className="row ">
      <div className="col-sm-3 ml-5 mr-5 ">
        <div className="card mt-3 mb-3 shadow" style={{backgroundColor: "#FAF9F6"}}>
          <div className="card-body">
            <h5 className="card-title" style={{color:"black", fontWeight:"bold"}}>Switch is not working</h5>
            <p className="card-text" style={{fontSize:"15px"}}>Created on April 14,2024</p>
            <p className="card-text" style={{color:"#999999"}}>With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-danger">Not Completed</a>
          </div>
          <div className="position-absolute bottom-0 end-0 m-3" style={{ paddingRight: '7px' }}>
           <DeleteRoundedIcon   style={{ fontSize: '30px',color: isHovered ? "black" : "#999999", cursor: "pointer" }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={handleClick}/>

        </div>
        </div>
      </div>
      <div className="col-sm-3 ml-5">
        <div className="card mt-3 mb-3 shadow" style={{backgroundColor: "#FAF9F6"}}>
          <div className="card-body">
            <h5 className="card-title" style={{color:"black", fontWeight:"bold"}}>Switch is not working</h5>
            <p className="card-text" style={{fontSize:"15px"}}>Created on April 14,2024</p>
            <p className="card-text" style={{color:"#999999"}}>With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-danger">Not Completed</a>
          </div>
        </div>
      </div>
      <div className="col-sm-3 ml-5">
        <div className="card mt-3 mb-3 shadow" style={{backgroundColor: "#FAF9F6"}}>
          <div className="card-body">
            <h5 className="card-title" style={{color:"black", fontWeight:"bold"}}>Switch is not working</h5>
            <p className="card-text" style={{fontSize:"15px"}}>Created on April 14,2024</p>
            <p className="card-text" style={{color:"#999999"}}>With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-danger">Not Completed</a>
          </div>
        </div>
      </div>
      <div className="col-sm-3 ml-5">
        <div className="card mt-3 mb-3 shadow"style={{backgroundColor: "#FAF9F6"}}>
          <div className="card-body">
            <h5 className="card-title" style={{color:"black", fontWeight:"bold"}}>Switch is not working</h5>
            <p className="card-text" style={{fontSize:"15px"}}>Created on April 14,2024</p>
            <p className="card-text" style={{color:"#999999"}}>With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-danger">Not Completed</a>
          </div>
        </div>
      </div>
      <div className="col-sm-3 ml-5">
        <div className="card mt-3 mb-3 shadow" style={{backgroundColor: "#FAF9F6"}}>
          <div className="card-body">
            <h5 className="card-title" style={{color:"black", fontWeight:"bold"}}>Switch is not working</h5>
            <p className="card-text" style={{fontSize:"15px"}}>Created on April 14,2024</p>
            <p className="card-text" style={{color:"#999999"}}>With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-danger">Not Completed</a>
          </div>
        </div>
      </div>
    </div>

    
    </div>
  );
};

export default Complaints;
