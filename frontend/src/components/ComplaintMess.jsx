import React,{useState} from 'react';
import {useParams} from "react-router-dom";
import { Card, Form} from 'react-bootstrap';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NativeSelect from '@mui/material/NativeSelect';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
function ComplaintMess() {
    const {id} =useParams();
    console.log(id);
    const [rows, setRows] = useState(1);
    const [complaintTopic,setComplaintTopic]=useState("");
    const [complaintType,setComplaintType]=useState("Select Complaint Type");
    const [complaint,setComplaint]=useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
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
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!complaintTopic  || !complaintType || !complaint) {
          setErrorMessage('Please fill in all required fields.');
        } else {
          // If all fields are filled, you can proceed with your logic here
          const currentDate = getCurrentDate();
          console.log('Submit data:', {
            complaintTopic,
            complaintType,
            complaint,
            selectedFile, // This will be null if no file is selected
            currentDate
          });
          setErrorMessage('');
        }
      };
      const getCurrentDate = () => {
        const date = new Date();
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      };
  return (
    <div className="container mt-5 ml-3 mr-3" style={{ display: 'flex' }}>
    <div className="info-container mt-3" style={{ flex: 1, marginLeft:'-10px' ,paddingLeft:'-40px' }}>
      <p style={{color:'blue'}}>Mess Services and Assistance</p>
      <h2 className="mb-3"><strong>Mess Grievance Submission</strong></h2>
      <p style={{color:'#333333'}}>Our Mess Services and Assistance ensure that your dining experience is smooth and enjoyable. Whether you have dietary requirements, feedback, or inquiries, we are here to address all your mess-related concerns promptly and efficiently.</p>
      
      <div className="mt-5">
  <div >
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-in-down-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.364 2.5a.5.5 0 0 1 .5-.5H13.5A1.5 1.5 0 0 1 15 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 2 13.5V6.864a.5.5 0 1 1 1 0V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H6.864a.5.5 0 0 1-.5-.5"/>
  <path fill-rule="evenodd" d="M11 10.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h3.793L1.146 1.854a.5.5 0 1 1 .708-.708L10 9.293V5.5a.5.5 0 0 1 1 0z"/>
</svg>
    <strong style={{ marginLeft: '16px' }}>Efficient Grievance Resolution</strong>
    <p style={{ marginLeft: '36px' ,color:'#777777' }}>We prioritize quick resolution of all mess-related grievances, aiming to provide satisfactory solutions to your concerns. Our dedicated team is committed to ensuring that your dining experience meets your expectations.</p>
  </div>
  <div>
    <AssuredWorkloadIcon/>
    <strong style={{ marginLeft: '12px' }}>Confidential Handling of Feedback</strong>
    <p style={{ marginLeft: '36px' ,color:'#777777' }}>Your feedback and concerns regarding mess services are treated with the utmost confidentiality. We value your input and handle your feedback discreetly to maintain your privacy and trust.</p>
  </div>
  <div>
   <AccessibilityNewIcon/>
    <strong style={{ marginLeft: '10px' }}>Accessible Support Channels</strong>
    <p style={{ marginLeft: '36px' ,color:'#777777' }}>We offer accessible communication channels for submitting your mess-related queries and feedback. Whether you have dietary restrictions, suggestions for menu improvements, or any other concerns, our team is ready to assist you in resolving them effectively.




</p>
  </div>
</div>

    </div>
    <div className="form-container" style={{ flex: 1 ,marginLeft:'-50px'}}>
    <Card className="shadow p-3 mb-5 mt-5 pt-5 bg-white rounded" style={{ maxWidth: '400px', margin: 'auto',marginTop:'100px' }}>
    <div className='p-1'>
    <div className="d-flex justify-content-between ">
    <div>
      <h5 className="text-center mb-0" style={{ color:'black' ,fontSize: '30px' }}>Submit Complaint</h5>
    </div>
    <div className="text-center mt-2 mb-2" style={{ fontSize: '14px', marginLeft: '0', color: 'blue', backgroundColor: '#C4E4FF', borderRadius: '5px', padding: '0 4px 0 4px', marginBottom: '0' }}>Quick Response</div>
    </div>
    
      <Card.Text className="text-left mb-4" style={{color:'#61677A'}}>Contact us for Mess grievance redressal</Card.Text>
      <hr/>
      <Card.Body>
        <Form>
          <Form.Group className="mb-4" controlId="formName">
            <Form.Control type="text" value={complaintTopic} placeholder="Enter Topic of Concern" as={Input} style={{height:'35px'}}  onChange={(e) => setComplaintTopic(e.target.value)} />
          </Form.Group>

          
          <Form.Group className="mb-4">
            <Form.Control as={NativeSelect}  value={complaintType} name="complaintType"style={{height:'35px',color:'#999999'}} onChange={(e) => setComplaintType(e.target.value)}>
                <option value=""style={{color:"#333333"}}>Select Complaint Type</option>
                <option value="FoodQuality" style={{color:"#333333"}}>Food Quality</option>
               <option value="FoodVariety"style={{color:"#333333"}}>Food Variety</option>
                <option value="Cleanliness" style={{color:"#333333"}}>Cleanliness</option>
               <option value="Safety" style={{color:"#333333"}}>Safety</option>
               <option value="ServingSize" style={{color:"#333333"}}>Serving Size</option>
               <option value="BillingErrors" style={{color:"#333333"}}>Billing Errors</option>       
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

export default ComplaintMess;
