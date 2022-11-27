import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShop,
  faEdit,
  faUser,
  faClose,
  faUserPlus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import "../Styles/Header.css";

function Header() {
  const [menu, setMenu] = useState(false);
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

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
            {/*<FontAwesomeIcon icon={faShop}></FontAwesomeIcon>
            <Link to={"/"}>Produtos</Link>
            <br />
            */}
            <FontAwesomeIcon icon={faPlus} />
            <Link to={"/edit"}>Criar</Link>
            <br />

            <FontAwesomeIcon icon={faUser} />
            <Link to={"/login"}>Login</Link>
            <br />

            <FontAwesomeIcon icon={faUserPlus} />
            <Link to={"/signup"}>Registrar</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
