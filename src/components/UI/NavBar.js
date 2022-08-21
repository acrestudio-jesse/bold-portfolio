import MotionLink from "./MotionLink";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { useState } from "react";

const NavBar = ({curPage}) => {

  return (
    <>
      {curPage !== "Home" && <Link to="/">
        <MotionLink
          className={style.navBtn}
          animationDelay={0.5}
        >
          Home
        </MotionLink>
      </Link>}
      {curPage !== "Contact" &&<Link to={"/contact"}>
        <MotionLink
          className={style.navBtn}
          animationDelay={0.65}
        >
          Contact
        </MotionLink>
      </Link>}
      {curPage !== "Shop" && <Link to={"/shop"}>
        <MotionLink
          className={style.navBtn}
          animationDelay={0.8}
        >
          Shop
        </MotionLink>
      </Link>}
    </>
  );
};

export default NavBar;
