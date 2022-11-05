import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShop,
  faEdit,
  faUser,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

import "../Styles/Header.css";

function Header() {
  const [menu, setMenu] = useState(false);
  const [path, setPath] = useState('')

  useEffect(() => {
    setPath(window.location.pathname)
  }, [])
  


  return (
    <>
      <div className='navbar__component'>
        <FontAwesomeIcon
          icon={menu ? faClose : faBars}
          onClick={() => setMenu(!menu)}
          className='icon__hamburguer'
        />
        <div className={menu ? "showMenu" : "hideMenu"}>
          <div
            className='anchor__component'
            style={menu ? null : { display: "none" }}>
            <FontAwesomeIcon icon={faShop}></FontAwesomeIcon>
            <Link
              to={"/"}
              className={path === "/" && "selectedRoute"}>
              Product
            </Link>
            <br />

            <FontAwesomeIcon icon={faEdit} />
            <Link
              to={"/edit"}
              className={
                path === "/edit" && "selectedRoute"
              }>
              Edit
            </Link>
            <br />

            <FontAwesomeIcon icon={faUser} />
            <Link
              to={"login"}
              className={
                path === "/login" && "selectedRoute"
              }>
              Entrar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
