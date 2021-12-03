import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "../style/Navbar.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div>
            <div className={sidebar ? "sidebar" : "sidebar close"}>
              <div className="logo-details">
                <i onClick={showSidebar}>
                  <BsIcons.BsFillBootstrapFill />
                </i>
                <a>
                  <Link Link to="/home">
                    <span className="logo_name">Company</span>
                  </Link>
                </a>
              </div>
              <ul className="nav-links">
                <li>
                  <Link to="/dashboard">
                    <i>
                      <BsIcons.BsFillGrid1X2Fill />
                    </i>
                    <span className="link_name">Dashboard</span>
                  </Link>

                  <ul className="sub-menu blank">
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <Navbar />
                  </ul>
                </li>
                {/*nuevo menu*/}
                <li>
                  <div className="iocn-link">
                    <Link to="/user">
                      <i>
                        <FaIcons.FaUser />
                      </i>
                      <span className="link_name">User</span>
                    </Link>
                  </div>
                  <ul className="sub-menu blank">
                    <li>
                      <Link to="/user">User</Link>
                    </li>
                  </ul>
                </li>
                {/*termina menu*/}

                {/*nuevo menu*/}
                <li>
                  <div className="iocn-link">
                    <Link to="/favorites">
                      <i>
                        <AiIcons.AiFillHeart />
                      </i>
                      <span className="link_name">Favorites</span>
                    </Link>
                  </div>
                  <ul className="sub-menu blank">
                    <li>
                      <Link to="/favorites">Favorites</Link>
                    </li>
                  </ul>
                </li>
                {/*termina menu*/}
                <li>
                  <div className="iocn-link">
                    <Link to="/settings">
                      <i>
                        <IoIcons.IoMdSettings />
                      </i>
                      <span className="link_name">Settings</span>
                    </Link>
                  </div>
                  <ul className="sub-menu blank">
                    <li>
                      <Link to="/settings">Settings</Link>
                    </li>
                  </ul>
                </li>
                {/*nuevo menu*/}
                <li>
                  <div className="iocn-link">
                    <Link to="/information">
                      <i>
                        <AiIcons.AiFillInfoCircle />
                      </i>
                      <span className="link_name">Information</span>
                    </Link>
                  </div>
                  <ul className="sub-menu blank">
                    <li>
                      <Link to="/information">Information</Link>
                    </li>
                  </ul>
                </li>
                {/*termina menu*/}
              </ul>
            </div>
          </div>
        </IconContext.Provider>
      </>
    </>
  );
}

export default Navbar;
