import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (prop) => {
  const setSearch = prop.setSearch;
  const [clear, setClear] = useState(false);
  const [change, setChange] = useState("");
  useEffect(() => {
    if (change !== "") {
      setClear(true);
    } else {
      setClear(false);
    }
  }, [change]);
  return (
    <>
      <nav className="nav">
        <div className="content">
          <div className="searchBlock">
            <img
              src="../search.svg"
              alt="search"
              height="20px"
              width="20px"
              id="searchIcon"
            />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              value={change}
              onChange={(e) => {
                setSearch(e.target.value)
                setChange(e.target.value)
              }}
              autoComplete="off"
            />
            {clear && (
              <img
                src="../remove.svg"
                alt="clear"
                height="20px"
                width="20px"
                id="clearIcon"
                onClick={() => {
                  setSearch("");
                  setChange("");
                }}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
          <Link to={"/create"} id="linkCreate">
            <div className="addBlock">
              <img
                src="../plus.svg"
                alt="plus"
                height="20px"
                width="20px"
                id="plusIcon"
              />
              <p className="add">Add</p>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
