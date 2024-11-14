import { useState } from "react";
import Editor from "../../components/Editor";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        placeholder="Slug"
      />
      <Editor content={content} setContent={setContent} />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
