import { useEffect, useState } from 'react';
import axios from 'axios';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

interface Note {
  _id: string;
  title: string;
  content: string;
}

const API_URL = import.meta.env.VITE_API_URL
export default function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const fetchNotes = async () => {
    const res = await axios.get(API_URL);
    setNotes(res.data);
  };

  const addNote = async (title: string, content: string, id?: string) => {
    await axios.post(API_URL, { title, content });
    fetchNotes();
  };

  const deleteNote = async (id: string) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchNotes();
  };

  // ✅ Proper way to fetch data once on mount
  useEffect(() => {
    const loadNotes = async () => {
      await fetchNotes();
    };
    loadNotes();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  px-4">
      <h1 className="text-3xl font-bold mb-6"> Notes App</h1>

      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        <NoteForm addNote={addNote} />
        <NoteList notes={notes} deleteNote={deleteNote} />
      </div>
    </div>
  );
}
