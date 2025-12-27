import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children, onNavigate }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-slate-100">  

      <Sidebar isOpen={sidebarOpen} onNavigate={onNavigate} />

      <div className="flex-1 flex flex-col overflow-hidden">

        <Navbar onToggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;