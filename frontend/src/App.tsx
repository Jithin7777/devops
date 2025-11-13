import { useEffect, useState } from "react";
import axios from "axios";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

interface Note {
  _id: string;
  title: string;
  content: string;
}

const API_URL = "http://localhost:5000/api/notes";

export default function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const fetchNotes = async () => {
    const res = await axios.get(API_URL);
    setNotes(res.data);
  };

  const addNote = async (title: string, content: string) => {
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
    <div style={{ width: "500px", margin: "auto", marginTop: "50px" }}>
      <h1>🗒️ Notes App</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}
