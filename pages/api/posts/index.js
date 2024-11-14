import { Post } from "../../../models";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { title, slug, content } = req.body;
        try {
            const post = await Post.create({ title, slug, content });
            return res.status(201).json(post);
        } catch (error) {
            return res.status(500).json({ error: "Failed to create post" });
        }
    } else if (req.method === "GET") {
        const posts = await Post.findAll();
        return res.status(200).json(posts);
    } else {
        res.setHeader("Allow", ["POST", "GET"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
