import { useNavigate, useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { useState } from "react";

const SingleNote = () => {
  const { id } = useParams();
  const {
    data: note,
    isPending,
    error,
  } = useFetch("http://localhost:5174/notes/" + id);
  const [val, setVal] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <main className="single">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
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
                  fetch("http://localhost:5174/notes/" + id, {
                    method: "DELETE",
                  }).then(() => {
                    navigate("/");
                  });
                }}
              />
              <img
                src="../save.svg"
                alt="trash"
                className="trashIcon"
                width={"20px"}
                height={"20px"}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  fetch("http://localhost:5174/notes/" + id, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      title: note.title,
                      body: val,
                      type: note.type,
                      id: note.id,
                    }),
                  });
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
                setVal(e.target.value);
              }}
            ></textarea>
          </article>
        )}
      </main>
    </>
  );
};

export default SingleNote;
