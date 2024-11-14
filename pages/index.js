// pages/index.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import data from '../data';

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            // const response = await axios.get('/api/posts');
            // setPosts(response.data);

            const response = data.data.posts;
            setPosts(response);


        }
        fetchPosts();
    }, []);

    return (
        <div className="p-4">
            <Link href="/posts/new" passHref className="inline-block bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 mb-4">
                Create New Post
            </Link>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100 border-b border-gray-200">
                            <th className="text-left py-3 px-4 font-semibold text-gray-700">Title</th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id} className="border-b border-gray-200">
                                <td className="py-3 px-4">{post.title}</td>
                                <td className="py-3 px-4">
                                    <Link href={`/posts/${post.id}`} passHref className="inline-block bg-blue-500 text-white py-1 px-3 rounded mr-2 hover:bg-blue-600">
                                        Edit
                                    </Link>
                                    <button className="inline-block bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
