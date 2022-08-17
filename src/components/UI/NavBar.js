import MotionLink from "./MotionLink";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css"

const NavBar = () => {
  return (
    <>
      <Link to={"/contact"}>
        <MotionLink className={style.navBtn} animationDelay={0.5}>Contact</MotionLink>
      </Link>
      <Link to={"/shop"}>
        <MotionLink className={style.navBtn} animationDelay={0.7}>Shop</MotionLink>
      </Link>
    </>
  );
};

export default NavBar;
