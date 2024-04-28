import React,{useState,useEffect} from "react";
import { NativeSelect } from "@mui/material";
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
import BrandComponent from "../components/BrandComponent";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import backendapi from "../apis/backendapi";
function ProfileEdit(){
    const navigate=useNavigate();
      const[name,setName]=useState("");
      const[email,setEmail]=useState("");
      const[year,setYear]=useState("Update Year");
      const[branch,setBranch]=useState("Update Branch");
      const[block,setBlock]=useState("Update Block");
      const[room,setRoom]=useState("");
      const [errors, setErrors] = useState({});
      const {headers}=useAuth();
      const [loading, setLoading] = useState(true);
     
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await backendapi.get("/profile/student/edit", { headers });
            setName(response.data.profileData.name);
            setEmail(response.data.profileData.email);
            setRoom(response.data.profileData.room_no);
            setYear(response.data.profileData.year);
            setBranch(response.data.profileData.branch);
            setBlock(response.data.profileData.block); 
            setLoading(false);
            console.log(response.data);
          } catch (err) {
            console.error("Error fetching complaints:", err);
            setLoading(false);
          }
        };
        fetchData();
      }, [headers]);
    
      if (loading) {
        return <div>Loading...</div>; // Render loading indicator while fetching data
      }
      async function handleSubmit() {
          let errors = {};
          if (!name) {
              errors.name = "Name is required";
          }
          const collegeEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]{2}\.vjti\.ac\.in$/;
          if (!email) {
              errors.email = "Email is required";
          }
          if (!collegeEmailRegex.test(email)) {
             errors.email="Please enter a valid college email address.";
         
          }
          if (year == "Update Year") {
              errors.year = "Year is required";
          }
          if (branch === "Update Branch") {
              errors.branch = "Branch is required";
          } 
          if (block === "Update Block") {
              errors.block = "Block is required";
          } 
          if (!room) {
              errors.room = "Room no is required";
          }
          // If there are errors, set them and return
          if (Object.keys(errors).length > 0) {
              setErrors(errors);
              return;
          }
          // If no errors, navigate to next page
          try{
            const response = await backendapi.put("/profile/student/edit",{
               name:name,
               year:year,
               block:block,
               branch:branch,
               room_no:room,
               email:email
            }, { headers });
            console.log(response);
            navigate("/student/:id/profile");
          }
          catch(err){
            console.error("Error during updating profile Data:", err);
            setLoading(false);
          }
         
      }
     
    return(
   <>
    <nav style={{ backgroundColor: '#F0F3FF', borderBottom: '1px solid #dee2e6', padding: '10px 0' }}>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <BrandComponent />
                    
                </div>
            </nav>
        <div className="container p-5 ">
         
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-5">
        <div className="card h-150 shadow ">
        <form action="#!">
          <div className="card-body">
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h4 className="mb-2 " style={{color:"#836FFF"}}>Personal Details</h4>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name<span class="text-danger">*</span></label>
                  <Input type="text" className="form-control"  onChange={(e)=>{setName(e.target.value)}}placeholder="Enter full name"  style={{height:"35px",border:"none",color:"black"}} required value={name} />
                  {errors.name && <div className="text-danger">{errors.name}</div>}
                </div>
              </div>
              
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="eMail">Email<span class="text-danger">*</span></label>
                  <Input type="email" className="form-control" id="eMail" value={email} onChange={(e)=>{setEmail(e.target.value)}}  placeholder="Enter email ID" style={{height:"35px",border:"none",color:"black"}} required/>
                  {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-3">
                <div className="form-group">
                <label htmlFor="year" >Year<span class="text-danger">*</span></label>
                <NativeSelect name="year" className="col=md-12" style={{ width: '100%' }} value={year} onChange={(e)=>{setYear(e.target.value)}}  inputProps={{ style: { color: 'black',paddingLeft:"10px" } }} required>
                <option value="Update Year">Update Year</option>
                   <option value="I">I</option>
                  <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
               </NativeSelect>
               {errors.year && <div className="text-danger">{errors.year}</div>}
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-3">
              <div className="form-group">
                <label htmlFor="branch">Branch<span class="text-danger">*</span></label>
                <NativeSelect name="year" className="col=md-12" style={{ width: '100%' }} value={branch} onChange={(e)=>{setBranch(e.target.value)}} inputProps={{ style: { color: 'black',paddingLeft:"10px" } }} required>
                        <option value="Update Branch">Update Branch</option>
                        <option value="cs">Computer Science</option>
                        <option value="it">Information Technology</option>
                        <option value="extc">Electronics & Telecommunication Engg</option>
                        <option value="etrx">Electronics</option>
                        <option value="elect">Electrical</option>
                        <option value="mech">Mechanical</option>
                        <option value="text">Textile</option>
                        <option value="prod">Production</option>
               </NativeSelect>
               {errors.branch && <div className="text-danger">{errors.branch}</div>}
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-3">
              <div className="form-group">
                <label htmlFor="block">Block<span class="text-danger">*</span></label>
                <NativeSelect name="block" className="col=md-12" style={{ width: '100%' }} value={block} onChange={(e)=>{setBlock(e.target.value)}} inputProps={{ style: { color: 'black',paddingLeft:"10px" } }} required>
                <option value="Update Block">Update Block</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="PG Boys'Hostel">PG Boys'Hostel</option>
               </NativeSelect>
               {errors.block && <div className="text-danger">{errors.block}</div>}
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-3">
              <div className="form-group">
                <label htmlFor="roomNo">Room No<span class="text-danger">*</span></label>
                <Input type="text" className="form-control" id="roomNo" value={room} onChange={(e)=>{setRoom(e.target.value)}} placeholder="Enter Room No" style={{height:"35px",border:"none",color:"black"}} required/>
                {errors.room && <div className="text-danger">{errors.room}</div>}
                </div>
              </div>
            </div>
            
            <div className="row gutters mt-5 mb-3">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="text-right">
                 
                  <Button  variant="contained" type="button" id="submit" name="submit" className="btn " onClick={handleSubmit} style={{ backgroundColor: "#836FFF", color: "white",marginLeft:'500px' }}>Update</Button>
                </div>
              </div>
            </div>
          </div>
        </form>
        </div>
      </div>
      </div>
      <Footer/>
      </>
    );
};
export default ProfileEdit;