import { useSelector } from "react-redux";

import Note from "./Note";

const NotesList = () => {
  const { notes, type, search } = useSelector((store) => store.note);

  return (
    <>
      <main className="home">
        <div className="content">
          {notes ? (
            notes
              .filter((note) => {
                if (search.length === 0) {
                  return note;
                } else {
                  if (note.title.substring().toLowerCase().includes(search)) {
                    return note;
                  }
                }
              })
              .filter((initialNote) => {
                if (type === "all") {
                  return initialNote;
                } else {
                  return initialNote && initialNote.type === type;
                }
              })
              .map((note) => {
                if (note.type === "personal") {
                  return <Note key={note.id} note={note} color="cyan" />;
                } else if (note.type === "home") {
                  return <Note key={note.id} note={note} color="yellow" />;
                } else {
                  return <Note key={note.id} note={note} color="magenta" />;
                }
              })
          ) : (
            <p>Failed to load</p>
          )}
        </div>
      </main>
    </>
  );
};

export default NotesList;
