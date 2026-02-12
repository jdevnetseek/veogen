
import React from 'react';

const Settings: React.FC = () => {
    const handleManageApiKey = () => {
        // This would typically open a modal or navigate to a secure page
        // For Veo, the key selection is handled on the generation page itself.
        // This button is for demonstration of a more general settings page.
        if(window.aistudio && typeof window.aistudio.openSelectKey === 'function') {
            window.aistudio.openSelectKey();
        } else {
            alert("API key management is configured for the AI Studio environment.");
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-8">Settings</h1>

            <div className="space-y-12">
                {/* API Settings Section */}
                <div className="bg-gray-800 rounded-xl border border-gray-700">
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-white">API Settings</h2>
                        <p className="mt-1 text-sm text-gray-400">Manage your API keys and integration settings.</p>
                    </div>
                    <div className="border-t border-gray-700 p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-medium text-white">Veo API Key</h3>
                                <p className="text-sm text-gray-400">An API key from a paid GCP project is required for video generation.</p>
                            </div>
                            <button
                                onClick={handleManageApiKey}
                                className="px-4 py-2 bg-brand-600 text-white text-sm font-semibold rounded-lg hover:bg-brand-700 transition-colors"
                            >
                                Change API Key
                            </button>
                        </div>
                    </div>
                </div>

                {/* Notification Settings Section */}
                <div className="bg-gray-800 rounded-xl border border-gray-700">
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-white">Notifications</h2>
                        <p className="mt-1 text-sm text-gray-400">Control how you receive notifications from the platform.</p>
                    </div>
                    <div className="border-t border-gray-700 p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-white">Email Notifications</span>
                            {/* Toggle switch would go here */}
                             <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                <input type="checkbox" name="toggle" id="toggle1" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                                <label htmlFor="toggle1" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-600 cursor-pointer"></label>
                            </div>
                        </div>
                         <div className="flex items-center justify-between">
                            <span className="text-white">Push Notifications</span>
                             <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                <input type="checkbox" name="toggle" id="toggle2" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" defaultChecked/>
                                <label htmlFor="toggle2" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-600 cursor-pointer"></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .toggle-checkbox:checked { right: 0; border-color: #2563eb; }
                .toggle-checkbox:checked + .toggle-label { background-color: #2563eb; }
            `}</style>
        </div>
    );
};

export default Settings;
