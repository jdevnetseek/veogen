
import React from 'react';
import { PlayIcon, DownloadIcon } from '../constants';

const mockMedia = [
    { id: 1, type: 'video', user: 'You', prompt: 'A cinematic shot of a raccoon astronaut on Mars, detailed, 8k', thumbnail: 'https://picsum.photos/seed/media1/400/225' },
    { id: 2, type: 'image', user: 'You', prompt: 'A surrealist painting of a clock melting on a tree branch', thumbnail: 'https://picsum.photos/seed/media2/400/400' },
    { id: 3, type: 'image', user: 'You', prompt: 'Photorealistic image of a cat wearing glasses reading a book', thumbnail: 'https://picsum.photos/seed/media3/400/400' },
    { id: 4, type: 'video', user: 'You', prompt: 'An eagle soaring through a stormy sky, dramatic lighting', thumbnail: 'https://picsum.photos/seed/media4/400/225' },
    { id: 5, type: 'video', user: 'You', prompt: 'Underwater city with glowing bioluminescent structures', thumbnail: 'https://picsum.photos/seed/media5/400/225' },
    { id: 6, type: 'image', user: 'You', prompt: 'A tranquil Japanese garden with a koi pond in autumn', thumbnail: 'https://picsum.photos/seed/media6/400/400' },
    { id: 7, type: 'image', user: 'You', prompt: 'A futuristic sports car speeding down a neon-lit highway', thumbnail: 'https://picsum.photos/seed/media7/400/400' },
    { id: 8, type: 'video', user: 'You', prompt: 'A time-lapse of the northern lights over a snowy landscape', thumbnail: 'https://picsum.photos/seed/media8/400/225' },
];

const MediaCard: React.FC<typeof mockMedia[0]> = ({ type, prompt, thumbnail }) => (
    <div className="bg-gray-800 rounded-xl overflow-hidden group border border-gray-700 hover:border-brand-500 transition-all duration-300 flex flex-col">
        <div className="relative">
            <img 
                src={thumbnail} 
                alt={prompt} 
                className={`w-full object-cover ${type === 'video' ? 'aspect-video' : 'aspect-square'}`} 
            />
            {type === 'video' && (
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <PlayIcon className="h-12 w-12 text-white" />
                </div>
            )}
        </div>
        <div className="p-4 flex flex-col flex-grow">
            <p className="text-gray-300 text-sm flex-grow" title={prompt}>{prompt}</p>
            <button className="mt-3 w-full bg-gray-700 text-white font-semibold py-2 px-3 rounded-lg hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 focus:opacity-100">
                <DownloadIcon className="h-4 w-4 mr-2" />
                Download
            </button>
        </div>
    </div>
);

const Gallery: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-2">Media Gallery</h1>
            <p className="text-gray-400 mb-8">A collection of your generated videos and images.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {mockMedia.map(item => (
                    <MediaCard key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
