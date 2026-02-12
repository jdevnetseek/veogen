
import React from 'react';
import { InfoIcon, KeyIcon } from '../constants';

interface ApiKeyModalProps {
  onSelectKey: () => void;
  errorMessage?: string;
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ onSelectKey, errorMessage }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-xl shadow-2xl p-8 max-w-md w-full border border-gray-700">
        <div className="flex flex-col items-center text-center">
          <KeyIcon className="h-12 w-12 text-brand-500 mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">API Key Required</h2>
          <p className="text-gray-400 mb-6">
            To generate videos with Veo, you must select an API key from a paid Google Cloud project.
          </p>

          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 w-full text-left flex items-start space-x-3 mb-6">
            <InfoIcon className="h-5 w-5 text-brand-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-300">
              Your API key is securely handled and only used for requests during this session. For more details, see the{' '}
              <a
                href="https://ai.google.dev/gemini-api/docs/billing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-400 hover:text-brand-300 font-medium underline"
              >
                billing documentation
              </a>.
            </p>
          </div>
          
          {errorMessage && (
            <div className="bg-red-900/50 border border-red-700 text-red-300 rounded-lg p-3 w-full text-sm mb-4">
              {errorMessage}
            </div>
          )}

          <button
            onClick={onSelectKey}
            className="w-full bg-brand-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-brand-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-brand-500"
          >
            Select API Key
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyModal;
