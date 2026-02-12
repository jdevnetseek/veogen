
import React from 'react';

const mockUsers = [
    { id: 1, name: 'Alex Morgan', email: 'alex.morgan@example.com', role: 'Admin', status: 'Active', avatar: 'https://picsum.photos/id/1011/100/100' },
    { id: 2, name: 'Samantha Bee', email: 'samantha.bee@example.com', role: 'Creator', status: 'Active', avatar: 'https://picsum.photos/id/1012/100/100' },
    { id: 3, name: 'John Doe', email: 'john.doe@example.com', role: 'Creator', status: 'Active', avatar: 'https://picsum.photos/id/1013/100/100' },
    { id: 4, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Viewer', status: 'Inactive', avatar: 'https://picsum.photos/id/1014/100/100' },
    { id: 5, name: 'Michael Chen', email: 'michael.chen@example.com', role: 'Creator', status: 'Active', avatar: 'https://picsum.photos/id/1015/100/100' },
    { id: 6, name: 'Emily White', email: 'emily.white@example.com', role: 'Creator', status: 'Active', avatar: 'https://picsum.photos/id/1016/100/100' },
];

const Users: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-2">User Management</h1>
            <p className="text-gray-400 mb-8">View and manage all users in the system.</p>

            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Role</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        {mockUsers.map(user => (
                            <tr key={user.id} className="hover:bg-gray-700/50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <img className="h-10 w-10 rounded-full" src={user.avatar} alt="" />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-white">{user.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === 'Active' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{user.role}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <a href="#" className="text-brand-400 hover:text-brand-300">Edit</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
