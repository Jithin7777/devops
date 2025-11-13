import { useState } from "react";

interface NoteFormProps {
  addNote: (title: string, content: string) => void;
}

export default function NoteForm({ addNote }: NoteFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    addNote(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
      />
      <textarea
        placeholder="Write your note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ padding: "10px", width: "100%", height: "80px" }}
      />
      <button type="submit" style={{ marginTop: "10px", padding: "10px 15px" }}>
        Add Note
      </button>
    </form>
  );
}
