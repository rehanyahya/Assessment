import React, { useState, useEffect } from "react";
import "./styles.css";
import { RiSearchLine, RiCloseLine, RiMenuLine } from "react-icons/ri";

const NavBar = () => {
  const [windowsDimension, setWindowsDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowsDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const AnchorTag = ({ label }) => {
    const isMobile = windowsDimension.width <= 786;

    return isMobile ? (
      <div className="mobile-div">
        <a className="navbar-div" href="/">
          {label}
        </a>
      </div>
    ) : (
      <a className="navbar-div" href="/">
        {label}
      </a>
    );
  };

  return (
    <div>
      {windowsDimension.width >= 786 ? (
        <div className="navbar">
          <div>
            <a
              className="navbar-div"
              style={{
                paddingRight: 30,
              }}
            >
              AEON
            </a>
            <AnchorTag label="Showcase" />
            <AnchorTag label="Docs" />
            <AnchorTag label="Blogs" />
            <AnchorTag label="Analytics" />
            <AnchorTag label="Templates" />
            <AnchorTag label="Enterprise" />
          </div>
          <div className="navbar-search">
            <input placeholder="Search Documentation..." />
          </div>
        </div>
      ) : (
        <div>
          <div className="navbar-mobile">
            <div
              style={{
                flex: 1,
                fontSize: 20,
                color: "blue",
              }}
            >
              AEON
            </div>
            <div>
              <RiSearchLine size={25} />
            </div>

            <div
              style={{
                marginLeft: 16,
                fontSize: 30,
              }}
              onClick={() => setOpen(!isOpen)}
            >
              {isOpen ? <RiCloseLine /> : <RiMenuLine />}
            </div>
          </div>
          {isOpen && windowsDimension.width <= 786 ? (
            <div>
              <AnchorTag label="Showcase" />
              <AnchorTag label="Docs" />
              <AnchorTag label="Blogs" />
              <AnchorTag label="Analytics" />
              <AnchorTag label="Commerce" />
              <AnchorTag label="Templates" />
              <AnchorTag label="Enterprise" />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default NavBar;
