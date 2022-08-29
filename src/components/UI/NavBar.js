import MotionLink from "./MotionLink";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

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
      {curPage !== "Resume" && <Link to={"/resume"}>
        <MotionLink
          className={style.navBtn}
          animationDelay={0.95}
        >
          Resume
        </MotionLink>
      </Link>}
    </>
  );
};

export default NavBar;
