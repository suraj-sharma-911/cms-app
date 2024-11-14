import { Post } from "../../models";

export default async function handler(req, res) {
    const { id } = req.query;

    if (req.method === "GET") {
        const post = await Post.findByPk(id);
        return res.status(200).json(post);
    } else if (req.method === "PUT") {
        const { title, slug, content } = req.body;
        await Post.update({ title, slug, content }, { where: { id } });
        return res.status(200).json({ message: "Post updated" });
    } else if (req.method === "DELETE") {
        await Post.destroy({ where: { id } });
        return res.status(200).json({ message: "Post deleted" });
    } else {
        res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
