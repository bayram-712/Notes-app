import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import SingleNote from "./components/SingleNote";
import Create from "./components/Create";

import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getNotes } from "./features/note/noteSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <NotesList />
              </>
            }
          />
          <Route path="/notes/:id" element={<SingleNote />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
