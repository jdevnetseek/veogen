
import React, { useState } from 'react';

const Settings: React.FC = () => {
    const [openAIApiKey, setOpenAIApiKey] = useState('');
    const [saveStatus, setSaveStatus] = useState('');

    const handleManageApiKey = () => {
        if(window.aistudio && typeof window.aistudio.openSelectKey === 'function') {
            window.aistudio.openSelectKey();
        } else {
            alert("API key management is configured for the AI Studio environment.");
        }
    };
    
    const handleSaveOpenAIKey = (e: React.FormEvent) => {
        e.preventDefault();
        if (openAIApiKey.trim()) {
            localStorage.setItem('openai_api_key', openAIApiKey);
            setSaveStatus('API Key saved successfully!');
            setOpenAIApiKey(''); // Clear field after saving
            setTimeout(() => setSaveStatus(''), 3000);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-8">Settings</h1>

            <div className="space-y-12">
                {/* API Settings Section */}
                <div className="bg-gray-800 rounded-xl border border-gray-700">
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-white">Gemini API Settings</h2>
                        <p className="mt-1 text-sm text-gray-400">Manage your Gemini API key for video generation.</p>
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

                {/* OpenAI API Settings Section */}
                <div className="bg-gray-800 rounded-xl border border-gray-700">
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-white">OpenAI API Settings</h2>
                        <p className="mt-1 text-sm text-gray-400">Manage your OpenAI API key for DALL-E image generation.</p>
                    </div>
                    <div className="border-t border-gray-700 p-6">
                        <form onSubmit={handleSaveOpenAIKey} className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                            <div className="flex-grow">
                                <h3 className="font-medium text-white">OpenAI API Key</h3>
                                <p className="text-sm text-gray-400 max-w-md mt-1">Your key is stored locally in your browser and never sent to our servers.</p>
                            </div>
                            <div className="w-full sm:w-auto mt-4 sm:mt-0 flex space-x-2">
                                <input
                                    type="password"
                                    value={openAIApiKey}
                                    onChange={(e) => setOpenAIApiKey(e.target.value)}
                                    placeholder="sk-..."
                                    className="flex-grow p-2 bg-gray-900 rounded-md border border-gray-600 focus:ring-brand-500 focus:border-brand-500 w-full"
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-brand-600 text-white text-sm font-semibold rounded-lg hover:bg-brand-700 transition-colors"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                        {saveStatus && <p className="text-green-400 text-sm mt-4">{saveStatus}</p>}
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
