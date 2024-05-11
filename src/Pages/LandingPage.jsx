import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import Sidebar from '../Components/Sidebar/Sidebar';
import Header from '../Components/Header/Header';
import './landinpage.css'; // Import CSS file for LandingPage styles

const LandingPage = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSidebarCollapse = (collapsed) => {
    setSidebarCollapsed(collapsed);
    console.log("Sidebar is collapsing")
  };

  return (
    <div className={`landing-page ${sidebarCollapsed ? 'collapsed' : ''}`}>
      <Sidebar onCollapse={handleSidebarCollapse} />
      <div className="content">
        <Header />
        {/* Add any additional content for the right side */}
      </div>
    </div>
  );
}

export default LandingPage;
