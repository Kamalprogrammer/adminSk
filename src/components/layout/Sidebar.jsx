import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Layout,
  Target,
  Database,
  BarChart3,
  BookOpen,
  Users,
  HelpCircle,
  ChevronRight,
  ChevronDown,
  User,
  Settings,
  Lock,
  LogOut,
  SlidersHorizontal
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({ dashboard: true });

  const toggleMenu = (menuKey) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };

  // Navigation structure based on reference images
  const navigationSections = [
    {
      title: 'NAVIGATION',
      items: [
        {
          key: 'dashboard',
          name: 'Dashboard',
          icon: <LayoutDashboard size={20} />,
          active: true,
          badge: 2,
          expandable: true,
          subItems: [
            { name: 'Default', path: '/dashboard/default' },
            { name: 'Analytics', path: '/dashboard/analytics' },
            { name: 'Finance', path: '/dashboard/finance' },
          ]
        },
        {
          key: 'layouts',
          name: 'Layouts',
          icon: <Layout size={20} />,
          active: false,
          expandable: true,
          subItems: []
        },
      ]
    },
    {
      title: 'WIDGET',
      items: [
        { key: 'statistics', name: 'Statistics', icon: <Target size={20} />, active: false, subItems: [] },
        { key: 'data', name: 'Data', icon: <Database size={20} />, active: false, subItems: [] },
        { key: 'chart', name: 'Chart', icon: <BarChart3 size={20} />, active: false, subItems: [] },
      ]
    },
    {
      title: 'ADMIN PANEL',
      items: [
        {
          key: 'courses',
          name: 'Online Courses',
          icon: <BookOpen size={20} />,
          active: false,
          expandable: true,
          subItems: []
        },
        {
          key: 'membership',
          name: 'Membership',
          icon: <Users size={20} />,
          active: false,
          expandable: true,
          subItems: []
        },
        {
          key: 'helpdesk',
          name: 'Helpdesk',
          icon: <HelpCircle size={20} />,
          active: false,
          expandable: true,
          subItems: []
        },
      ]
    },
  ];

  // Profile dropdown items
  const profileItems = [
    { name: 'My Account', icon: <User size={18} />, active: false },
    { name: 'Settings', icon: <Settings size={18} />, active: true },
    { name: 'Lock Screen', icon: <Lock size={18} />, active: false },
    { name: 'Logout', icon: <LogOut size={18} />, active: false },
  ];

  return (
    <>
      {/* Backdrop overlay with blur effect - only on mobile/tablet */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:relative z-50 lg:z-auto
          bg-sidebar-bg h-screen transition-all duration-300 ease-in-out 
          ${isOpen ? 'w-60' : 'w-0 overflow-hidden'}
          border-r border-border-light
        `}
      >
        {/* Blue accent stripe on right edge */}
        <div className="absolute right-0 top-0 w-1 h-full bg-primary" />

      {/* Scrollable content */}
      <div className={`h-full overflow-y-auto pb-4 scrollbar-hide ${!isOpen && 'hidden'}`}>

        {/* Profile Section */}
        <div className="p-4">
          <div
            className="flex items-center justify-between p-3 bg-section-bg rounded-xl shadow-sm border border-border-light cursor-pointer transition-all duration-300 transform hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.02]"
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
          >
            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center overflow-hidden border-2 border-primary/20">
                <User size={24} className="text-text-white" />
              </div>
              {/* Info */}
              <div>
                <h3 className="font-semibold text-text-black text-sm">Jonh Smith</h3>
                <p className="text-xs text-primary">Administrator</p>
              </div>
            </div>
            {/* Menu Icon */}
            <button className="p-1.5 hover:bg-hover-bg rounded-lg transition-colors">
              <SlidersHorizontal size={18} className="text-text-gray" />
            </button>
          </div>

          {/* Profile Dropdown */}
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${profileDropdownOpen ? 'max-h-64 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
            <div className="py-2 space-y-1">
              {profileItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg cursor-pointer transition-all duration-200 transform hover:translate-x-1 hover:scale-[1.02] ${item.active
                    ? 'text-primary bg-primary-light/50'
                    : 'text-text-gray hover:bg-hover-bg hover:text-text-black hover:shadow-sm'
                    }`}
                >
                  <span className="transition-transform duration-200 group-hover:scale-110">{item.icon}</span>
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>





        {/* Navigation Sections */}
        {navigationSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mt-4">
            {/* Section Title */}
            <h4 className="px-6 py-2 text-xs font-semibold text-text-muted tracking-wider">
              {section.title}
            </h4>

            {/* Section Items */}
            <div className="px-3 space-y-1">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex}>
                  {/* Main Item */}
                  <div
                    onClick={() => item.expandable && toggleMenu(item.key)}
                    className={`
                      flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer 
                      transition-all duration-300 transform
                      ${item.active
                        ? 'bg-primary-light text-primary shadow-sm scale-[1.02]'
                        : 'text-text-gray hover:bg-hover-bg hover:text-text-black hover:translate-x-1 hover:scale-[1.02] hover:shadow-sm'
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`transition-all duration-200 ${item.active ? 'text-primary scale-110' : 'text-text-muted'}`}>
                        {item.icon}
                      </span>
                      <span className="font-medium text-sm">{item.name}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Badge */}
                      {item.badge && (
                        <span className="w-5 h-5 bg-primary text-text-white rounded-full text-xs flex items-center justify-center font-medium shadow-md transition-transform duration-200 hover:scale-110">
                          {item.badge}
                        </span>
                      )}
                      {/* Arrow */}
                      {item.expandable && (
                        <span className={`transition-all duration-300 ${expandedMenus[item.key] ? 'rotate-90' : ''}`}>
                          <ChevronRight size={16} className={item.active ? 'text-primary' : 'text-text-muted'} />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Sub Items */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${item.expandable && item.subItems.length > 0 && expandedMenus[item.key] ? 'max-h-48 opacity-100 ml-6 mt-1' : 'max-h-0 opacity-0 ml-6'}`}>
                    <div className="space-y-1">
                      {item.subItems.map((subItem, subIndex) => {
                        const isActive = location.pathname === subItem.path;
                        return (
                          <NavLink
                            key={subIndex}
                            to={subItem.path}
                            className={`
                              flex items-center gap-3 px-4 py-2.5 rounded-lg cursor-pointer 
                              transition-all duration-200 transform hover:translate-x-1
                              ${isActive
                                ? 'text-primary'
                                : 'text-text-gray hover:text-text-black hover:bg-hover-bg/50'
                              }
                            `}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${isActive ? 'bg-primary scale-125' : 'bg-text-muted'}`} />
                            <span className="text-sm font-medium">{subItem.name}</span>
                          </NavLink>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
    </>
  );
};

export default Sidebar;