import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postNotes } from "../features/note/noteSlice";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();
  const note = { title, body, type };
  const dispatch = useDispatch();
  const handlePost = (e) => {
    e.preventDefault();
    dispatch(postNotes(note));
    setTitle("");
    setBody("");
    setType("");
  };

  return (
    <>
      <main className="single">
        <article className="noteSingle">
          <div className="image">
            <Link to={"/"}>
              <img src="../home.svg" alt="home" width="20px" height={"20px"} />
            </Link>
            <img
              src="../trash.svg"
              alt="trash"
              className="trashIcon"
              width={"20px"}
              height={"20px"}
              style={{ cursor: "pointer" }}
              onClick={() => {
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
              onClick={(e) => {
                handlePost(e);
                navigate("/");
              }}
            />
          </div>
          <label htmlFor="title">Note title : </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label htmlFor="type">Note type : </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            id="type"
          >
            <option value="">Select one of three</option>
            <option value="personal">Personal</option>
            <option value="home">Home</option>
            <option value="business">Business</option>
          </select>
          <label htmlFor="noteBody">Note body : </label>
          <textarea
            name="noteBody"
            id="noteBody"
            cols="30"
            rows="10"
            value={body}
            required
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
        </article>
      </main>
    </>
  );
};

export default Create;
