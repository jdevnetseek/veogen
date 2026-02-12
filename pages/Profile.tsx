
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ProfileProps {
    onLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ onLogout }) => {
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        onLogout();
        navigate('/login');
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-8">My Profile</h1>

            <div className="bg-gray-800 rounded-xl border border-gray-700 p-8 max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8">
                    <img
                        className="h-24 w-24 rounded-full object-cover ring-4 ring-gray-700"
                        src="https://picsum.photos/id/237/200/200"
                        alt="User avatar"
                    />
                    <div className="flex-1 text-center sm:text-left">
                        <h2 className="text-2xl font-bold text-white">John Doe</h2>
                        <p className="text-brand-400">john.doe@example.com</p>
                        <p className="text-gray-400 mt-2">Creator Plan</p>
                    </div>
                </div>

                <div className="border-t border-gray-700 my-8"></div>

                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                            <input type="text" id="fullName" defaultValue="John Doe" className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-brand-500 focus:border-brand-500" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                            <input type="email" id="email" defaultValue="john.doe@example.com" className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-brand-500 focus:border-brand-500" />
                        </div>
                    </div>
                    <div className="mt-6">
                        <label htmlFor="bio" className="block text-sm font-medium text-gray-300 mb-1">Bio</label>
                        <textarea id="bio" rows={3} className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-brand-500 focus:border-brand-500" defaultValue="AI enthusiast and digital creator."></textarea>
                    </div>
                    <div className="mt-8 flex justify-end space-x-4">
                         <button
                            type="button"
                            onClick={handleLogoutClick}
                            className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                        >
                            Log Out
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;
