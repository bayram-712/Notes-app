import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = (prop) => {
  const setType = prop.setType;
  const types = document.getElementsByClassName("lower");

  useEffect(() => {
    {
      types &&
        types[0].addEventListener("click", (e) => {
          for (let type of types[0].children) {
            type.classList.remove("current");
          }
          setType(e.target.id);
          e.target.classList.add("current");
        });
    }
  });

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
            <div className="lower">
              <p id="all" className="current">
                All
              </p>
              <p id="personal">Personal</p>
              <p id="home">Home</p>
              <p id="business">Business</p>
            </div>
          </section>
          <section className="right"></section>
        </div>
      </header>
    </>
  );
};

export default Header;
