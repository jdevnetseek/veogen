
import React, { useState, useCallback } from 'react';
import { HashRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Generate from './pages/Generate';
import Videos from './pages/Videos';
import Users from './pages/Users';
import Reports from './pages/Reports';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

const MainLayout: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className="flex h-screen bg-gray-900 text-gray-100">
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header onMenuClick={() => setIsSidebarOpen(true)} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900">
                    <div className="container mx-auto px-6 py-8">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};


const App: React.FC = () => {
    // In a real app, this would be determined by a token, context, etc.
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = useCallback(() => {
        setIsAuthenticated(true);
    }, []);

    const handleLogout = useCallback(() => {
        setIsAuthenticated(false);
    }, []);


    return (
        <HashRouter>
            <Routes>
                {isAuthenticated ? (
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Navigate to="/generate" replace />} />
                        <Route path="/generate" element={<Generate />} />
                        <Route path="/videos" element={<Videos />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/reports" element={<Reports />} />
                        <Route path="/profile" element={<Profile onLogout={handleLogout} />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="*" element={<Navigate to="/generate" replace />} />
                    </Route>
                ) : (
                    <>
                        <Route path="/login" element={<Login onLogin={handleLogin} />} />
                        <Route path="/register" element={<Register onRegister={handleLogin} />} />
                        <Route path="*" element={<Navigate to="/login" replace />} />
                    </>
                )}
            </Routes>
        </HashRouter>
    );
};

export default App;
