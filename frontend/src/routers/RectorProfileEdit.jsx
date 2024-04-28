import React,{useState,useEffect} from "react";
import { NativeSelect } from "@mui/material";
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
import BrandComponent from "../components/BrandComponent";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import backendapi from "../apis/backendapi";
function RectorProfileEdit(){
    const navigate=useNavigate();
      const[name,setName]=useState("");
      const[email,setEmail]=useState("");
      const[block,setBlock]=useState("Update Block");
      const [errors, setErrors] = useState({});
      const[loading,setLoading]=useState(true);
      const {headers}=useAuth();
      async function handleSubmit() {
          let errors = {};
          if (!name) {
              errors.name = "Name is required";
          }
          const collegeEmailRegex1 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]{2}\.vjti\.ac\.in$/;
          const collegeEmailRegex2 = /^[a-zA-Z0-9._%+-]+@vjti\.ac\.in$/;
          if (!email) {
              errors.email = "Email is required";
          }
          
          else if (!collegeEmailRegex1.test(email) && !collegeEmailRegex2.test(email)) {
            errors.email="Please enter a valid college email address.";
          }
          if (block === "Update Block") {
              errors.block = "Block is required";
          }
           // If there are errors, set them and return
          if (Object.keys(errors).length > 0) {
              setErrors(errors);
              return;
          }
          try{
            const response=await backendapi.put("/profile/rector/edit",{
              name:name,
              email:email,
              block:block
            },{headers});
            console.log(response);
            navigate("/rector/:id/profile");
          }
          catch(err){
            console.error("Error during updating profile Data:", err);
            setLoading(false);
          }
         
      }
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await backendapi.get("/profile/rector/edit", { headers });
            setName(response.data.profileData.name);
            setEmail(response.data.profileData.email);
            setBlock(response.data.profileData.block); 
            setLoading(false);
            console.log(response.data);
          } catch (err) {
            console.error("Error fetching rector profile data:", err);
            setLoading(false);
          }
        };
        fetchData();
      }, [headers]);
    
      if (loading) {
        return <div>Loading...</div>; // Render loading indicator while fetching data
      }
    return(
      <>
      <nav style={{ backgroundColor: '#F0F3FF', borderBottom: '1px solid #dee2e6', padding: '10px 0' }}>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <BrandComponent />
                    
                </div>
            </nav>
      
        <div className="container  ">
        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' ,marginLeft:"100px",marginTop:"-50px"}}>
        <div className="card h-150 shadow ">
          <div className="card-body">
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
                <h4 className="mb-2 " style={{color:"#836FFF"}}>Personal Details</h4>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <Input type="text" className="form-control" id="fullName" value={name} onChange={(e)=>{setName(e.target.value)}}placeholder="Enter full name"  style={{height:"35px",border:"none",color:"black"}}/>
                  {errors.name && <div className="text-danger">{errors.name}</div>}
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="form-group">
                  <label htmlFor="eMail">Email</label>
                  <Input type="email" className="form-control" id="eMail" value={email} onChange={(e)=>{setEmail(e.target.value)}}  placeholder="Enter email ID" style={{height:"35px",border:"none",color:"black"}}/>
                  {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
              <div className="form-group">
                <label htmlFor="block">Block</label>
                <NativeSelect name="block" className="col=md-12" style={{ width: '100%' }} value={block} onChange={(e)=>{setBlock(e.target.value)}} inputProps={{ style: { color: 'black',paddingLeft:"10px" } }}>
                <option value="Update Block">Update Block</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
               </NativeSelect>
               {errors.block && <div className="text-danger">{errors.block}</div>}
                </div>
              </div>
            </div>
            
            <div className="row gutters mt-5 mb-3">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="text-right">
                 
                  <Button  variant="contained" type="button" id="submit" name="submit" className="btn " onClick={()=>{handleSubmit()}} style={{ backgroundColor: "#836FFF", color: "white",marginLeft:'450px' }}>Update</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
      </>
    );
};
export default RectorProfileEdit;