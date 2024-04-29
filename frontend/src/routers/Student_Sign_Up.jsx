// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../styling.css";
// import { Container, Row, Col,  Form } from "react-bootstrap";
// import NativeSelect from '@mui/material/NativeSelect';
// import Button from '@mui/material/Button';

// function StudentSignUp() {
//   const [ name, setName ] = useState("")
//   const [ gender, setGender ] = useState("")
//   const [ year, setYear ] = useState("")
//   const [ block, setBlock ] = useState("")
//   const [ branch, setBranch] = useState("");
//   const [ roomNo, setRoomNo] = useState("");
//   const [ regNo, setRegNo] = useState("");
//   const [ email, setEmail] = useState("");
//   const [password,setPassword]=useState("");
//   const [errorMessage, setErrorMessage] = useState(""); 
//  function handleSubmit(event){
//   event.preventDefault();
//   if (!name || !gender || !year || !block || !branch || !roomNo || !regNo || !email || !password) {
//     // If any field is empty, display an error message or perform any other action
//     setErrorMessage("Please fill in all fields.");
//     return;
//   }
//   const collegeEmailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z]{2}\.vjti\.ac\.in$/; ;
//     if (!collegeEmailRegex.test(email)) {
//       setErrorMessage("Please enter a valid college email address.");
//       return;
//     }

    
//   setErrorMessage("");
//   console.log("All fields are filled. Proceeding with form submission...");
// }

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styling.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';
import backendapi from "../apis/backendapi";
import { useAuth } from "../context/AuthContext";

