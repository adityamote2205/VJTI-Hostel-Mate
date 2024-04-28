import React, { useEffect , useState} from 'react';
import Header from '../components/Header'
import BrandComponent from '../components/BrandComponent'
import NavComponent from '../components/NavComponent';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import SyncProblemIcon from '@mui/icons-material/SyncProblem';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import ApprovalIcon from '@mui/icons-material/Approval';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LoginIcon from '@mui/icons-material/Login';


const Rector_Home = () => {

  const navigate = useNavigate();
  const {authToken, isRectorTokenValid } = useAuth();

  // useEffect(() => {
    
  //   // Redirect to sign-in page if token is not valid
  //   console.log(isRectorTokenValid);
  //   if (!(authToken && isRectorTokenValid)) {
  //     navigate("/signIn/rector");
  //   }
  // }, [isRectorTokenValid, navigate]);

  // const navigate = useNavigate();
  // const { isRectorTokenValid } = useAuth();
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const checkTokenValidity = async () => {
  //     if (!isRectorTokenValid) {
  //       navigate("/signIn/rector");
  //     } else {
  //       setIsLoading(false);
  //     }
  //   };

  //   checkTokenValidity();
  // }, [isRectorTokenValid, navigate]);

  // if (isLoading) {
  //   return <div>Loading...</div>; // or any loading indicator you prefer
  // }
  function handleProfile(){
      navigate("/rector/:id/profile");
  }
 function handleLogin(){
    navigate("/signIn/rector");
 }
 function handleSignUp(){
    navigate("/signUp/rector");
 }
  return (
    <div>
      <nav style={{ backgroundColor: '#F0F3FF', borderBottom: '1px solid #dee2e6', padding: '10px 0' }}>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                   <BrandComponent/>
                   <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/rector/home">Rector's Dashboard</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Check Grievances</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href={isRectorTokenValid ? "/hostel/:id/rector" : "/signIn/rector"}>Hostel</a></li>
                    <li><a className="dropdown-item" href={isRectorTokenValid ? "/mess/:id/rector" : "/signIn/rector"}>Mess</a></li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/aboutUs">About Us</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/contactUs">Contact Us</a>
            </li>
        </ul>

        <ul className="nav">
  <li>
    <div className="d-flex align-items-center" style={{ marginLeft: '-8px' }}>
      {/* Any content you want to display before the buttons */}
    </div>
    {authToken && isRectorTokenValid ? (
      <button type="button" onClick={handleProfile} className="btn btn-outline-dark me-3">
        <PersonOutlineIcon /> Rector Profile
      </button>
    ) : (
      <div className="d-flex align-items-center">
  <div className="btn-group me-3">
    <button type="button" onClick={handleSignUp} className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      SignUp
    </button>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="/signUp/student">SignUp as a Student</a></li>
      <li><a className="dropdown-item" href="/signUp/rector">SignUp as a Rector</a></li>
    </ul>
  </div>
  <button type="button" onClick={handleLogin} className="btn btn-outline-secondary login-btn d-flex align-items-center">
    <LoginIcon style={{ marginRight: '10px' }} />
    Login
  </button>
</div>

    )}
  </li>
</ul>

                </div>
            </nav>

            <div className="jumbotron p-3 p-md-5 text-white rounded mb-3 slow-animation" style={{ backgroundColor: "#8062D6", marginLeft: '10px', marginRight: '10px', marginTop: '15px' }}>
                <div className="col-md-6 px-0">
                <h1 className="display-4 font-italic">Welcome Rector !!</h1>
          <p className="lead my-3">to the VJTI Hostel Mate Dashboard! This platform is designed to streamline the grievance management process and ensure timely resolution of student concerns.</p>
          <p>
            <a href="/hostel/:id/rector" class="btn btn-secondary  my-2" style={{marginRight:'20px'}}>Check Hostel Grievance</a>
            <a href="/mess/:id/rector" class="btn btn-dark my-2">Check Mess Grievance</a>
          </p>   
                </div>
            </div>

            <section class="py-5">
	<div class="container">
		<div class="row align-items-center gx-4">
			<div class="col-md-5">
				<div class="ms-md-2 ms-lg-5"><img class="img-fluid rounded-3" src="https://www.coe.int/documents/10463064/14588322/internet+intermediaries_870-489.jpg/9d252e73-a663-d1d9-9d3a-df88a6297fd8?t=1534328350000" /></div>
			</div>
			<div class="col-md-6 offset-md-1">
				<div class="ms-md-2 ms-lg-5">
					<h2 class="display-5 fw-bold">Rector's Responsibilities</h2>
					<p class="lead">As a hostel rector, you're responsible for the overall management of the hostel and mess facilities. This includes ensuring cleanliness, safety, and proper functioning, addressing maintenance issues, managing room allocations, and monitoring the quality of food and services provided in the mess.</p>
					<p class="lead mb-0">Your active involvement is crucial for creating a conducive living environment for students.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<hr style={{marginRight:'30px', marginLeft:"30px"}}/>

<div class="container py-5">
        <h2 class="mb-5">Grievance Management</h2>
        <div class="row mb-2">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="icon mb-4"><ReportProblemIcon style={{width:'35px',height:'35px'}}/></div>
            <h5 class="lined mb-4">View Grievance</h5>
            <p class="text-muted text-small">Rectors log in and navigate to the grievances section to view all hostel and mess-related issues reported by students..</p>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="icon mb-4"><SyncProblemIcon style={{width:'35px',height:'35px'}}/></div>
            <h5 class="lined mb-4">Assessment</h5>
            <p class="text-muted text-small"> Rectors assess the severity of each grievance and assign staff to investigate and resolve the issues.</p>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="icon mb-4"><ConnectWithoutContactIcon style={{width:'35px',height:'35px'}}/></div>
            <h5 class="lined mb-4">Communication</h5>
            <p class="text-muted text-small">Rectors communicate with relevant staff members and stakeholders to address the grievances effectively.</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div class="icon mb-4"><TrackChangesIcon style={{width:'35px',height:'35px'}}/></div>
            <h5 class="lined mb-4">Problem Resolution</h5>
            <p class="text-muted text-small">Staff members investigate the reported issues, take necessary actions, and work towards resolving them promptly.</p>
          </div>
          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div class="icon mb-4"><UpgradeIcon style={{width:'35px',height:'35px'}}/></div>
            <h5 class="lined mb-4">Status Update</h5>
            <p class="text-muted text-small">Rectors update the status of each grievance on the website to keep students informed about the progress of their reported issues.</p>
          </div>
          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div class="icon mb-4"><ApprovalIcon style={{width:'35px',height:'35px'}}/></div>
            <h5 class="lined mb-4">Issue Resolution</h5>
            <p class="text-muted text-small">
            Once the grievance is successfully resolved, Rectors mark it as solved on the website, providing closure to the reported problem.</p>
          </div>
        </div>
      </div>
      <Footer/>



    </div>
  )
}

export default Rector_Home