// NavComponent.jsx

import React from 'react';
import { useAuth } from '../context/AuthContext';

const NavComponent = () => {
    const { authToken, isTokenValid } = useAuth();

    const hostelLink = isTokenValid ? "/hostel/:id/student" : "/signIn/student";
    const messLink = isTokenValid ? "/mess/:id/student" : "/signIn/student";

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Grivances</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href={hostelLink}>Hostel</a></li>
                    <li><a className="dropdown-item" href={messLink}>Mess</a></li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/aboutUs">About Us</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/contactUs">Contact Us</a>
            </li>
        </ul>
    );
};

export default NavComponent;




// import React from 'react';
// import { useAuth } from '../context/AuthContext';

// const NavComponent = () => {
//     const { authToken } = useAuth();

//     const hostelLink = authToken ? "/hostel/:id/student" : "/signIn/student";
//     const messLink = authToken ? "/mess/:id/student" : "/signIn/student";

//     return (
//         <ul className="nav nav-tabs">
//             <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="/">Home</a>
//             </li>
//             <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Grivances</a>
//                 <ul className="dropdown-menu">
//                     <li><a className="dropdown-item" href={hostelLink}>Hostel</a></li>
//                     <li><a className="dropdown-item" href={messLink}>Mess</a></li>
//                 </ul>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link" href="/aboutUs">About Us</a>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link" href="/contactUs">Contact Us</a>
//             </li>
//         </ul>
//     );
// };

// export default NavComponent;






// import React from 'react';

// const NavComponent = ({isLoggedIn}) => {
//     return (
//         <ul className="nav nav-tabs">
//             <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="/">Home</a>
//             </li>
//             <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Grivances</a>
//                 <ul className="dropdown-menu">
//                     <li><a className="dropdown-item" href={isLoggedIn ? "/hostel/:id/student" : "/signIn/student"}>Hostel</a></li>
//                     <li><a className="dropdown-item" href={isLoggedIn ? "/mess/:id/student" : "/signIn/student"}>Mess</a></li>
//                 </ul>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link" href="/aboutUs">About Us</a>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link" href="/contactUs">Contact Us</a>
//             </li>
//         </ul>
//     );
// };

// export default NavComponent;
