
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { VideoIcon, ImageIcon, UserGroupIcon, ClockIcon } from '../constants';

const videoData = [
    { name: 'Jan', videos: 40, images: 24 },
    { name: 'Feb', videos: 30, images: 13 },
    { name: 'Mar', videos: 50, images: 98 },
    { name: 'Apr', videos: 47, images: 39 },
    { name: 'May', videos: 59, images: 48 },
    { name: 'Jun', videos: 44, images: 38 },
];

const userData = [
    { name: 'Jan', users: 120 },
    { name: 'Feb', users: 150 },
    { name: 'Mar', users: 190 },
    { name: 'Apr', users: 230 },
    { name: 'May', users: 280 },
    { name: 'Jun', users: 320 },
];

const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex items-center">
        <div className="bg-gray-700 p-3 rounded-full mr-4">
            {icon}
        </div>
        <div>
            <p className="text-sm text-gray-400">{title}</p>
            <p className="text-2xl font-bold text-white">{value}</p>
        </div>
    </div>
);


const Reports: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-2">Data Reports</h1>
            <p className="text-gray-400 mb-8">Analytics and insights on platform usage.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard title="Total Videos Generated" value="1,245" icon={<VideoIcon className="h-6 w-6 text-brand-400"/>} />
                <StatCard title="Total Images Generated" value="8,721" icon={<ImageIcon className="h-6 w-6 text-brand-400"/>} />
                <StatCard title="Active Users" value="320" icon={<UserGroupIcon className="h-6 w-6 text-brand-400"/>} />
                <StatCard title="Avg. Generation Time" value="2.3 min" icon={<ClockIcon className="h-6 w-6 text-brand-400"/>} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <h2 className="text-xl font-semibold text-white mb-4">Content Generation Trends</h2>
                     <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={videoData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                            <XAxis dataKey="name" stroke="#9CA3AF" />
                            <YAxis stroke="#9CA3AF" />
                            <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
                            <Legend />
                            <Bar dataKey="videos" fill="#3b82f6" name="Videos" />
                            <Bar dataKey="images" fill="#60a5fa" name="Images" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <h2 className="text-xl font-semibold text-white mb-4">User Growth</h2>
                     <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={userData}>
                           <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                            <XAxis dataKey="name" stroke="#9CA3AF" />
                            <YAxis stroke="#9CA3AF" />
                            <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
                            <Legend />
                            <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} name="Active Users" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Reports;
