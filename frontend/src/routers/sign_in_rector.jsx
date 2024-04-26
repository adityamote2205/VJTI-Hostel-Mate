import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "../styling.css";
import { Container, Row, Col,  Form } from "react-bootstrap";
import MailIcon from '@mui/icons-material/Mail';
import {  InputAdornment } from '@mui/material';
import Input from '@mui/material/Input';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SchoolIcon from '@mui/icons-material/School';
import { useNavigate,useLocation } from "react-router-dom";
import backendapi from "../apis/backendapi";
import { useAuth } from "../context/AuthContext";

function SignInRector() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login,isTokenValid } = useAuth();
  const location=useLocation();
  const path=location.pathname;
  const [redirecting, setRedirecting] = useState(false);
  const navigate = useNavigate();
  const [showIcons, setShowIcons] = useState(false);

  const handleRedirect = (path) => {
    setRedirecting(true);
    console.log(redirecting);
    setTimeout(() => {
      navigate(path);
    }, 1000); // 2 seconds delay
  };
  useEffect(() => {
    // Set a timeout to show icons after 1.5 seconds
    const timeout = setTimeout(() => {
      setShowIcons(true);
    }, 300);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeout);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("email and password are required.");
      return;
    }

    try {
      const response = await backendapi.post("/login/rector", { email, password });
      console.log(response);
      const { jwtToken } = response.data;
      if (jwtToken) {
        login(jwtToken);
        navigate("/rector/home");
      }
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login error (e.g., display error message)
    }
  };
  return (
    <>
       
      <div className="outer-container">
        <Container className="login-container">
          <Row>
            <Col md="6" className="login-img">
              <img src="https://ik.imagekit.io/medpal/6333040.webp?updatedAt=1683912866695" alt="Login" />
            </Col>
            <Col md="6" className="login">
              <Form className="w-50">
              
                <Form.Group className="mb-5 " >
                  <h3 className="mt-2 text-center">Welcome Back!</h3>
                  <h5 className="mb-3 text-center">Login to your Account </h5>
                </Form.Group>
                <Form.Group>
                  {/* Centered div with large anchor tags */}
                  
                  <div className="d-flex justify-content-center mb-1" style={{marginTop:"-30px"}}>
                  {showIcons && (
                    <>
                  <Link to="/signIn/rector" className="icon-link" onClick={() => handleRedirect("/signIn/rector")} style={{marginRight: "10px",borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", height: "80px", width: "80px",  transition: "backgroundColor 0.3s", textDecoration: "none"}}><AccountCircleIcon style={{height:"60px",width:"60px",color:path==="/signIn/rector"?"#836FFF":"#89817f", opacity: 1, transition: "opacity 1s ease",transition: "transform 0.5s ease"}}
                 /> </Link>
                  <Link to="/signIn/student" aria-current="page" className="icon-link" onClick={() => handleRedirect("/signIn/student")} style={{backgroundColor:"#89817f", opacity: 1, transition: "opacity 1s ease" ,marginLeft:"-5px",borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", height: "52px", width: "52px" ,marginTop:'15px',transition: "backgroundColor 0.3s",transition: "transform 0.5s ease", textDecoration: "none"}}  >
                    <   SchoolIcon style={{ height: "38px", width: "38px", color: "white" }} />
                    </Link>
                    </>
                  )}
                  </div>
                 
                </Form.Group>
                <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                 
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    as={Input}
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    id="input-with-icon-adornment"
                    endAdornment={
                      <InputAdornment position="end">
                        <MailIcon />
                      </InputAdornment>
                    }
                  />
                  
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    as={Input}
                    id="input-with-icon-adornment"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <EnhancedEncryptionIcon/>
                      </InputAdornment>
                    }
                  />
                </Form.Group>
                {error && (
                 <div className="mt-3 text-center">
                 <div className=" text-danger error-message">{error}</div>
                </div>
                 )}
                <Form.Group className="text-center mt-4 mb-2">
                <Button 
                   variant="contained"
                    type="submit"
                    className="mb-3 mt-2 text-center hoverEffect"
                    style={{ backgroundColor: "#836FFF", color: "white" }}
                    onClick={handleLogin}
                  >
                    Login
                  </Button>
                </Form.Group>
                
                <span>
                <Form.Group  className="mb-3 d-flex align-items-center justify-content-center">
                
                  <Form.Text className="text-muted">
                    Don't have an account? 
                    {' '}
                    <Link
                      to={"/signUp/rector"}
                      style={{
                        marginLeft: "3px",
                        textDecoration: "none",
                        color: "blue",
                        fontSize: 14,
                      }}
                    >
                      Register here 
                    </Link>
                   
                  </Form.Text>
                  
                </Form.Group>
                </span>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
        {/* */}
      {/* )} */}
    </>
  );
};

export default SignInRector;