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
    <div className="w-full">
      {notes.map((note) => (
        <div
          key={note._id}
          className="border border-gray-200 rounded-lg p-4 mb-4 shadow-sm bg-gray-50"
        >
          <h3 className="text-lg font-semibold">{note.title}</h3>
          <p className="text-gray-700 mt-1">{note.content}</p>

          <button
            onClick={() => deleteNote(note._id)}
            className="mt-3 text-red-600 hover:text-red-800 font-medium"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
