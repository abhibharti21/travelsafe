import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [button, setButton] = useState(false);
  const [menuClass, setMenuCLass] = useState("");

  const menuHandler = () => {
    if (menuClass === "") {
      setButton(true);
      setMenuCLass("activeMenu");
    } else {
      setButton(false);
      setMenuCLass("");
    }
  };

  return (
    <div className="Header">
      <h1>Travel&Safe</h1>
      <nav className={menuClass}>
        <Link to={"/"} onClick={() => menuHandler()}>
          Home
        </Link>
        <Link to={"/About"} onClick={() => menuHandler()}>
          About
        </Link>
        <Link to={"/Gallery"} onClick={() => menuHandler()}>
          Gallery
        </Link>
        <Link to={"/wishList"} onClick={() => menuHandler()}>
          Wish-List
        </Link>
        <Link to={"/Booking"} onClick={() => menuHandler()}>
          Book Online
        </Link>
      </nav>
      <button onClick={() => menuHandler()}>
        {button ? <AiOutlineClose /> : <FiMenu />}
      </button>
    </div>
  );
};

export default Header;
