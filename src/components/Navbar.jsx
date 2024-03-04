import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setItemSearch } from "../features/note/noteSlice";

const Navbar = () => {
  const { search } = useSelector((store) => store.note);
  const dispatch = useDispatch();

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
              value={search}
              onChange={(e) => {
                dispatch(setItemSearch(e.target.value));
              }}
              autoComplete="off"
            />
            {search.length !== 0 && (
              <img
                src="../remove.svg"
                alt="clear"
                height="20px"
                width="20px"
                id="clearIcon"
                onClick={() => {
                  dispatch(setItemSearch(""));
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
