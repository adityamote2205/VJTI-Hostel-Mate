import React from 'react';
import BrandComponent from './BrandComponent';
import NavComponent from './NavComponent';
import AuthButton from './AuthButton';
import { useNavigate } from 'react-router-dom';

const Header = ({ isLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/signIn/student");
    }

    const handleProfile = () => {
        navigate("/student/:id/profile");
    }

    return (
        <div>
            <nav style={{ backgroundColor: '#F0F3FF', borderBottom: '1px solid #dee2e6', padding: '10px 0' }}>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <BrandComponent />
                    <NavComponent isLoggedIn={isLoggedIn} />
                    <AuthButton isLoggedIn={isLoggedIn} handleProfile={handleProfile} handleLogin={handleLogin} />
                </div>
            </nav>
        </div>
    );
};

export default Header;
