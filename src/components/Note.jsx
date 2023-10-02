import { Link } from "react-router-dom";

const Note = (prop) => {
  const note = prop.note;
  const color = prop.color;
  const handleDelete = prop.handleDelete;

  return (
    <>
      <article className="note">
        <div className="topSingle">
          <div className="left">
            <p id="type" style={{ backgroundColor: `${color}` }}>
              {note.type}
            </p>
          </div>
          <div className="right">
            <img
              src="../trash.svg"
              alt="trash"
              className="trashIcon"
              width={"20px"}
              height={"20px"}
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleDelete(note.id);
              }}
            />
          </div>
        </div>
        <Link to={`/notes/${note.id}`} style={{height: "100%"}}>
          <div className="middleSingle">
            <p className="title">{note.title}</p>
            <p className="body">{note.body.substring(0, 200)}...</p>
          </div>
        </Link>
      </article>
    </>
  );
};

export default Note;
