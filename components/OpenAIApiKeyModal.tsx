
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { KeyIcon, CloseIcon } from '../constants';

interface OpenAIApiKeyModalProps {
  onClose: () => void;
}

const OpenAIApiKeyModal: React.FC<OpenAIApiKeyModalProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const goToSettings = () => {
    onClose();
    navigate('/settings');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative bg-gray-800 rounded-xl shadow-2xl p-8 max-w-md w-full border border-gray-700">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
            <CloseIcon className="h-6 w-6" />
        </button>
        <div className="flex flex-col items-center text-center">
          <KeyIcon className="h-12 w-12 text-brand-500 mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">OpenAI API Key Required</h2>
          <p className="text-gray-400 mb-6">
            Please set your OpenAI API key in the settings page to use this feature.
          </p>

          <button
            onClick={goToSettings}
            className="w-full bg-brand-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-brand-700 transition-colors duration-300"
          >
            Go to Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpenAIApiKeyModal;