function StudentSignUp() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [year, setYear] = useState("");
  const [block, setBlock] = useState("");
  const [branch, setBranch] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const [regNo, setRegNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const {login} = useAuth(); //istokenvalid removed

  async function handleSubmit(event) {
    event.preventDefault();
    if (!name || !gender || !year || !block || !branch || !roomNo || !regNo || !email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    const collegeEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]{2}\.vjti\.ac\.in$/;
    if (!collegeEmailRegex.test(email)) {
      setErrorMessage("Please enter a valid college email address.");
      return;
    }

    try {
      const response = await backendapi.post("/register/student", {
        name,
        gender,
        year,
        block,
        branch,
        room_no: roomNo,
        reg_no: regNo,
        email,
        password
      });
      
      const { jwtToken } = response.data;
      
      if (jwtToken) {
        login(jwtToken);
        navigate("/");
      }
    } catch (error) {
      console.error("Error registering student:", error);
      setErrorMessage("Registration failed. Please try again.");
    }
  }

  return (
    <>
      <div className="outer-container">
        <Container className="register-container mt-5 mb-5">
          <Row>
            <Col md="6" className="register-img mt-5">
              <img src="https://ik.imagekit.io/medpal/registerForm.webp?updatedAt=1683913064005" alt="Login" />
            </Col>
            <Col md="6" className="register">
              <Form className="form">
                <Form.Group>
                  <h3 className="mt-2 mb-4 text-center" style={{ fontSize: '35px' }}>Get started with us!</h3>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{marginBottom: '-2px'}} >Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Full Name"
                    name="name"
                    value={name}
                    style={{
                      width: '100%', // Adjust the width as needed
                      height: '40px', // Adjust the height as needed
                      fontSize: '16px', // Adjust the font size as needed
                      marginTop: '-2px'
                    }}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Row>
                <Col>
                    <Form.Group className="mb-2">
                      <Form.Label style={{marginBottom: '-2px'}}>Gender</Form.Label>
                      <Form.Control
                        as={NativeSelect}
                        name="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                       
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-2">
                      <Form.Label style={{marginBottom: '-2px'}}>Year</Form.Label>
                      <Form.Control
                        as={NativeSelect}
                        name="year"
                        value={year}
                        style={{marginTop: '-2px'}}
                        onChange={(e) => setYear(e.target.value)}
                      >
                        <option value="">Select Year</option>
                        <option value="I">I</option>
                        <option value="II">II</option>
                        <option value="III">III</option>
                        <option value="IV">IV</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>

                 
                </Row>
                <Row>
                <Col>
                    <Form.Group className="mb-2">
                      <Form.Label style={{marginBottom: '-2px'}}> Block</Form.Label>
                      <Form.Control
                        as={NativeSelect}
                        name="block"
                        value={block}
                        style={{marginTop: '-2px'}}
                        onChange={(e) => setBlock(e.target.value)}
                        
                      >
                        <option value="">Select Block</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="PG Boys' Hostel">PG Boys' Hostel</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>

                  <Col>
                  <Form.Group className="mb-2">
                      <Form.Label style={{marginBottom: '-2px'}}>Branch</Form.Label>
                      <Form.Control
                        as={NativeSelect}
                        name="branch"
                        value={branch}
                        style={{marginTop: '-2px'}}
                        onChange={(e) => setBranch(e.target.value)}
                      >
                        <option value="">Select Branch</option>
                        <option value="cs">Computer Science</option>
                        <option value="it">Information Technology</option>
                        <option value="extc">Electronics & Telecommunication Engg</option>
                        <option value="etrx">Electronics</option>
                        <option value="elect">Electrical</option>
                        <option value="mech">Mechanical</option>
                        <option value="text">Textile</option>
                        <option value="prod">Production</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                <Col>
                <Form.Group className="mb-2">
                      <Form.Label  style={{ marginBottom: "0px", paddingBottom:"5px" }}>Room No</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Room-No"
                        value={roomNo}
                        style={{
                          width: '100%', // Adjust the width as needed
                          height: '40px', // Adjust the height as needed
                          fontSize: '16px' ,
                          marginTop: '-2px'// Adjust the font size as needed
                        }}
                        onChange={(e) => setRoomNo(e.target.value)}
                      />
                       </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group className="mb-2">
                      <Form.Label style={{ marginBottom: "0px", paddingBottom:"5px" }}>Reg No</Form.Label>
                      <Form.Control
                        type="int"
                        placeholder="Enter Reg. No"
                        value={regNo}
                        style={{
                          width: '100%', // Adjust the width as needed
                          height: '40px', // Adjust the height as needed
                          fontSize: '16px' ,
                         marginTop: '-2px'// Adjust the font size as needed
                        }}
                        onChange={(e) => setRegNo(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label style={{ marginBottom: "0px", paddingBottom:"5px" }}>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    style={{
                      width: '100%', // Adjust the width as needed
                      height: '40px', // Adjust the height as needed
                      fontSize: '16px', // Adjust the font size as needed
                      marginTop: '-2px'
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Label style={{ marginBottom: "0px", paddingBottom:"5px" }}>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    style={{
                      width: '100%', // Adjust the width as needed
                      height: '40px', // Adjust the height as needed
                      fontSize: '16px' ,// Adjust the font size as needed
                      marginTop: '-2px'
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                </Col>
                </Row>
                <Form.Group className="text-center">
                {errorMessage && (
                  <Form.Group className=" mt-3">
                    <div className="text-danger error-message">{errorMessage}</div>
                  </Form.Group>
                )}
                <Button 
                   variant="contained"
                    type="submit"
                    className="mb-2 mt-4 text-center hoverEffect"
                    style={{ backgroundColor: "#836FFF", color: "white" }}
                    onClick={handleSubmit}
                  >
                    Register
                  </Button>
                  {/* {error && <div className="error">{error}</div>} */}
                </Form.Group>
              
                <Form.Group className="mb-3 text-center">
                  <Form.Text className="text-muted ">
                   Already have an account? 
                   
                    <Link
                      to={"/signIn/student"}
                      style={{
                        marginLeft: "10px",
                        textDecoration: "none",
                        color: "blue",
                        fontSize: 14,
                      }}
                    >
                      Login 
                    </Link>
                  </Form.Text>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default StudentSignUp;