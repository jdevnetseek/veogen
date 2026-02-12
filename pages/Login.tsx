
import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from '../constants';

interface LoginProps {
    onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLogin();
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700">
                <div className="text-center mb-8">
                    <LogoIcon className="h-12 w-12 text-brand-500 mx-auto" />
                    <h1 className="text-3xl font-bold text-white mt-4">Welcome Back</h1>
                    <p className="text-gray-400">Sign in to continue to VeoGen Studio.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            defaultValue="john.doe@example.com"
                            className="mt-1 w-full p-3 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password"className="block text-sm font-medium text-gray-300">Password</label>
                        <input
                            type="password"
                            id="password"
                            defaultValue="password"
                            className="mt-1 w-full p-3 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-brand-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-brand-700 transition-colors duration-300"
                    >
                        Sign In
                    </button>
                </form>
                <p className="text-center text-gray-400 text-sm mt-6">
                    Don't have an account?{' '}
                    <Link to="/register" className="font-medium text-brand-400 hover:text-brand-300">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
