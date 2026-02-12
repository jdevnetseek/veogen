
import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuIcon, BellIcon, LogoutIcon } from '../constants';

interface HeaderProps {
    onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-gray-700">
            <div className="flex items-center">
                <button onClick={onMenuClick} className="text-gray-400 focus:outline-none lg:hidden">
                    <MenuIcon className="h-6 w-6" />
                </button>
            </div>

            <div className="flex items-center">
                <button className="flex text-gray-400 focus:outline-none mx-4">
                    <BellIcon className="h-6 w-6" />
                </button>
                <div className="relative">
                    <NavLink to="/profile">
                        <img
                            className="h-9 w-9 rounded-full object-cover"
                            src="https://picsum.photos/id/237/100/100"
                            alt="Your avatar"
                        />
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
