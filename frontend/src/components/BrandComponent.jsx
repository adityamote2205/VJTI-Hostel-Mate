import React from 'react';
import HubTwoToneIcon from '@mui/icons-material/HubTwoTone';

const BrandComponent = () => {
    return (
        <a href="/aboutUs" className="navbar-brand">
            <HubTwoToneIcon style={{ marginRight: '8px', color: '#836FFF' }} />
            <span style={{ color: '#211951', fontWeight: 'bold', fontSize: '1.5rem' }}>
                VJTI
            </span>{" "}
            <span style={{ color: '#836FFF', fontWeight: 'bold', fontSize: '1.5rem', marginLeft: '10px' }}>
                Hostel-Mate
            </span>
        </a>
    );
};

export default BrandComponent;
