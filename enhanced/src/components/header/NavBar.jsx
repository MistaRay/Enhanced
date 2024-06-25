import React from 'react'
import DarkModeIcon from './dark mode.svg';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="bg-nav text-text p-6 pl-10 font-bold text-left shadow-xl flex justify-between items-center">
        <Link to="/" className="text-4xl font-bruno">
            ENHANCED
        </Link>
        <div className="flex items-center">
            <img src={DarkModeIcon} alt="DarkMode" className="h-9 w-9 mr-4"/> 
            <Link to="/login" className="text-2xl p-2 rounded-xl bg-login transition-transform transform hover:scale-110">
            Login
            </Link> 
        </div>
        </nav>
    )
}

export default NavBar;