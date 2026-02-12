
import React from 'react';
import { PlayIcon } from '../constants';

const mockVideos = [
    { id: 1, user: 'Alex Morgan', avatar: 'https://picsum.photos/id/1011/100/100', prompt: 'A futuristic city skyline at dusk, neon lights reflecting on wet streets.', thumbnail: 'https://picsum.photos/seed/vid1/400/225' },
    { id: 2, user: 'Samantha Bee', avatar: 'https://picsum.photos/id/1012/100/100', prompt: 'An enchanted forest with glowing mushrooms and mystical creatures.', thumbnail: 'https://picsum.photos/seed/vid2/400/225' },
    { id: 3, user: 'John Doe', avatar: 'https://picsum.photos/id/1013/100/100', prompt: 'A dog surfing a massive wave, hyperrealistic.', thumbnail: 'https://picsum.photos/seed/vid3/400/225' },
    { id: 4, user: 'Jane Smith', avatar: 'https://picsum.photos/id/1014/100/100', prompt: 'Time-lapse of a flower blooming in a surreal, alien landscape.', thumbnail: 'https://picsum.photos/seed/vid4/400/225' },
    { id: 5, user: 'Michael Chen', avatar: 'https://picsum.photos/id/1015/100/100', prompt: 'Steampunk-style airship race through canyons.', thumbnail: 'https://picsum.photos/seed/vid5/400/225' },
    { id: 6, user: 'Emily White', avatar: 'https://picsum.photos/id/1016/100/100', prompt: 'A quiet, cozy library in a rainstorm, with a cat sleeping by the fireplace.', thumbnail: 'https://picsum.photos/seed/vid6/400/225' },
];

const VideoCard: React.FC<typeof mockVideos[0]> = ({ user, avatar, prompt, thumbnail }) => (
    <div className="bg-gray-800 rounded-xl overflow-hidden group border border-gray-700 hover:border-brand-500 transition-all duration-300">
        <div className="relative">
            <img src={thumbnail} alt={prompt} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <PlayIcon className="h-12 w-12 text-white" />
            </div>
        </div>
        <div className="p-4">
            <p className="text-gray-300 text-sm truncate" title={prompt}>{prompt}</p>
            <div className="flex items-center mt-3">
                <img src={avatar} alt={user} className="h-8 w-8 rounded-full object-cover" />
                <span className="ml-2 text-sm font-medium text-gray-400">{user}</span>
            </div>
        </div>
    </div>
);

const Videos: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-2">Community Showcase</h1>
            <p className="text-gray-400 mb-8">Explore creations from the VeoGen community.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockVideos.map(video => (
                    <VideoCard key={video.id} {...video} />
                ))}
            </div>
        </div>
    );
};

export default Videos;
