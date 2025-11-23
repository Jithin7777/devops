import { useState } from 'react';

interface NoteFormProps {
  addNote: (title: string, content: string) => void;
}

export default function NoteForm({ addNote }: NoteFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    addNote(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 mb-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        placeholder="Write your note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-3 h-24 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="mt-4 w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-black-700 transition"
      >
        Add Note 
      </button>
    </form>
  );
}
