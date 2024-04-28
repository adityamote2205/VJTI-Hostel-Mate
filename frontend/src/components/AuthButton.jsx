import React from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LoginIcon from '@mui/icons-material/Login';

const AuthButton = ({ isLoggedIn, handleProfile, handleLogin, isStudentTokenValid,authToken }) => {
    return (
        <div className="d-flex align-items-center" style={{ marginLeft: '-8px' }}>
            {(authToken && isStudentTokenValid) ? (
                <button type="button" onClick={handleProfile} className="btn btn-outline-dark me-3"><PersonOutlineIcon /> Profile</button>
            ) : (
                <>
                <div className="btn-group me-3">
                    <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
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
</>
            )}
            {/* {(
                // <button type="button" onClick={handleLogin} className="btn btn-outline-secondary login-btn d-flex align-items-center">
                //     <LoginIcon style={{ marginRight: '10px' }} />
                //     Login
                // </button>
            )} */}
        </div>
    );
};

export default AuthButton;



// AuthButton.jsx

// import React from 'react';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import LoginIcon from '@mui/icons-material/Login';

// const AuthButton = ({ isLoggedIn, handleProfile, handleLogin }) => {
//     return (
//         <div className="d-flex align-items-center" style={{ marginLeft: '-8px' }}>
//             {isLoggedIn ? (
//                 <button type="button" onClick={handleProfile} className="btn btn-outline-dark me-3"><PersonOutlineIcon /> Profile</button>
//             ) : (
//                 <div className="btn-group me-3">
//                     <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//                         SignUp
//                     </button>
//                     <ul className="dropdown-menu">
//                         <li><a className="dropdown-item" href="/signUp/student">SignUp as a Student</a></li>
//                         <li><a className="dropdown-item" href="/signUp/rector">SignUp as a Rector</a></li>
//                     </ul>
//                 </div>
//             )}
//             {!isLoggedIn && (
//                 <button type="button" onClick={handleLogin} className="btn btn-outline-secondary login-btn d-flex align-items-center">
//                     <LoginIcon style={{ marginRight: '10px' }} />
//                     Login
//                 </button>
//             )}
//         </div>
//     );
// };

// export default AuthButton;




// import React from 'react';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import LoginIcon from '@mui/icons-material/Login';

// const AuthButton = ({ isLoggedIn, handleProfile, handleLogin }) => {
//     return (
//         <div className="d-flex align-items-center" style={{ marginLeft: '-8px' }}>
//             {isLoggedIn ? (
//                 <button type="button" onClick={handleProfile} className="btn btn-outline-dark me-3"><PersonOutlineIcon /> Profile</button>
//             ) : (
//                 <div className="btn-group me-3">
//                     <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//                         SignUp
//                     </button>
//                     <ul className="dropdown-menu">
//                         <li><a className="dropdown-item" href="/signUp/student">SignUp as a Student</a></li>
//                         <li><a className="dropdown-item" href="/signUp/rector">SignUp as a Rector</a></li>
//                     </ul>
//                 </div>
//             )}
//             {!isLoggedIn && (
//                 <button type="button" onClick={handleLogin} className="btn btn-outline-secondary login-btn d-flex align-items-center">
//                     <LoginIcon style={{ marginRight: '10px' }} />
//                     Login
//                 </button>
//             )}
//         </div>
//     );
// };

// export default AuthButton;



// import React from 'react';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import LoginIcon from '@mui/icons-material/Login';

// const AuthButton = ({ isLoggedIn, handleProfile, handleLogin }) => {
//     return (
//         <div className="d-flex align-items-center" style={{ marginLeft: '-8px' }}>
//             {isLoggedIn ? (
//                 <button type="button" onClick={handleProfile} className="btn btn-outline-dark me-3"><PersonOutlineIcon /> Profile</button>
//             ) : (
//                 <div className="btn-group me-3">
//                     <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//                         SignUp
//                     </button>
//                     <ul className="dropdown-menu">
//                         <li><a className="dropdown-item" href="/signUp/student">SignUp as a Student</a></li>
//                         <li><a className="dropdown-item" href="/signUp/rector">SignUp as a Rector</a></li>
//                     </ul>
//                 </div>
//             )}
//             {!isLoggedIn && (
//                 <button type="button" onClick={handleLogin} className="btn btn-outline-secondary login-btn d-flex align-items-center">
//                     <LoginIcon style={{ marginRight: '10px' }} />
//                     Login
//                 </button>
//             )}
//         </div>
//     );
// };

// export default AuthButton;
