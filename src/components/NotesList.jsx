import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Note from "./Note";

const NotesList = (prop) => {
  const type = prop.type;
  const search = prop.search;

  const {
    data: notes,
    isPending,
    error,
    setData,
  } = useFetch("http://localhost:5174/notes");
  const handleDelete = (id) => {
    const newNotes = notes.filter((note) => note.id != id);
    setData(newNotes);
    fetch("http://localhost:5174/notes/" + id, {
      method: "DELETE",
    });
  };

  useEffect(() => {}, [notes]);
  return (
    <>
      <main className="home">
        <div className="content">
          {error && <div>{error}</div>}
          {isPending && <div>Loading</div>}
          {notes &&
            notes
              .filter((note) => {
                if (search.length === 0) {
                  return note;
                } else {
                  if (note.title.includes(search)) {
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
                  return (
                    <Note
                      key={note.id}
                      note={note}
                      color="cyan"
                      handleDelete={handleDelete}
                    />
                  );
                } else if (note.type === "home") {
                  return (
                    <Note
                      key={note.id}
                      note={note}
                      color="yellow"
                      handleDelete={handleDelete}
                    />
                  );
                } else {
                  return (
                    <Note
                      key={note.id}
                      note={note}
                      color="magenta"
                      handleDelete={handleDelete}
                    />
                  );
                }
              })}
        </div>
      </main>
    </>
  );
};

export default NotesList;
