interface Note {
  _id: string;
  title: string;
  content: string;
}

interface NoteListProps {
  notes: Note[];
  deleteNote: (id: string) => void;
}

export default function NoteList({ notes, deleteNote }: NoteListProps) {
  return (
    <div>
      {notes.map((note) => (
        <div
          key={note._id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button
            onClick={() => deleteNote(note._id)}
            style={{ color: "red", border: "none", background: "transparent" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
