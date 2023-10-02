import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotesList from "./components/NotesList";
import { useState } from "react";
import SingleNote from "./components/SingleNote";
import Create from "./components/Create";

function App() {
  const [type, setType] = useState("all");
  const [search, setSearch] = useState("");

  return (
    <>
      <Router>
        <Navbar setSearch={setSearch}/>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header setType={setType} /> <NotesList type={type} search={search} />
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
