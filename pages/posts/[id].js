// pages/posts/[id].js
import { useState, useEffect } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import axios from 'axios';

export default function PostEditor({ id }) {
    const [title, setTitle] = useState('');
    const editor = useEditor({
        extensions: [StarterKit],
        content: '',
    });

    useEffect(() => {
        if (id) {
            // Fetch existing post data
            axios.get(`/api/posts/${id}`).then((response) => {
                const { title, content } = response.data;
                setTitle(title);
                editor.commands.setContent(content);
            });
        }
    }, [id, editor]);

    const savePost = async () => {
        const content = editor.getHTML();
        const postData = { title, content };
        if (id) {
            await axios.put(`/api/posts/${id}`, postData);
        } else {
            await axios.post(`/api/posts`, postData);
        }
    };

    return (
        <div className="p-4">
            <input
                type="text"
                placeholder="Post Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <div className="mb-4">
                <EditorContent editor={editor} />
            </div>
            <button
                onClick={savePost}
                className="px-6 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
            >
                Save Post
            </button>
        </div>
    );
}

PostEditor.getInitialProps = async ({ query }) => {
    return { id: query.id || null };
};
