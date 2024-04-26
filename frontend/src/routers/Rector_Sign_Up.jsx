import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styling.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';
import backendapi from "../apis/backendapi";
import { useAuth } from "../context/AuthContext";

function RectorSignUp() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [block, setBlock] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const {login,isTokenValid} = useAuth();


  function handleSubmit(event) {
    event.preventDefault();
    if (!name || !gender || !block || !email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    const collegeEmailRegex1 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]{2}\.vjti\.ac\.in$/;
    const collegeEmailRegex2 = /^[a-zA-Z0-9._%+-]+@vjti\.ac\.in$/;
    if (!collegeEmailRegex1.test(email) && !collegeEmailRegex2.test(email)) {
      setErrorMessage("Please enter a valid college email address.");
      return;
    }

    try {
      backendapi.post("/register/rector", {
        name,
        gender,
        block,
        email,
        password
      }).then(response => {
        const { jwtToken } = response.data;
        if (jwtToken) {
          login(jwtToken);
          navigate("/rector/home");
        }
      });
    } catch (error) {
      console.error("Error registering rector:", error);
      setErrorMessage("Registration failed. Please try again.");
    }
  }

  return (
    <>
      <div className="outer-container">
        <Container className="register-container mt-5 mb-5" style={{paddingLeft:'90px',maxWidth:"1150px"}}>
          <Row>
            <Col md="6" className="register-img mt-5" style={{marginLeft:"-90px"}}>
              <img src="https://ik.imagekit.io/medpal/registerForm.webp?updatedAt=1683913064005" alt="Login" />
            </Col>
            <Col md="6" className="register" style={{marginRight:"-90px"}}>
              <Form className="form">
                <Form.Group>
                  <h3 className="mt-2 mb-5 text-center" style={{ fontSize: '35px' }}>Get started with us!</h3>
                </Form.Group>

                <Form.Group className="mb-3 mt-5">
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
                    <Form.Group className="mb-3 mt-1">
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
                    <Form.Group className="mb-3 mt-1">
                      <Form.Label style={{marginBottom: '-2px'}}> Block</Form.Label>
                      <Form.Control
                        as={NativeSelect}
                        name="block"
                        value={block}
                       
                        onChange={(e) => setBlock(e.target.value)}
                      >
                        <option value="">Select Block</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3 mt-1" controlId="formBasicEmail">
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
              
                <Form.Group className="mb-3 mt-1 text-center">
                  <Form.Text className="text-muted ">
                   Already have an account? 
                   
                    <Link
                      to={"/signIn/rector"}
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
export default RectorSignUp;