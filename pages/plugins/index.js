// pages/plugins/index.js

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Plugins() {
    const [plugins, setPlugins] = useState([]);

    useEffect(() => {
        // Fetch plugins on load
        async function fetchPlugins() {
            const response = await axios.get('/api/plugins');
            setPlugins(response.data);
        }
        fetchPlugins();
    }, []);

    // Handle plugin activation/deactivation
    const togglePluginStatus = async (id, currentStatus) => {
        const endpoint = currentStatus ? `/api/plugins/${id}/deactivate` : `/api/plugins/${id}/activate`;
        await axios.put(endpoint);
        setPlugins(plugins.map((plugin) =>
            plugin.id === id ? { ...plugin, active: !currentStatus } : plugin
        ));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Plugins</h1>
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th className="border-b p-2">Name</th>
                        <th className="border-b p-2">Status</th>
                        <th className="border-b p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {plugins.map((plugin) => (
                        <tr key={plugin.id}>
                            <td className="border-b p-2">{plugin.name}</td>
                            <td className="border-b p-2">{plugin.active ? 'Active' : 'Inactive'}</td>
                            <td className="border-b p-2">
                                <button
                                    className={`px-4 py-2 rounded ${plugin.active ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
                                        }`}
                                    onClick={() => togglePluginStatus(plugin.id, plugin.active)}
                                >
                                    {plugin.active ? 'Deactivate' : 'Activate'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
