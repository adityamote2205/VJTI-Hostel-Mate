import React,{useState} from 'react';
import {useParams,useNavigate,useLocation} from "react-router-dom";
import { Card, Form} from 'react-bootstrap';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NativeSelect from '@mui/material/NativeSelect';
import backendapi from '../apis/backendapi';
import { useAuth } from '../context/AuthContext';
function ComplaintForm() {
    let navigate=useNavigate();
    let location=useLocation();
    const [rows, setRows] = useState(1);
    const [complaintTopic,setComplaintTopic]=useState("");
    const [Roomno,setRoomno]=useState("");
    const [complaintType,setComplaintType]=useState("Select Complaint Type");
    const [complaint,setComplaint]=useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const {authToken}=useAuth();
    const handleFileChange = (e) => {
      setSelectedFile(e.target.files[0]);
    };
  
    const handleFocus = () => {
      setRows(3);
    }
    const handleInput = (event) => {
        const textareaLineHeight = 24; // Adjust as needed
        const previousRows = event.target.rows;
        event.target.rows = 1; // Reset the number of rows in textarea
        const currentRows = Math.floor(event.target.scrollHeight / textareaLineHeight);
        event.target.rows = currentRows;
        setRows(currentRows);
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!complaintTopic || !Roomno || !complaintType || !complaint) {
          setErrorMessage('Please fill in all required fields.');
        } else {
          // If all fields are filled, you can proceed with your logic here
          const currentDate = new Date().toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
          const formData = new FormData();
          formData.append('image', selectedFile);
          formData.append('topic',complaintTopic);
          formData.append('room_details',Roomno);
          formData.append('complaint_type',complaintType);
          formData.append('complaint',complaint);
          formData.append('created_on',currentDate);
           try{
              const response = await backendapi.post("/complaint/hostel/student",formData,{headers: authToken ? { "authorization": authToken } : {}});
              console.log(response);
              navigate("/");
             setTimeout(() => {
             navigate(location.pathname);
             }, 0); 
             }
           catch(err){
            console.error("Error posting complaints:", err);
           }
          setErrorMessage('');
        }
      };
      
  return (
    <div className="container mt-5 ml-3 mr-3" style={{ display: 'flex' }}>
    <div className="info-container mt-3" style={{ flex: 1, marginLeft:'-10px' ,paddingLeft:'-40px' }}>
      <p style={{color:'blue'}}>Hostel Grievance Redressal</p>
      <h2 className="mb-3"><strong>Submit Your Grievance</strong></h2>
      <p style={{color:'#333333'}}>Hostel Grievance Redressal ensures a swift and confidential resolution of student concerns. We guarantee a quick response to submitted complaints, fostering a secure and comfortable living environment for all hostel residents.</p>
      
      <div className="mt-5">
  <div >
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-in-down-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.364 2.5a.5.5 0 0 1 .5-.5H13.5A1.5 1.5 0 0 1 15 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 2 13.5V6.864a.5.5 0 1 1 1 0V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H6.864a.5.5 0 0 1-.5-.5"/>
  <path fill-rule="evenodd" d="M11 10.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h3.793L1.146 1.854a.5.5 0 1 1 .708-.708L10 9.293V5.5a.5.5 0 0 1 1 0z"/>
</svg>
    <strong style={{ marginLeft: '16px' }}>Swift Grievance Resolution</strong>
    <p style={{ marginLeft: '36px' ,color:'#777777' }}>Swift grievance resolution prioritizes timely and effective solutions, ensuring students' concerns are promptly addressed and resolved.</p>
  </div>
  <div>
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/>
</svg>
    <strong style={{ marginLeft: '12px' }}>Confidentiality Assured</strong>
    <p style={{ marginLeft: '36px' ,color:'#777777' }}>Your grievances are handled with utmost confidentiality, ensuring privacy and trust throughout the hostel grievance redressal process.</p>
  </div>
  <div>
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-lightning-charge" viewBox="0 0 16 16">
  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z"/>
</svg>
    <strong style={{ marginLeft: '10px' }}>Easy Communication</strong>
    <p style={{ marginLeft: '36px' ,color:'#777777' }}>Effortless communication is facilitated, providing a smooth and accessible channel for expressing and resolving grievances within the hostel community.</p>
  </div>
</div>

    </div>
    <div className="form-container" style={{ flex: 1 ,marginLeft:'-50px'}}>
    <Card className="shadow p-3 mb-5 mt-3 bg-white rounded" style={{ maxWidth: '400px', margin: 'auto' }}>
    <div className='p-1'>
    <div className="d-flex justify-content-between ">
    <div>
      <h5 className="text-center mb-0" style={{ color:'black' ,fontSize: '30px' }}>Submit Complaint</h5>
    </div>
    <div className="text-center mt-2 mb-2" style={{ fontSize: '14px', marginLeft: '0', color: 'blue', backgroundColor: '#C4E4FF', borderRadius: '5px', padding: '0 4px 0 4px', marginBottom: '0' }}>Quick Response</div>
    </div>
    
      <Card.Text className="text-left mb-4" style={{color:'#61677A'}}>Contact us for hostel grievance redressal</Card.Text>
      <hr/>
      <Card.Body>
        <Form>
          <Form.Group className="mb-4" controlId="formName">
            <Form.Control type="text" value={complaintTopic} placeholder="Enter Topic of Concern" as={Input} style={{height:'35px'}}  onChange={(e) => setComplaintTopic(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formInfo">
            <Form.Control type="text" value={Roomno} placeholder="Enter Room-No" as={Input} style={{height:'35px'}} onChange={(e) => setRoomno(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control as={NativeSelect}  value={complaintType} name="complaintType"style={{height:'35px',color:'#999999'}} onChange={(e) => setComplaintType(e.target.value)}>
                <option value=""style={{color:"#333333"}}>Select Complaint Type</option>
                <option value="plumbing" style={{color:"#333333"}}>Plumbing Issue</option>
               <option value="carpentry"style={{color:"#333333"}}>Carpentry Issue</option>
                <option value="electrical" style={{color:"#333333"}}>Electrical Issue</option>
               <option value="housekeeping" style={{color:"#333333"}}>Housekeeping Issue</option>
               <option value="security" style={{color:"#333333"}}>Security Concern</option>
               <option value="facilities" style={{color:"#333333"}}>Facilities Issue</option>       
            </Form.Control>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formInfo" style={{height:'35px',color:'#999999'}}>
           <input type="file" className="form-control" id="customImageFile" accept="image/*" style={{height:'35px',color:'#999999'}}   onChange={handleFileChange}/>
          </Form.Group>
         <TextField fullWidth multiline rows={rows}  value={complaint} onFocus={handleFocus}  label="Complaint"   
         onInput={handleInput} placeholder="Enter your complaint" onChange={(e) => setComplaint(e.target.value)}/> 
           {errorMessage && <p className="text-danger">{errorMessage}</p>}
          <Button  variant="contained" type="submit" className="mb-2 mt-4  pt-2 pb-2 text-center hoverEffect" style={{ backgroundColor: "#836FFF", color: "white", width: '100%',
    backgroundColor: '#4B56D2' }} onClick={handleSubmit} >Submit </Button>
        </Form>
      </Card.Body>
      </div>
    </Card>
    </div>
    </div>
  );
}

export default ComplaintForm;
