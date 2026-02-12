import React, { useState, useEffect, useCallback } from 'react';
import { GoogleGenAI } from '@google/genai';
import { generateVideo, generateImage } from '../services/geminiService';
import ApiKeyModal from '../components/ApiKeyModal';
import Spinner from '../components/Spinner';
import { VideoIcon, ImageIcon, DownloadIcon } from '../constants';

type GenerationMode = 'video' | 'image';

// Fix: Resolved TypeScript error for 'aistudio' declaration.
// This defines or merges with the global `AIStudio` interface to ensure
// `window.aistudio` has a consistent and correct type across declarations.
declare global {
    interface AIStudio {
        hasSelectedApiKey: () => Promise<boolean>;
        openSelectKey: () => Promise<void>;
    }
    interface Window {
        // FIX: Made 'aistudio' optional to resolve declaration errors and match its usage.
        aistudio?: AIStudio;
    }
}
const loadingMessages = [
    "Warming up the AI artists...",
    "This may take a few minutes...",
    "Composing digital scenes...",
    "Rendering pixel by pixel...",
    "Applying cinematic magic...",
    "Finalizing your masterpiece...",
];


const Generate: React.FC = () => {
    const [mode, setMode] = useState<GenerationMode>('video');
    const [prompt, setPrompt] = useState('');
    const [aspectRatio, setAspectRatio] = useState('16:9');
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [needsApiKey, setNeedsApiKey] = useState(false);
    const [apiKeyError, setApiKeyError] = useState<string | undefined>();
    const [loadingMessage, setLoadingMessage] = useState(loadingMessages[0]);


    const checkApiKey = useCallback(async () => {
        if (typeof window.aistudio?.hasSelectedApiKey === 'function') {
            const hasKey = await window.aistudio.hasSelectedApiKey();
            setNeedsApiKey(!hasKey);
            return hasKey;
        }
        // Fallback for environments where aistudio is not available
        if (!process.env.API_KEY) {
            setNeedsApiKey(true);
            return false;
        }
        return true;
    }, []);

    useEffect(() => {
        if (mode === 'video') {
            checkApiKey();
        } else {
            setNeedsApiKey(false); // Assume image generation doesn't need special key flow
        }
    }, [mode, checkApiKey]);

    useEffect(() => {
        let interval: number;
        if (isGenerating && mode === 'video') {
            interval = window.setInterval(() => {
                setLoadingMessage(prev => {
                    const currentIndex = loadingMessages.indexOf(prev);
                    const nextIndex = (currentIndex + 1) % loadingMessages.length;
                    return loadingMessages[nextIndex];
                });
            }, 3000);
        }
        return () => window.clearInterval(interval);
    }, [isGenerating, mode]);


    const handleSelectKey = async () => {
        // FIX: Added a guard to ensure 'window.aistudio' exists before use.
        if (!window.aistudio) {
            setApiKeyError("API key selection is not available in this environment.");
            return;
        }
        try {
            await window.aistudio.openSelectKey();
            // Assume success and hide modal immediately for better UX
            setNeedsApiKey(false);
            setApiKeyError(undefined);
        } catch (e) {
            console.error("Error opening API key selection:", e);
            setApiKeyError("Failed to open the API key selection dialog.");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt.trim()) {
            setError('Please enter a prompt.');
            return;
        }

        if (mode === 'video') {
            const hasKey = await checkApiKey();
            if (!hasKey) return;
        }

        setIsGenerating(true);
        setGeneratedUrl(null);
        setError(null);
        setApiKeyError(undefined);
        if (mode === 'video') setLoadingMessage(loadingMessages[0]);


        try {
            let url: string;
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

            if (mode === 'video') {
                url = await generateVideo(ai, prompt, { aspectRatio });
            } else {
                url = await generateImage(ai, prompt);
            }
            setGeneratedUrl(url);
        } catch (err: any) {
            const errorMessage = err.message || 'An unknown error occurred.';
            console.error('Generation failed:', errorMessage);
            setError(errorMessage);

            if (errorMessage.includes('Requested entity was not found')) {
                setApiKeyError('Your API key is invalid or not found. Please select a valid key.');
                setNeedsApiKey(true);
            }
        } finally {
            setIsGenerating(false);
        }
    };

    const renderTabs = () => (
        <div className="flex border-b border-gray-700 mb-6">
            <button
                onClick={() => setMode('video')}
                className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-colors duration-200 ${mode === 'video' ? 'text-brand-400 border-b-2 border-brand-400' : 'text-gray-400 hover:text-white'}`}
            >
                <VideoIcon className="h-5 w-5" />
                <span>Video Generation</span>
            </button>
            <button
                onClick={() => setMode('image')}
                className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-colors duration-200 ${mode === 'image' ? 'text-brand-400 border-b-2 border-brand-400' : 'text-gray-400 hover:text-white'}`}
            >
                <ImageIcon className="h-5 w-5" />
                <span>Image Generation</span>
            </button>
        </div>
    );

    const renderResult = () => (
        <div className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
            <div className="bg-gray-800 rounded-xl p-4 aspect-video flex items-center justify-center border border-gray-700">
                {isGenerating ? (
                    <div className="text-center">
                        <Spinner className="w-12 h-12 mx-auto text-brand-500" />
                        <p className="mt-4 text-gray-300">{loadingMessage}</p>
                    </div>
                ) : generatedUrl ? (
                    <>
                        {mode === 'video' ? (
                            <video src={generatedUrl} controls autoPlay className="max-w-full max-h-full rounded-lg" />
                        ) : (
                            <img src={generatedUrl} alt="Generated" className="max-w-full max-h-full rounded-lg object-contain" />
                        )}
                    </>
                ) : (
                    <div className="text-center text-gray-500">
                        <div className="bg-gray-700 rounded-full p-4 inline-block">
                            {mode === 'video' ? <VideoIcon className="h-10 w-10"/> : <ImageIcon className="h-10 w-10"/>}
                        </div>
                        <p className="mt-4">Your generated {mode} will appear here.</p>
                    </div>
                )}
            </div>
             {generatedUrl && !isGenerating && (
                <a
                    href={generatedUrl}
                    download={`generation-${mode}-${Date.now()}.${mode === 'video' ? 'mp4' : 'png'}`}
                    className="mt-4 w-full bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center"
                >
                    <DownloadIcon className="h-5 w-5 mr-2" />
                    Download {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </a>
            )}
        </div>
    );
    

    return (
        <>
            {needsApiKey && mode === 'video' && <ApiKeyModal onSelectKey={handleSelectKey} errorMessage={apiKeyError} />}
            <h1 className="text-3xl font-bold text-white mb-2">Create Something New</h1>
            <p className="text-gray-400 mb-8">Use the power of Gemini to bring your ideas to life.</p>
            
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2">
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                        {renderTabs()}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="prompt" className="block text-gray-300 font-medium mb-2">Prompt</label>
                                <textarea
                                    id="prompt"
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder={mode === 'video' ? "e.g., A cinematic shot of a raccoon astronaut on Mars" : "e.g., A surrealist painting of a clock melting on a tree"}
                                    className="w-full h-32 p-3 bg-gray-900 rounded-md border border-gray-600 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
                                    disabled={isGenerating}
                                />
                            </div>

                            {mode === 'video' && (
                                <div className="mb-6">
                                    <label className="block text-gray-300 font-medium mb-2">Aspect Ratio</label>
                                    <div className="flex space-x-2">
                                        {['16:9', '9:16', '1:1'].map(ratio => (
                                            <button
                                                key={ratio}
                                                type="button"
                                                onClick={() => setAspectRatio(ratio)}
                                                disabled={isGenerating}
                                                className={`px-4 py-2 rounded-md text-sm font-medium transition ${aspectRatio === ratio ? 'bg-brand-600 text-white' : 'bg-gray-700 hover:bg-gray-600'}`}
                                            >
                                                {ratio}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

                            <button
                                type="submit"
                                disabled={isGenerating || (mode === 'video' && needsApiKey)}
                                className="w-full bg-brand-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-brand-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center"
                            >
                                {isGenerating ? <Spinner /> : `Generate ${mode.charAt(0).toUpperCase() + mode.slice(1)}`}
                            </button>
                        </form>
                    </div>
                </div>

                {renderResult()}
            </div>
        </>
    );
};

export default Generate;