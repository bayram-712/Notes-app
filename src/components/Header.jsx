import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setItemType } from "../features/note/noteSlice";

const Header = () => {
  const types = ["all", "personal", "home", "business"];
  const { type } = useSelector((store) => store.note);
  const dispatch = useDispatch();
  
  return (
    <>
      <header className="top">
        <div className="content">
          <section className="left">
            <div className="upper">
              <Link to={"/"}>
                <p>Your notes</p>
              </Link>
            </div>
            <div
              className="lower"
              onClick={(e) => {
                dispatch(setItemType(e.target.id));
              }}
            >
              {types.map((item) => {
                if (item === type) {
                  return (
                    <p key={item} id={item} className="current">
                      {item}
                    </p>
                  );
                }
                return (
                  <p key={item} id={item}>
                    {item}
                  </p>
                );
              })}
            </div>
          </section>
          <section className="right"></section>
        </div>
      </header>
    </>
  );
};

export default Header;
