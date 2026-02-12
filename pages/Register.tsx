
import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from '../constants';

interface RegisterProps {
    onRegister: () => void;
}

const Register: React.FC<RegisterProps> = ({ onRegister }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onRegister();
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700">
                <div className="text-center mb-8">
                     <LogoIcon className="h-12 w-12 text-brand-500 mx-auto" />
                    <h1 className="text-3xl font-bold text-white mt-4">Create an Account</h1>
                    <p className="text-gray-400">Join VeoGen Studio today.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                     <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            className="mt-1 w-full p-3 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 w-full p-3 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password"className="block text-sm font-medium text-gray-300">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 w-full p-3 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-brand-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-brand-700 transition-colors duration-300"
                    >
                       Create Account
                    </button>
                </form>
                <p className="text-center text-gray-400 text-sm mt-6">
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium text-brand-400 hover:text-brand-300">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
