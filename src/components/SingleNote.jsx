import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteNotes, putNotes } from "../features/note/noteSlice";
import { useState } from "react";

const SingleNote = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const note = useSelector((store) =>
    store.note.notes.find((item) => {
      return item.id === parseInt(id);
    })
  );
  const [body, setBody] = useState("");
  const handlePut = () => {
    dispatch(putNotes({ ...note, body: body }));
  };
  const handleDelete = () => {
    dispatch(deleteNotes(id));
  };
  return (
    <>
      <main className="single">
        {note && (
          <article className="noteSingle">
            <div className="image">
              <Link to={"/"}>
                <img
                  src="../home.svg"
                  alt="home"
                  width="20px"
                  height={"20px"}
                />
              </Link>
              <img
                src="../trash.svg"
                alt="trash"
                className="trashIcon"
                width={"20px"}
                height={"20px"}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleDelete();
                  navigate("/");
                }}
              />
              <img
                src="../save.svg"
                alt="save"
                className="saveIcon"
                width={"20px"}
                height={"20px"}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handlePut();
                  navigate("/");
                }}
              />
            </div>
            <h2>{note.title}</h2>
            <textarea
              name="noteBody"
              id="noteBody"
              cols="30"
              rows="10"
              defaultValue={note.body}
              onChange={(e) => {
                setBody(e.target.value);
              }}
            ></textarea>
          </article>
        )}
      </main>
    </>
  );
};

export default SingleNote;
