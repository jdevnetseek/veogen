
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS, LogoIcon, CloseIcon } from '../constants';

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
    const navLinkClasses = "flex items-center px-4 py-2.5 text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-200";
    const activeNavLinkClasses = "bg-brand-600 text-white";

    return (
        <>
            {/* Overlay for mobile */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden ${isOpen ? 'block' : 'hidden'}`}
                onClick={() => setIsOpen(false)}
            ></div>

            <aside
                className={`fixed inset-y-0 left-0 bg-gray-900 border-r border-gray-700 w-64 px-4 py-7 z-30 transform transition-transform duration-300 lg:relative lg:translate-x-0 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex items-center justify-between px-2">
                    <div className="flex items-center space-x-2">
                        <LogoIcon className="h-8 w-8 text-brand-500" />
                        <span className="text-2xl font-bold text-white">VeoGen</span>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="lg:hidden text-gray-400 hover:text-white">
                        <CloseIcon className="h-6 w-6" />
                    </button>
                </div>

                <nav className="mt-10">
                    {NAV_LINKS.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`
                            }
                        >
                            {link.icon}
                            <span className="ml-3">{link.name}</span>
                        </NavLink>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
