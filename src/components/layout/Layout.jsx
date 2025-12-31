import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Breadcrumbs from '../Breadcrumbs';
const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-page-bg transition-colors duration-300">  

      <Sidebar isOpen={sidebarOpen} />

      <div className="flex-1 flex flex-col overflow-hidden">

        <Navbar onToggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        <main className="flex-1 overflow-y-auto p-6 bg-page-bg transition-colors duration-300">
            <Breadcrumbs />
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;