import React, { useState, useRef, useEffect } from 'react';
import {
    Menu,
    Search,
    Bell,
    Sun,
    Moon,
    Languages,
    Settings,
    Zap,
    User
} from 'lucide-react';

const Navbar = ({ onToggleSidebar, sidebarOpen }) => {
    const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
    const [langDropdownOpen, setLangDropdownOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState('light');
    const [currentLang, setCurrentLang] = useState('en');
    const themeDropdownRef = useRef(null);
    const langDropdownRef = useRef(null);

    // Language options
    const languageOptions = [
        { id: 'en', label: 'English', flag: '🇺🇸' },
        { id: 'hi', label: 'Hindi', flag: '🇮🇳' },
        { id: 'es', label: 'Spanish', flag: '🇪🇸' },
        { id: 'fr', label: 'French', flag: '🇫🇷' },
    ];

    const handleLangChange = (langId) => {
        setCurrentLang(langId);
        setLangDropdownOpen(false);
        // Add your language change logic here
    };

    const getCurrentLangFlag = () => {
        const lang = languageOptions.find(l => l.id === currentLang);
        return lang ? lang.flag : '🇺🇸';
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (themeDropdownRef.current && !themeDropdownRef.current.contains(event.target)) {
                setThemeDropdownOpen(false);
            }
            if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
                setLangDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const themeOptions = [
        { id: 'dark', label: 'Dark', icon: <Moon size={18} /> },
        { id: 'light', label: 'Light', icon: <Sun size={18} /> },
        { id: 'default', label: 'Default', icon: <Settings size={18} /> },
    ];

    const handleThemeChange = (themeId) => {
        setCurrentTheme(themeId);
        setThemeDropdownOpen(false);
        // Add your theme change logic here
    };

    const getCurrentThemeIcon = () => {
        switch (currentTheme) {
            case 'dark': return <Moon size={20} />;
            case 'light': return <Sun size={20} />;
            default: return <Settings size={20} />;
        }
    };

    return (
        <header className="bg-primary h-16 flex items-center justify-between px-6 shadow-md">
            {/* Left Section */}
            <div className="flex items-center gap-4">
                {/* Version Badge */}
                <span className="text-xs bg-white/20 text-text-white px-2 py-1 rounded-md font-medium">
                    v8.6.2
                </span>

                {/* Animated Hamburger Menu Button */}
                <button
                    onClick={onToggleSidebar}
                    className="relative w-10 h-10 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg hover:shadow-white/20 flex items-center justify-center group"
                    aria-label="Toggle sidebar"
                >
                    {/* Hamburger Lines Container */}
                    <div className="w-5 h-4 flex flex-col justify-between items-center">
                        {/* Top Line */}
                        <span
                            className={`block h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out origin-center ${sidebarOpen
                                ? 'w-5 rotate-45 translate-y-[7px]'
                                : 'w-5 group-hover:w-5'
                                }`}
                        />
                        {/* Middle Line */}
                        <span
                            className={`block h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${sidebarOpen
                                ? 'w-0 opacity-0'
                                : 'w-4 opacity-100 group-hover:w-5'
                                }`}
                        />
                        {/* Bottom Line */}
                        <span
                            className={`block h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out origin-center ${sidebarOpen
                                ? 'w-5 -rotate-45 -translate-y-[7px]'
                                : 'w-3 group-hover:w-5'
                                }`}
                        />
                    </div>
                </button>

                {/* Search Bar */}
                <div className="hidden md:flex items-center bg-white rounded-lg px-4 py-2 w-48 shadow-sm">
                    <Search size={16} className="text-text-gray mr-2" />
                    <span className="text-sm text-text-gray">Ctrl + K</span>
                </div>
            </div>

            {/* Right Section - Icons */}
            <div className="flex items-center gap-1">
                {/* Theme Toggle with Dropdown */}
                <div className="relative" ref={themeDropdownRef}>
                    <button
                        onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                        className={`p-2.5 rounded-lg transition-all duration-200 transform ${themeDropdownOpen
                            ? 'bg-white text-primary shadow-lg scale-105'
                            : 'hover:bg-white/20 hover:-translate-y-0.5 hover:scale-110 hover:shadow-lg hover:shadow-white/20 text-text-white'
                            }`}
                    >
                        {getCurrentThemeIcon()}
                    </button>

                    {/* Theme Dropdown */}
                    {themeDropdownOpen && (
                        <div className="absolute right-0 top-12 bg-white rounded-xl shadow-xl py-2 min-w-[150px] z-50 border border-slate-100">
                            {themeOptions.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => handleThemeChange(option.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${currentTheme === option.id
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-text-black hover:bg-slate-50'
                                        }`}
                                >
                                    <span className={currentTheme === option.id ? 'text-primary' : 'text-text-gray'}>
                                        {option.icon}
                                    </span>
                                    <span className="font-medium text-sm">{option.label}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Language Changer */}
                <div className="relative" ref={langDropdownRef}>
                    <button
                        onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                        className={`p-2.5 rounded-lg transition-all duration-200 transform flex items-center gap-1 ${langDropdownOpen
                            ? 'bg-white text-primary shadow-lg scale-105'
                            : 'hover:bg-white/20 hover:-translate-y-0.5 hover:scale-110 hover:shadow-lg hover:shadow-white/20 text-text-white'
                            }`}
                    >
                        <Languages size={20} />
                    </button>

                    {/* Language Dropdown */}
                    {langDropdownOpen && (
                        <div className="absolute right-0 top-12 bg-white rounded-xl shadow-xl py-2 min-w-[150px] z-50 border border-slate-100">
                            {languageOptions.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => handleLangChange(option.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${currentLang === option.id
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-text-black hover:bg-slate-50'
                                        }`}
                                >
                                    <span className="text-lg">{option.flag}</span>
                                    <span className="font-medium text-sm">{option.label}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Settings */}
                <button className="p-2.5 rounded-lg transition-all duration-200 transform hover:bg-white/20 hover:-translate-y-0.5 hover:scale-110 hover:shadow-lg hover:shadow-white/20 text-text-white">
                    <Settings size={20} />
                </button>

                {/* Lightning / Quick Actions */}
                <button className="p-2.5 rounded-lg transition-all duration-200 transform hover:bg-white/20 hover:-translate-y-0.5 hover:scale-110 hover:shadow-lg hover:shadow-white/20 text-text-white">
                    <Zap size={20} />
                </button>

                {/* Notifications */}
                <button className="relative p-2.5 rounded-lg transition-all duration-200 transform hover:bg-white/20 hover:-translate-y-0.5 hover:scale-110 hover:shadow-lg hover:shadow-white/20 text-text-white">
                    <Bell size={20} />
                    <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] flex items-center justify-center font-bold shadow-md">
                        3
                    </span>
                </button>

                {/* User Avatar */}
                <button className="ml-2 w-9 h-9 rounded-full overflow-hidden border-2 border-white/30 transition-all duration-200 transform hover:border-white hover:-translate-y-0.5 hover:scale-110 hover:shadow-lg hover:shadow-white/30">
                    <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                        <User size={18} className="text-white" />
                    </div>
                </button>
            </div>
        </header>
    );
};

export default Navbar;
